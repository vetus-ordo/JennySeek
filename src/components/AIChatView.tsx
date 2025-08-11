'use client';
import React from 'react';
import { getFunctions, httpsCallable } from "firebase/functions";
import Button from './ui/Button';
import { app } from '@/lib/firebase'; // Import the initialized app

const AIChatView = () => {
  const [prompt, setPrompt] = React.useState('');
  const [history, setHistory] = React.useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [loading, setLoading] = React.useState(false);

  const callAI = async (currentPrompt: string) => {
    if (!currentPrompt) return;

    setLoading(true);
    setHistory(prev => [...prev, { role: 'user', text: currentPrompt }]);

    try {
      const functions = getFunctions(app); // Pass the initialized app
      const askJennySeekAI = httpsCallable(functions, 'askJennySeekAI');

      const result = await askJennySeekAI({ prompt: currentPrompt });
      const data = result.data as { response?: string; error?: string };

      const responseText = data.response || data.error || 'Something went wrong.';
      setHistory(prev => [...prev, { role: 'ai', text: responseText }]);

    } catch (error) {
      console.error("Error calling function:", error);
      const errorText = 'Could not connect to the AI. Maybe the circuits are busy!';
      setHistory(prev => [...prev, { role: 'ai', text: errorText }]);
    }

    setLoading(false);
    setPrompt('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    callAI(prompt);
  };

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg border">
      <h2 className="text-2xl font-bold text-center mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Chat with JennySeek AI</h2>

      <div className="space-y-4 mb-4 h-96 overflow-y-auto p-4 bg-gray-50 rounded-lg">
        {history.map((entry, index) => (
          <div key={index} className={`flex ${entry.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-3 rounded-lg max-w-md ${entry.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <p>{entry.text}</p>
            </div>
          </div>
        ))}
        {loading && <div className="text-center text-gray-500">AI is thinking...</div>}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask a question..."
          className="block w-full pl-4 pr-3 py-3 border border-gray-300 rounded-lg"
          disabled={loading}
        />
        <Button type="submit" loading={loading} disabled={!prompt.trim()}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default AIChatView;