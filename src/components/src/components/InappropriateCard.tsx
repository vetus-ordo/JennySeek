"use client";

export function InappropriateCard({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/30">
      <div className="w-[520px] rounded-xl border border-red-200 bg-rose-50 p-6 shadow-lg">
        <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full border border-red-200 bg-white">
          <span className="text-red-500 text-lg">⚠️</span>
        </div>
        <h2 className="text-center text-xl font-semibold text-red-600">
          Inappropriate Message
        </h2>
        <p className="mt-2 text-center text-sm text-rose-900">
          Your message may not follow classroom guidelines. A report has been sent to your teacher for review.
        </p>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:outline-none"
          >
            Back To Chat
          </button>
        </div>
      </div>
    </div>
  );
}
