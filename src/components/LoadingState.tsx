import React from 'react';

export const LoadingState: React.FC = () => {
  return (
    <div className="flex-grow flex items-center justify-center p-4 md:p-12 max-w-[1280px] mx-auto w-full min-h-[500px]">
      <section className="w-full max-w-2xl bg-[#f9f7ff] border border-[#d9d0f8] rounded-xl p-12 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[#ede5ff]/60 backdrop-blur-sm z-0 pointer-events-none"></div>

        <div className="z-10 flex flex-col items-center text-center">
          <div className="relative w-28 h-28 flex items-center justify-center mb-8">
            {/* Core Logo Icon */}
            <div className="w-14 h-14 bg-[#dfe9ff] rounded-full absolute z-10 flex items-center justify-center shadow-[0_0_20px_rgba(125,110,181,0.2)]">
              <span className="material-symbols-outlined text-[#4b3ca5] text-2xl font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>
                neurology
              </span>
            </div>

            {/* Concentric Pulse Rings */}
            <div className="absolute w-full h-full border-2 border-[#8e7ae6]/30 rounded-full pulse-ring"></div>
            <div className="absolute w-full h-full border-2 border-[#5ebd86]/20 rounded-full pulse-ring" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute w-full h-full border-2 border-[#8e7ae6]/10 rounded-full pulse-ring" style={{ animationDelay: '1s' }}></div>
          </div>

          <h2 className="font-code text-xs text-[#5b4db1] font-bold mb-3 uppercase tracking-widest">
            PROCESSING INTENT
          </h2>

          <p className="font-display text-2xl md:text-3xl font-extrabold text-shimmer mb-6">
            Architecting Roadmap...
          </p>

          <div className="flex gap-3 items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[#53b883] animate-ping"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#8e7ae6] animate-ping" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#53b883] animate-ping" style={{ animationDelay: '0.4s' }}></span>
          </div>

          <p className="font-code text-xs text-[#667289] mt-8 max-w-sm">
            Evaluating stack scalability, synthesizing market uniqueness, and generating weekly engineering sprints...
          </p>
        </div>
      </section>
    </div>
  );
};
