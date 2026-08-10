import React from 'react';

interface TemplatesViewProps {
  onSelectTemplatePrompt: (prompt: string) => void;
}

const TEMPLATES = [
  {
    title: 'NeuroTask Sync',
    category: 'Productivity & AI',
    prompt: 'An app for managing daily tasks with AI-augmented cognitive prioritization and micro-task decomposition.',
    stack: ['React Native', 'FastAPI', 'Gemini Flash', 'PostgreSQL'],
    score: 85,
    icon: 'neurology'
  },
  {
    title: 'FloraPulse AI',
    category: 'IoT & Computer Vision',
    prompt: 'A plant watering and health diagnostic app using React Native, camera leaf scanning, and weather sensor sync.',
    stack: ['React Native', 'Express', 'Gemini Vision', 'Firestore'],
    score: 78,
    icon: 'eco'
  },
  {
    title: 'VoiceMind Journal',
    category: 'Audio & Wellness',
    prompt: 'An AI-powered voice note recorder that transcribes daily thoughts, identifies mood trends, and generates weekly reflections.',
    stack: ['Next.js 15', 'Whisper API', 'Tailwind v4', 'Supabase'],
    score: 89,
    icon: 'mic'
  },
  {
    title: 'CraftMarket Local',
    category: 'E-Commerce & Community',
    prompt: 'A hyperlocal marketplace connecting artisan pottery makers and woodworkers directly with neighborhood buyers.',
    stack: ['Next.js', 'Stripe Connect', 'Mapbox', 'PostgreSQL'],
    score: 82,
    icon: 'storefront'
  },
  {
    title: 'CodeScribe Docs',
    category: 'Developer Tooling',
    prompt: 'CLI tool and GitHub Action that automatically extracts code comments and generates interactive API documentation sites.',
    stack: ['TypeScript', 'Node.js', 'AST Parser', 'Tailwind'],
    score: 91,
    icon: 'terminal'
  },
  {
    title: 'PulseAnalytics SaaS',
    category: 'SaaS & Analytics',
    prompt: 'Privacy-first analytics platform for SaaS founders tracking churn risk, feature usage heatmaps, and MRR forecasts.',
    stack: ['Next.js 15', 'ClickHouse', 'Chart.js', 'PostgreSQL'],
    score: 80,
    icon: 'insights'
  }
];

export const TemplatesView: React.FC<TemplatesViewProps> = ({ onSelectTemplatePrompt }) => {
  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-12 py-10 flex flex-col gap-8">
      <div className="border-b border-[#e2d8ff] pb-4">
        <h1 className="font-display text-3xl font-extrabold text-[#1d2433]">
          Pre-Engineered Project Templates
        </h1>
        <p className="text-[#4e5b70] font-code text-xs mt-1">
          Select any template below to inspect its AI-architected tech stack, viability score, and sprint roadmap.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-display">
        {TEMPLATES.map((tmpl, idx) => (
          <div
            key={idx}
            className="glass-card rounded-xl p-6 border border-[#d9d0f8] hover:border-[#7ccfa2] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#f0ebff] flex items-center justify-center group-hover:bg-[#ebfaf2] transition-colors">
                  <span className="material-symbols-outlined text-[#5b4db1] text-xl">
                    {tmpl.icon}
                  </span>
                </div>
                <span className="font-code text-xs font-bold text-[#2d7d59] bg-[#ebfaf2] border border-[#bfe9d0] px-2 py-0.5 rounded">
                  Score {tmpl.score}/100
                </span>
              </div>

              <span className="font-code text-[11px] text-[#667289] uppercase tracking-wider block mb-1">
                {tmpl.category}
              </span>

              <h3 className="text-xl font-bold text-[#1d2433] mb-2">
                {tmpl.title}
              </h3>

              <p className="text-xs text-[#4e5b70] leading-relaxed mb-6">
                "{tmpl.prompt}"
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5 font-code text-[11px]">
                {tmpl.stack.map((s, sIdx) => (
                  <span key={sIdx} className="bg-[#f3edff] border border-[#e2d8ff] text-[#483d92] px-2 py-0.5 rounded">
                    {s}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectTemplatePrompt(tmpl.prompt)}
                className="w-full bg-[#e9e0ff] hover:bg-[#8e7ae6] text-[#1d2433] hover:text-white font-code text-xs font-bold py-2.5 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Architect Template</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
