import React from 'react';

interface HowItWorksViewProps {
  onBackToHome: () => void;
  onTryTemplate: (prompt: string) => void;
}

export const HowItWorksView: React.FC<HowItWorksViewProps> = ({ onBackToHome, onTryTemplate }) => {
  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-12 py-10 flex flex-col gap-10">
      <div className="flex items-center justify-between border-b border-[#e2d8ff] pb-4">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-[#1d2433]">
            How IdeaForge AI Works
          </h1>
          <p className="text-[#4e5b70] font-code text-xs mt-1">
            Our multi-stage AI reasoning pipeline transforms unrefined ideas into production-ready blueprints.
          </p>
        </div>
        <button
          onClick={onBackToHome}
          className="font-code text-xs text-[#4b3ca5] border border-[#8e7ae6] px-4 py-2 rounded hover:bg-[#f1ecff] transition-colors cursor-pointer"
        >
          Back to Home
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-display">
        {/* Stage 1 */}
        <div className="glass-panel rounded-xl p-6 border border-[#d9d0f8] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#f0ebff] text-[#5b4db1] font-code font-bold text-sm flex items-center justify-center">
            01
          </div>
          <h3 className="font-bold text-lg text-[#1d2433]">Intent Decomposition</h3>
          <p className="text-xs text-[#4e5b70] leading-relaxed">
            The AI analyzes natural language prompts to detect hidden architectural requirements, target user personas, and core value loops.
          </p>
        </div>

        {/* Stage 2 */}
        <div className="glass-panel rounded-xl p-6 border border-[#d9d0f8] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#ebfaf2] text-[#2d7d59] font-code font-bold text-sm flex items-center justify-center">
            02
          </div>
          <h3 className="font-bold text-lg text-[#1d2433]">Stack Optimization</h3>
          <p className="text-xs text-[#4e5b70] leading-relaxed">
            Matches backend frameworks, databases, and AI models to scalability, latency constraints, and real-world developer ergonomics.
          </p>
        </div>

        {/* Stage 3 */}
        <div className="glass-panel rounded-xl p-6 border border-[#d9d0f8] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#fff1f1] text-[#bb5e68] font-code font-bold text-sm flex items-center justify-center">
            03
          </div>
          <h3 className="font-bold text-lg text-[#1d2433]">Roadmap Synthesis</h3>
          <p className="text-xs text-[#4e5b70] leading-relaxed">
            Breaks execution into weekly engineering sprints with verifiable deliverables, preventing scope creep and delay.
          </p>
        </div>

        {/* Stage 4 */}
        <div className="glass-panel rounded-xl p-6 border border-[#d9d0f8] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#ebfaf2] text-[#2d7d59] font-code font-bold text-sm flex items-center justify-center">
            04
          </div>
          <h3 className="font-bold text-lg text-[#1d2433]">Viability Scoring</h3>
          <p className="text-xs text-[#4e5b70] leading-relaxed">
            Evaluates market uniqueness and competition density to ensure you build something truly differentiated.
          </p>
        </div>
      </div>

      <div className="bg-[#f4f1ff] border border-[#d9d0f8] rounded-xl p-8 mt-4 text-center max-w-2xl mx-auto flex flex-col items-center gap-4">
        <h3 className="font-display text-xl font-bold text-[#1d2433]">
          Ready to Architect Your Next Big Project?
        </h3>
        <p className="text-[#4e5b70] text-xs font-code max-w-lg">
          Start with a raw concept or try one of our featured pre-configured templates.
        </p>
        <button
          onClick={() => onTryTemplate('AI-augmented voice task manager for students')}
          className="ai-gradient-btn text-[#1c2c29] font-code text-xs font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
        >
          Try Sample Idea Generation
        </button>
      </div>
    </div>
  );
};
