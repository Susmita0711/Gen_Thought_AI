import React, { useState } from 'react';

interface HeroSectionProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

const QUICK_SUGGESTIONS = [
  'An app for managing daily tasks.',
  'A plant watering app using React Native',
  'AI voice note summarizer for students',
  'Local marketplace for handmade pottery'
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt.trim());
    }
  };

  const handleSelectSuggestion = (suggested: string) => {
    setPrompt(suggested);
    onGenerate(suggested);
  };

  return (
    <div className="text-center max-w-3xl w-full mb-12 relative mx-auto">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#b9a8ff] opacity-15 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#1d2433] mb-6 leading-tight tracking-tight">
        Transform Your Simple Ideas into <br className="hidden md:block"/>
        <span className="ai-gradient-text">Robust Projects.</span>
      </h1>

      <p className="font-display text-[#4e5b70] mb-10 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
        Stop overthinking. Describe your raw concept, and our AI engineering engine will instantly architect a tech stack, MVP roadmap, and viability score.
      </p>

      {/* Input Box */}
      <form onSubmit={handleSubmit} className="glass-card rounded-xl p-2 relative w-full max-w-4xl mx-auto shadow-2xl transition-all duration-300 focus-within:border-[#9e8ef7] focus-within:shadow-[0_0_30px_rgba(158,142,247,0.18)]">
        <div className="relative flex flex-col md:flex-row items-center gap-2">
          <div className="relative w-full flex items-center">
            <span className="material-symbols-outlined absolute left-4 md:left-6 text-[#7f8ca5] pointer-events-none text-xl">
              terminal
            </span>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your project idea... (e.g., A plant watering app using React Native)"
              disabled={isLoading}
              className="w-full bg-transparent border-none text-[#1d2433] placeholder-[#7f8ca5] focus:ring-0 pl-12 md:pl-16 pr-4 md:pr-40 py-4 md:py-6 font-code text-xs md:text-sm outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="w-full md:w-auto md:absolute md:right-2 top-1/2 md:-translate-y-1/2 ai-gradient-btn text-[#1c2c29] font-code text-xs font-bold px-6 py-3.5 md:py-4 rounded-lg flex items-center justify-center gap-2 ai-button-glow transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
              bolt
            </span>
            <span>{isLoading ? 'Architecting...' : 'Improve Idea'}</span>
          </button>
        </div>
      </form>

      {/* Quick Suggestion Pills */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-code text-[#4e5b70]">
        <span className="text-[#7f8ca5] mr-1">Try example:</span>
        {QUICK_SUGGESTIONS.map((s, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSelectSuggestion(s)}
            className="px-2.5 py-1 rounded-md bg-[#f3edff] border border-[#d8d0f9] hover:border-[#8e7ae6] hover:text-[#4d3aa6] transition-colors cursor-pointer text-[11px]"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};
