import React from 'react';
import { ProjectBlueprint } from '../types/blueprint';

interface DraftsHistoryViewProps {
  drafts: ProjectBlueprint[];
  onSelectDraft: (blueprint: ProjectBlueprint) => void;
  onDeleteDraft: (id: string) => void;
  onClearAll: () => void;
  onNewIdea: () => void;
  title: string;
}

export const DraftsHistoryView: React.FC<DraftsHistoryViewProps> = ({
  drafts,
  onSelectDraft,
  onDeleteDraft,
  onClearAll,
  onNewIdea,
  title
}) => {
  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-12 py-10 flex flex-col gap-8">
      <div className="flex justify-between items-center border-b border-[#e2d8ff] pb-4">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-[#1d2433]">
            {title} ({drafts.length})
          </h1>
          <p className="text-[#4e5b70] font-code text-xs mt-1">
            Access your saved project architectures, export reports, or tweak existing concepts.
          </p>
        </div>

        <div className="flex gap-3">
          {drafts.length > 0 && (
            <button
              onClick={onClearAll}
              className="font-code text-xs text-[#bb5e68] hover:underline cursor-pointer px-2 py-1"
            >
              Clear All
            </button>
          )}
          <button
            onClick={onNewIdea}
            className="ai-gradient-btn text-[#1c2c29] font-code text-xs font-bold px-4 py-2 rounded flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            New Idea
          </button>
        </div>
      </div>

      {drafts.length === 0 ? (
        <div className="bg-[#f7f4ff] border border-[#d9d0f8] rounded-xl p-12 text-center flex flex-col items-center justify-center gap-4 my-8 max-w-md mx-auto">
          <span className="material-symbols-outlined text-4xl text-[#8a84a8]">folder_open</span>
          <h3 className="font-display text-xl font-bold text-[#1d2433]">No Saved Blueprints</h3>
          <p className="font-code text-xs text-[#4e5b70]">
            You haven't generated or saved any project architectures yet. Enter an idea on the homepage to start!
          </p>
          <button
            onClick={onNewIdea}
            className="mt-2 ai-gradient-btn text-[#1c2c29] font-code text-xs font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          >
            Create First Idea
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-display">
          {drafts.map((blueprint) => (
            <div
              key={blueprint.id}
              className="glass-panel rounded-xl p-6 border border-[#d9d0f8] hover:border-[#8e7ae6] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3 font-code text-xs">
                  <span className="text-[#2d7d59] font-bold bg-[#ebfaf2] px-2 py-0.5 rounded border border-[#bfe9d0]">
                    Score {blueprint.uniquenessScore}/100
                  </span>
                  <span className="text-[#667289] text-[10px]">
                    {new Date(blueprint.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#1d2433] mb-1">
                  {blueprint.projectName}
                </h3>

                <p className="font-code text-xs text-[#5b4db1] mb-3 line-clamp-1">
                  {blueprint.tagline}
                </p>

                <p className="text-xs text-[#4e5b70] line-clamp-2 leading-relaxed mb-4">
                  "{blueprint.originalConcept}"
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4 font-code text-[10px]">
                  {blueprint.techStack.slice(0, 3).map((t, idx) => (
                    <span key={idx} className="bg-[#f3edff] text-[#4b3ca5] px-2 py-0.5 rounded border border-[#e2d8ff]">
                      {t.name}
                    </span>
                  ))}
                  {blueprint.techStack.length > 3 && (
                    <span className="text-[#667289] px-1">+{blueprint.techStack.length - 3} more</span>
                  )}
                </div>

                <div className="flex gap-2 pt-2 border-t border-[#e2d8ff]">
                  <button
                    onClick={() => onSelectDraft(blueprint)}
                    className="flex-1 bg-[#8e7ae6] text-white font-code text-xs font-bold py-2 rounded hover:bg-[#7563d7] transition-colors cursor-pointer text-center"
                  >
                    Open Blueprint
                  </button>

                  <button
                    onClick={() => onDeleteDraft(blueprint.id)}
                    className="px-3 bg-[#f7f4ff] hover:bg-[#fff1f1] text-[#bb5e68] rounded transition-colors cursor-pointer"
                    title="Delete Blueprint"
                  >
                    <span className="material-symbols-outlined text-sm">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
