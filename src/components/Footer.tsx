import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'docs' | 'status' | 'privacy' | null>(null);

  return (
    <footer className="full-width mt-auto bg-[#f0f7f3] border-t border-[#d8eee3]">
      {/* Footer Info Modal */}
      {modalType && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#ffffff] border border-[#e3d9ff] rounded-xl p-6 max-w-lg w-full font-display shadow-xl">
            <div className="flex justify-between items-center mb-4 border-b border-[#eee7ff] pb-2">
              <h3 className="font-bold text-lg text-[#1d2433] uppercase font-code text-xs tracking-wider">
                {modalType === 'docs' ? 'IdeaForge Documentation' : modalType === 'status' ? 'System API Status' : 'Privacy & Security'}
              </h3>
              <button onClick={() => setModalType(null)} className="text-[#667289] hover:text-[#1d2433]">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {modalType === 'docs' && (
              <div className="space-y-3 font-code text-xs text-[#4e5b70]">
                <p><strong className="text-[#5b4db1]">CLI Export:</strong> Run <code className="bg-[#f6f0ff] p-1 rounded text-[#2d7d59]">npx ideaforge-cli export</code> to pull blueprints directly into your IDE workspace.</p>
                <p><strong className="text-[#5b4db1]">Gemini Integration:</strong> Uses Gemini 2.5 Flash for fast multi-modal architectural inference and structured JSON outputs.</p>
                <p><strong className="text-[#5b4db1]">Markdown Format:</strong> Export reports are strictly compatible with GitHub, Obsidian, and Notion formatters.</p>
              </div>
            )}

            {modalType === 'status' && (
              <div className="space-y-3 font-code text-xs">
                <div className="flex items-center justify-between bg-[#f9f4ff] p-2 rounded">
                  <span className="text-[#1d2433]">Gemini 2.5 Flash API</span>
                  <span className="text-[#2d7d59] font-bold">100% Operational</span>
                </div>
                <div className="flex items-center justify-between bg-[#f9f4ff] p-2 rounded">
                  <span className="text-[#1d2433]">Architecture Generator</span>
                  <span className="text-[#2d7d59] font-bold">Online (0.8s)</span>
                </div>
                <div className="flex items-center justify-between bg-[#f9f4ff] p-2 rounded">
                  <span className="text-[#1d2433]">Market Viability Model</span>
                  <span className="text-[#2d7d59] font-bold">Online</span>
                </div>
              </div>
            )}

            {modalType === 'privacy' && (
              <div className="space-y-2 font-code text-xs text-[#4e5b70]">
                <p>IdeaForge AI processes prompts in isolated server-side runtime environments.</p>
                <p>No user concept prompts are stored or used for third-party public model training.</p>
              </div>
            )}

            <button
              onClick={() => setModalType(null)}
              className="mt-6 w-full bg-[#f0ebff] hover:bg-[#e6ddff] text-[#1d2433] font-code text-xs font-bold py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-12 max-w-[1280px] mx-auto w-full gap-4">
        <div className="font-code text-xs text-[#4e5b70]">
          © 2024 IdeaForge AI. Engineered for rapid iteration.
        </div>

        <div className="flex gap-6 font-code text-xs">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4e5b70] hover:text-[#5b4db1] transition-colors opacity-80 hover:opacity-100 flex items-center gap-1"
          >
            GitHub
          </a>
          <button
            onClick={() => setModalType('docs')}
            className="text-[#4e5b70] hover:text-[#5b4db1] transition-colors opacity-80 hover:opacity-100 cursor-pointer"
          >
            Documentation
          </button>
          <button
            onClick={() => setModalType('status')}
            className="text-[#4e5b70] hover:text-[#5b4db1] transition-colors opacity-80 hover:opacity-100 cursor-pointer flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#53b883]"></span>
            API Status
          </button>
          <button
            onClick={() => setModalType('privacy')}
            className="text-[#4e5b70] hover:text-[#5b4db1] transition-colors opacity-80 hover:opacity-100 cursor-pointer"
          >
            Privacy
          </button>
        </div>
      </div>
    </footer>
  );
};
