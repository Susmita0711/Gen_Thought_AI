import React, { useState } from 'react';

interface TopNavBarProps {
  activeTab: 'home' | 'dashboard' | 'drafts' | 'templates' | 'how-it-works' | 'history';
  onNavigate: (tab: 'home' | 'dashboard' | 'drafts' | 'templates' | 'how-it-works' | 'history') => void;
  draftsCount: number;
}

export const TopNavBar: React.FC<TopNavBarProps> = ({ activeTab, onNavigate, draftsCount }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="docked full-width sticky top-0 bg-[#f5f1ff]/90 backdrop-blur-md border-b border-[#d7d0f8] z-50 transition-all duration-300">
      <div className="flex justify-between items-center h-16 px-4 md:px-12 max-w-[1280px] mx-auto w-full">
        {/* Brand Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="font-display text-2xl md:text-3xl font-bold text-[#5b4db1] flex items-center gap-2 hover:opacity-90 transition-opacity text-left cursor-pointer focus:outline-none"
        >
          <span className="material-symbols-outlined text-[#6b5bc4] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            auto_awesome
          </span>
          IdeaForge AI
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 font-code text-xs uppercase tracking-wider items-center">
          <button
            onClick={() => onNavigate('how-it-works')}
            className={`py-2 transition-colors cursor-pointer ${
              activeTab === 'how-it-works' ? 'text-[#5b4db1] border-b-2 border-[#5b4db1]' : 'text-[#3d4b62] hover:text-[#5b4db1]'
            }`}
          >
            How it works
          </button>
          
          <button
            onClick={() => onNavigate('drafts')}
            className={`py-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'drafts' ? 'text-[#5b4db1] border-b-2 border-[#5b4db1]' : 'text-[#3d4b62] hover:text-[#5b4db1]'
            }`}
          >
            Drafts
            {draftsCount > 0 && (
              <span className="bg-[#dff9eb] text-[#2d7d59] border border-[#a9ddba] text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                {draftsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onNavigate('templates')}
            className={`py-2 transition-colors cursor-pointer ${
              activeTab === 'templates' ? 'text-[#5b4db1] border-b-2 border-[#5b4db1]' : 'text-[#3d4b62] hover:text-[#5b4db1]'
            }`}
          >
            Templates
          </button>

          <button
            onClick={() => onNavigate('history')}
            className={`py-2 transition-colors cursor-pointer ${
              activeTab === 'history' ? 'text-[#5b4db1] border-b-2 border-[#5b4db1]' : 'text-[#3d4b62] hover:text-[#5b4db1]'
            }`}
          >
            History
          </button>
        </div>

        {/* Right side Auth button */}
        <div className="relative">
          {isSignedIn ? (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 bg-[#ffffff] border border-[#d9d0f8] px-3 py-1.5 rounded hover:border-[#8e7ae6] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#a69afc] to-[#7ad19f] text-[#1a2d28] font-bold text-xs flex items-center justify-center">
                  IF
                </div>
                <span className="font-code text-xs text-[#1d2433]">Creator</span>
                <span className="material-symbols-outlined text-sm text-[#667289]">arrow_drop_down</span>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-[#ffffff] border border-[#d9d0f8] rounded-lg shadow-xl p-2 z-50 text-xs font-code">
                  <div className="px-3 py-2 border-b border-[#e9e2ff] text-[#3d4b62]">
                    <p className="font-bold text-[#1d2433]">IdeaForge Pro</p>
                    <p className="text-[10px] opacity-75">builder@ideaforge.ai</p>
                  </div>
                  <button
                    onClick={() => { onNavigate('drafts'); setShowProfileMenu(false); }}
                    className="w-full text-left px-3 py-2 hover:bg-[#f3efff] text-[#1d2433] rounded mt-1 transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">folder</span> My Blueprints
                  </button>
                  <button
                    onClick={() => { setIsSignedIn(false); setShowProfileMenu(false); }}
                    className="w-full text-left px-3 py-2 hover:bg-[#fff1f0] text-[#bb5e5e] rounded transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm">logout</span> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setIsSignedIn(true)}
              className="font-code text-xs font-bold text-[#4b3ca5] border border-[#8e7ae6] px-4 py-2 rounded hover:bg-[#ede6ff] transition-all duration-200 cursor-pointer"
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Mobile nav items menu */}
      <div className="md:hidden flex justify-around py-2 bg-[#f3edff] border-t border-[#e2d8ff] text-[11px] font-code text-[#3d4b62]">
        <button
          onClick={() => onNavigate('home')}
          className={`py-1 ${activeTab === 'home' ? 'text-[#5b4db1] font-bold' : ''}`}
        >
          Home
        </button>
        <button
          onClick={() => onNavigate('how-it-works')}
          className={`py-1 ${activeTab === 'how-it-works' ? 'text-[#5b4db1] font-bold' : ''}`}
        >
          How It Works
        </button>
        <button
          onClick={() => onNavigate('drafts')}
          className={`py-1 ${activeTab === 'drafts' ? 'text-[#5b4db1] font-bold' : ''}`}
        >
          Drafts ({draftsCount})
        </button>
        <button
          onClick={() => onNavigate('templates')}
          className={`py-1 ${activeTab === 'templates' ? 'text-[#5b4db1] font-bold' : ''}`}
        >
          Templates
        </button>
      </div>
    </nav>
  );
};
