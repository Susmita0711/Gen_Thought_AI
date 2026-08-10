import React from 'react';

interface BentoFeaturesProps {
  onSelectSample: (sampleKey: 'daily_tasks' | 'plant_watering') => void;
}

export const BentoFeatures: React.FC<BentoFeaturesProps> = ({ onSelectSample }) => {
  return (
    <div className="max-w-[1280px] mx-auto w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Feature 1: Tech Stack */}
      <div 
        onClick={() => onSelectSample('plant_watering')}
        className="glass-card rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-[#d9d0f8] hover:border-[#7ccfa2]"
      >
        <div className="w-12 h-12 rounded-lg bg-[#f0ebff] flex items-center justify-center mb-6 group-hover:bg-[#dff9eb] transition-colors">
          <span className="material-symbols-outlined text-[#5b4db1] text-2xl">
            code_blocks
          </span>
        </div>
        <h3 className="font-display text-xl font-bold text-[#1d2433] mb-3">
          Instant Tech Stack
        </h3>
        <p className="text-[#4e5b70] font-display text-sm mb-6 leading-relaxed">
          Get an optimized architecture recommendation based on scalability, your team's skillset, and current industry standards.
        </p>
        <div className="flex gap-2 flex-wrap font-code text-xs">
          <span className="px-2.5 py-1 rounded bg-[#f0ebff] text-[#5b4db1] border border-[#d8d0f9]">
            Next.js
          </span>
          <span className="px-2.5 py-1 rounded bg-[#ebfaf2] text-[#2d7d59] border border-[#bfe9d0]">
            PostgreSQL
          </span>
          <span className="px-2.5 py-1 rounded bg-[#fff0f2] text-[#bb5e68] border border-[#f4c9cf]">
            Redis
          </span>
        </div>
      </div>

      {/* Feature 2: MVP Roadmap */}
      <div 
        onClick={() => onSelectSample('daily_tasks')}
        className="glass-card rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-[#d9d0f8] hover:border-[#8e7ae6]"
      >
        <div className="w-12 h-12 rounded-lg bg-[#f0ebff] flex items-center justify-center mb-6 group-hover:bg-[#ebfaf2] transition-colors">
          <span className="material-symbols-outlined text-[#8e7ae6] text-2xl">
            route
          </span>
        </div>
        <h3 className="font-display text-xl font-bold text-[#1d2433] mb-3">
          MVP Roadmap
        </h3>
        <p className="text-[#4e5b70] font-display text-sm mb-6 leading-relaxed">
          We break down your abstract idea into actionable, weekly engineering sprints to get you to launch faster.
        </p>
        <div className="space-y-3 font-code text-xs">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#7ccfa2]"></div>
            <span className="text-[#1d2433] font-medium">Phase 1: Core Auth</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#c9c0f7]"></div>
            <span className="text-[#4e5b70]">Phase 2: Data Schema</span>
          </div>
        </div>
      </div>

      {/* Feature 3: Uniqueness Score */}
      <div 
        onClick={() => onSelectSample('daily_tasks')}
        className="glass-card rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative overflow-hidden border border-[#d9d0f8] hover:border-[#7ccfa2]"
      >
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#aedfc1] opacity-25 rounded-full blur-xl group-hover:opacity-40 transition-opacity"></div>
        <div className="w-12 h-12 rounded-lg bg-[#f0ebff] flex items-center justify-center mb-6 group-hover:bg-[#ebfaf2] transition-colors">
          <span className="material-symbols-outlined text-[#2d7d59] text-2xl">
            radar
          </span>
        </div>
        <h3 className="font-display text-xl font-bold text-[#1d2433] mb-3">
          Market Viability
        </h3>
        <p className="text-[#4e5b70] font-display text-sm mb-6 leading-relaxed">
          Analyze market saturation and get a uniqueness score before you write a single line of code.
        </p>
        
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Radial Gauge SVG */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-[#e8e1ff]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
              />
              <path
                className="text-[#53b883]"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="85, 100"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute font-code text-sm font-bold text-[#2d7d59]">85</span>
          </div>
          <div className="flex flex-col">
            <span className="font-code text-xs font-bold text-[#2d7d59] uppercase tracking-wider">
              HIGH POTENTIAL
            </span>
            <span className="text-[11px] text-[#4e5b70] mt-0.5">
              Low competition detected
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
