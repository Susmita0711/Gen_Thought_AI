import React, { useState } from 'react';
import { ProjectBlueprint, TechStackItem } from '../types/blueprint';

interface ResultsDashboardProps {
  blueprint: ProjectBlueprint;
  onTweakIdea: () => void;
  onBackToSearch: () => void;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  blueprint,
  onTweakIdea,
  onBackToSearch
}) => {
  const [selectedTech, setSelectedTech] = useState<TechStackItem | null>(null);
  const [completedDeliverables, setCompletedDeliverables] = useState<Record<string, boolean>>({});
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [shareToast, setShareToast] = useState(false);

  const toggleDeliverable = (key: string) => {
    setCompletedDeliverables(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleExportMarkdown = () => {
    const md = `# ${blueprint.projectName} - Project Blueprint
> ${blueprint.tagline}

**Original Concept:** "${blueprint.originalConcept}"  
**Uniqueness Score:** ${blueprint.uniquenessScore}/100  
**Market Assessment:** ${blueprint.marketAssessment}  

## Problem Statement
${blueprint.problemStatement}
*${blueprint.targetAudience}*

## Key Features
${blueprint.keyFeatures.map(f => `- **${f.title}**: ${f.description}`).join('\n')}

## AI Integration
${blueprint.aiIntegration.map(a => `- **${a.title}**: ${a.description}`).join('\n')}

## Tech Stack
${blueprint.techStack.map(t => `- **${t.name}** (${t.category}): ${t.reason}`).join('\n')}

## MVP Roadmap
${blueprint.roadmap.map(r => `### ${r.phase} - ${r.title}\n${r.description}\n${r.keyDeliverables?.map(d => `  - [ ] ${d}`).join('\n') || ''}`).join('\n\n')}

---
*Engineered with IdeaForge AI*
`;

    navigator.clipboard.writeText(md);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2500);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2500);
  };

  // Radial progress calculations for Uniqueness Score
  const strokeDashoffset = 251.2 - (251.2 * blueprint.uniquenessScore) / 100;

  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-12 py-8 flex flex-col gap-12">
      {/* Toast Notification */}
      {(copiedMarkdown || shareToast) && (
        <div className="fixed top-20 right-6 z-50 bg-[#8083ff] text-[#0d0096] font-code text-xs px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 animate-bounce">
          <span className="material-symbols-outlined text-sm">check_circle</span>
          {copiedMarkdown ? 'Blueprint copied as Markdown!' : 'Shareable link copied to clipboard!'}
        </div>
      )}

      {/* Header Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-3 text-[#c7c4d7] font-code text-xs md:text-sm">
          <button
            onClick={onBackToSearch}
            className="flex items-center gap-1 hover:text-[#4cd7f6] transition-colors cursor-pointer mr-2"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back
          </button>
          <span className="material-symbols-outlined text-[#4cd7f6]">history</span>
          <span className="truncate max-w-xl">Original Concept: "{blueprint.originalConcept}"</span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#dae2fd] leading-tight">
          AI-Augmented: <span className="text-[#c0c1ff]">{blueprint.projectName}</span>
        </h1>

        <div className="flex flex-wrap gap-4 mt-2">
          <button
            onClick={onTweakIdea}
            className="ai-gradient-btn text-[#001f26] font-code text-xs font-bold px-6 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer shadow-lg"
          >
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              auto_awesome
            </span>
            Tweak Idea
          </button>

          <button
            onClick={handleExportMarkdown}
            className="bg-transparent border border-[#c0c1ff] text-[#c0c1ff] font-code text-xs px-6 py-3 rounded hover:bg-[#c0c1ff]/10 transition-colors cursor-pointer flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">description</span>
            {copiedMarkdown ? 'Copied!' : 'Export as Markdown'}
          </button>

          <button
            onClick={handleShare}
            className="bg-transparent border border-[#908fa0] text-[#dae2fd] font-code text-xs px-6 py-3 rounded flex items-center gap-2 hover:bg-[#2d3449] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">share</span>
            Share
          </button>
        </div>
      </section>

      {/* Core Stats & Overview (Bento Grid) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Uniqueness Score */}
        <div className="glass-panel rounded-lg p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:shadow-[0_0_20px_rgba(192,193,255,0.15)] transition-all">
          <h3 className="font-code text-xs font-bold text-[#c7c4d7] tracking-wider uppercase mb-6 w-full text-left">
            UNIQUENESS SCORE
          </h3>

          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg className="transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#2d3449" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#4cd7f6"
                strokeWidth="8"
                strokeLinecap="round"
                style={{
                  strokeDasharray: '251.2',
                  strokeDashoffset: `${strokeDashoffset}`,
                  transition: 'stroke-dashoffset 1.5s ease-in-out'
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-4xl font-extrabold text-[#4cd7f6]">{blueprint.uniquenessScore}</span>
              <span className="font-code text-xs text-[#c7c4d7]">/100</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="font-code text-[11px] text-[#4cd7f6] font-bold block uppercase tracking-wider">
              {blueprint.marketAssessment}
            </span>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="glass-panel rounded-lg p-6 md:col-span-2 flex flex-col gap-4 group hover:border-[#464554] transition-colors">
          <div className="flex justify-between items-start">
            <h3 className="font-code text-xs font-bold text-[#c0c1ff] tracking-wider uppercase">
              PROBLEM STATEMENT
            </h3>
            <span className="material-symbols-outlined text-[#908fa0]">psychology</span>
          </div>

          <p className="font-display text-[#dae2fd] text-sm md:text-base leading-relaxed">
            {blueprint.problemStatement}
          </p>

          <div className="mt-auto pt-4 border-t border-[#2d3449] flex items-center justify-between">
            <span className="font-code text-xs text-[#4cd7f6] font-medium">
              {blueprint.targetAudience}
            </span>
            <span className="font-code text-[10px] text-[#908fa0] bg-[#131b2e] px-2 py-0.5 rounded border border-[#2d3449]">
              Verified Gap
            </span>
          </div>
        </div>
      </section>

      {/* Key Features & AI Integration */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Key Features */}
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-2xl font-bold text-[#dae2fd] border-b border-[#2d3449] pb-3">
            Key Features
          </h2>

          <div className="flex flex-col gap-4">
            {blueprint.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className={`bg-[#222a3d] rounded-lg p-5 border-l-4 ${
                  idx % 2 === 0 ? 'border-[#c0c1ff]' : 'border-[#4cd7f6]'
                } hover:bg-[#2d3449] transition-colors`}
              >
                <h4 className={`font-code text-sm font-bold mb-1.5 ${
                  idx % 2 === 0 ? 'text-[#c0c1ff]' : 'text-[#4cd7f6]'
                }`}>
                  {feat.title}
                </h4>
                <p className="text-[#c7c4d7] text-xs md:text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Integration */}
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-2xl font-bold text-[#dae2fd] border-b border-[#2d3449] pb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#c0c1ff]" style={{ fontVariationSettings: "'FILL' 1" }}>
              neurology
            </span>
            AI Integration
          </h2>

          <div className="glass-panel p-6 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8083ff] opacity-10 rounded-bl-full blur-2xl"></div>

            <ul className="space-y-6 font-code text-xs text-[#dae2fd]">
              {blueprint.aiIntegration.map((aiItem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4cd7f6] text-base mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <strong className="text-[#c0c1ff] text-sm block mb-1">
                      {aiItem.title}
                    </strong>
                    <span className="text-[#c7c4d7] leading-relaxed block font-sans text-xs md:text-sm">
                      {aiItem.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recommended Tech Stack */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-[#2d3449] pb-3">
          <h2 className="font-display text-2xl font-bold text-[#dae2fd]">
            Recommended Tech Stack
          </h2>
          <span className="font-code text-xs text-[#908fa0]">Click any stack item for architectural reasoning</span>
        </div>

        <div className="flex flex-wrap gap-3">
          {blueprint.techStack.map((tech, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTech(selectedTech?.name === tech.name ? null : tech)}
              className={`px-4 py-2 rounded font-code text-xs border transition-all cursor-pointer flex items-center gap-2 ${
                selectedTech?.name === tech.name
                  ? 'bg-[#c0c1ff] text-[#1000a9] border-[#c0c1ff] font-bold shadow-lg'
                  : 'bg-[#131b2e] border-[#334155] text-[#dae2fd] hover:border-[#4cd7f6] hover:text-[#4cd7f6]'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#4cd7f6]"></span>
              {tech.name}
              <span className="text-[10px] opacity-60">({tech.category})</span>
            </button>
          ))}
        </div>

        {/* Selected Tech detail card */}
        {selectedTech && (
          <div className="bg-[#171f33] border border-[#03b5d3] p-4 rounded-lg font-code text-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-2 animate-fadeIn">
            <div>
              <span className="text-[#4cd7f6] font-bold mr-2">[{selectedTech.category}] {selectedTech.name}:</span>
              <span className="text-[#dae2fd] font-sans">{selectedTech.reason}</span>
            </div>
            <button
              onClick={() => setSelectedTech(null)}
              className="text-[#908fa0] hover:text-[#dae2fd] text-xs underline cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </section>

      {/* MVP Roadmap */}
      <section className="flex flex-col gap-6 mb-12">
        <h2 className="font-display text-2xl font-bold text-[#dae2fd] border-b border-[#2d3449] pb-3">
          MVP Roadmap
        </h2>

        <div className="relative pl-8 border-l-2 border-[#2d3449] space-y-10 my-2">
          {blueprint.roadmap.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node Bullet */}
              <div className={`absolute -left-[41px] top-1 w-5 h-5 bg-[#0b1326] border-2 rounded-full transition-colors ${
                idx === 0 ? 'border-[#c0c1ff] bg-[#c0c1ff]/20' : idx === 1 ? 'border-[#4cd7f6]' : 'border-[#908fa0]'
              }`}></div>

              <h4 className={`font-code text-xs font-bold mb-1 ${
                idx === 0 ? 'text-[#c0c1ff]' : idx === 1 ? 'text-[#4cd7f6]' : 'text-[#908fa0]'
              }`}>
                {step.phase}
              </h4>

              <h5 className="font-code text-base font-bold text-[#dae2fd] mb-2">
                {step.title}
              </h5>

              <p className="text-[#c7c4d7] text-xs md:text-sm mb-4 leading-relaxed max-w-3xl">
                {step.description}
              </p>

              {/* Deliverable Checkboxes */}
              {step.keyDeliverables && step.keyDeliverables.length > 0 && (
                <div className="bg-[#131b2e] border border-[#2d3449] p-4 rounded-lg max-w-2xl">
                  <span className="font-code text-[11px] font-bold text-[#908fa0] uppercase tracking-wider block mb-2">
                    Key Sprint Deliverables:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-code text-xs">
                    {step.keyDeliverables.map((deliv, dIdx) => {
                      const dKey = `${idx}-${dIdx}`;
                      const isChecked = !!completedDeliverables[dKey];
                      return (
                        <label
                          key={dIdx}
                          onClick={() => toggleDeliverable(dKey)}
                          className={`flex items-center gap-2 cursor-pointer p-1.5 rounded transition-colors ${
                            isChecked ? 'bg-[#8083ff]/10 text-[#c0c1ff] line-through' : 'text-[#dae2fd] hover:bg-[#171f33]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="rounded border-[#464554] text-[#8083ff] focus:ring-0"
                          />
                          <span>{deliv}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
