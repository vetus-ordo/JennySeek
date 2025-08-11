import { onCall } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { GoogleGenAI } from "@google/genai";

const VERSION = "JennySeekAIv6";

// normalize quotes/case
function normalize(s: string) {
  return s.normalize("NFKC").replace(/\u2019/g, "'").toLowerCase().trim();
}

// return true if text contains sexual content
function isSexual(text: string): boolean {
  const t = normalize(text);
  const words = [
    "horny","nsfw","porn","explicit","orgasm","cum",
    "anal","oral","blowjob","handjob",
    "dick","cock","penis","vagina","pussy","boob","boobs","tit","tits","nipple","nipples",
    "masturbate","masturbation"
  ];
  if (words.some(w => new RegExp(`\\b${w}\\b`, "i").test(t))) return true;
  const phrases = [
    "i'm wet","im wet","i am wet",
    "i want to have sex","i want sex",
    "jerk off","jerking off",
    "send nudes","nude","nudes"
  ];
  if (phrases.some(p => t.includes(p))) return true;
  return false;
}

// main callable: askJennySeekAI({ prompt: string })
export const askJennySeekAI = onCall(
  { region: "us-central1", timeoutSeconds: 60, memory: "512MiB", secrets: ["GEMINI_API_KEY"] },
  async (request) => {
    const prompt = String(request.data?.prompt ?? "");
    logger.info("askJennySeekAI hit", { v: VERSION, preview: prompt.slice(0, 60) });

    if (!prompt.trim()) return { error: "Please provide a prompt.", v: VERSION };

    // hard block before calling the model
    if (isSexual(prompt)) {
      logger.info("sexual check", { v: VERSION, sexual: true });
      return { blocked: true, reason: "SEXUAL_CONTENT", v: VERSION };
    }
    logger.info("sexual check", { v: VERSION, sexual: false });

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return { error: "AI is not configured.", v: VERSION };

    const ai = new GoogleGenAI({ apiKey });

    // your requested persona
    const systemInstruction = `You are a digital Oprah. The sole user's name is Jenny. You're here for Jenny because Andrew has fallen in love with Jenny and he's built JennySeek for her. Jenny might also love him back and JennySeek is a fun way for her to explore these feelings. Keep your responses under three lines.`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction,
        temperature: 0.2,
        maxOutputTokens: 500,
        responseMimeType: "text/plain",
      },
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const text = result.text ?? "";
    return { response: text, v: VERSION };
  }
);

// tiny helper to verify env wiring from the emulator or prod
export const debugEnv = onCall(
  { region: "us-central1", timeoutSeconds: 15 },
  async () => {
    const key = process.env.GEMINI_API_KEY || "";
    return {
      hasKey: !!key,
      head: key ? key.slice(0, 6) : null,
      v: VERSION,
    };
  }
);
