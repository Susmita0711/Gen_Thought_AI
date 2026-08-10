import React from 'react';

interface ErrorStateProps {
  errorTitle?: string;
  errorMessage?: string;
  onGoBack: () => void;
  onTryAgain: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  errorTitle = 'Input Validation Failed',
  errorMessage = 'The AI requires a foundational prompt to begin architecture generation. Please provide a brief description of your project goal.',
  onGoBack,
  onTryAgain
}) => {
  return (
    <div className="flex-grow flex items-center justify-center p-4 md:p-12 max-w-[1280px] mx-auto w-full min-h-[500px]">
      <section className="w-full max-w-lg bg-[#ffffff] border border-[#e7ddff] rounded-xl p-8 flex flex-col items-center justify-center shadow-2xl">
        <div className="flex flex-col items-center text-center w-full">
          {/* Error icon circle */}
          <div className="w-16 h-16 rounded-full bg-[#fff0f0] flex items-center justify-center mb-6 border border-[#f3c9c9]">
            <span className="material-symbols-outlined text-[#bb5e68] text-3xl">
              warning
            </span>
          </div>

          <h2 className="font-display text-2xl font-bold text-[#1d2433] mb-4">
            {errorTitle}
          </h2>

          <div className="bg-[#faf6ff] border border-[#e8dbff] rounded-lg p-4 w-full mb-6 text-left font-code text-xs">
            <p className="text-[#bb5e68] font-bold mb-1.5">
              Error: Empty Context
            </p>
            <p className="text-[#4e5b70] text-xs leading-relaxed">
              {errorMessage}
            </p>
          </div>

          <div className="flex gap-4 w-full">
            <button
              onClick={onGoBack}
              className="flex-1 bg-[#f0ebff] text-[#1d2433] font-code text-xs font-bold py-3 px-6 rounded hover:bg-[#e6ddff] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Go Back
            </button>

            <button
              onClick={onTryAgain}
              className="flex-1 bg-[#8e7ae6] text-white font-code text-xs font-bold py-3 px-6 rounded hover:bg-[#7563d7] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">refresh</span>
              Try Again
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
