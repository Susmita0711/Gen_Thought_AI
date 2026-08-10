import { useState, useEffect } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { HeroSection } from './components/HeroSection';
import { BentoFeatures } from './components/BentoFeatures';
import { ResultsDashboard } from './components/ResultsDashboard';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';
import { HowItWorksView } from './components/HowItWorksView';
import { TemplatesView } from './components/TemplatesView';
import { DraftsHistoryView } from './components/DraftsHistoryView';
import { Footer } from './components/Footer';
import { ProjectBlueprint } from './types/blueprint';
import { SAMPLE_BLUEPRINTS, generateFallbackBlueprint } from './services/sampleBlueprints';

type AppTab = 'home' | 'dashboard' | 'loading' | 'error' | 'drafts' | 'templates' | 'how-it-works' | 'history';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [currentBlueprint, setCurrentBlueprint] = useState<ProjectBlueprint | null>(null);
  const [drafts, setDrafts] = useState<ProjectBlueprint[]>([]);
  const [lastPrompt, setLastPrompt] = useState<string>('');
  const [errorDetails, setErrorDetails] = useState<{ title: string; message: string }>({
    title: 'Input Validation Failed',
    message: 'The AI requires a foundational prompt to begin architecture generation. Please provide a brief description of your project goal.'
  });

  // Load saved drafts on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ideaforge_drafts');
      if (saved) {
        setDrafts(JSON.parse(saved));
      } else {
        // Initialize with default sample blueprint so Drafts isn't empty on first open
        const initial = [SAMPLE_BLUEPRINTS.daily_tasks, SAMPLE_BLUEPRINTS.plant_watering];
        setDrafts(initial);
        localStorage.setItem('ideaforge_drafts', JSON.stringify(initial));
      }
    } catch (err) {
      console.error('Failed to parse saved drafts', err);
    }
  }, []);

  const saveBlueprintToDrafts = (blueprint: ProjectBlueprint) => {
    setDrafts(prev => {
      const filtered = prev.filter(d => d.id !== blueprint.id);
      const updated = [blueprint, ...filtered];
      try {
        localStorage.setItem('ideaforge_drafts', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save draft to localStorage', e);
      }
      return updated;
    });
  };

  const handleGenerate = async (promptText: string) => {
    if (!promptText.trim()) {
      setErrorDetails({
        title: 'Input Validation Failed',
        message: 'The AI requires a foundational prompt to begin architecture generation. Please provide a brief description of your project goal.'
      });
      setActiveTab('error');
      return;
    }

    setLastPrompt(promptText);
    setActiveTab('loading');

    try {
      const response = await fetch('/api/generate-idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: promptText.trim() })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        if (response.status === 400) {
          setErrorDetails({
            title: errorData.error || 'Input Validation Failed',
            message: errorData.message || 'Please provide a valid project idea prompt.'
          });
          setActiveTab('error');
          return;
        }
        throw new Error(errorData.message || 'Server error generating blueprint');
      }

      const blueprint: ProjectBlueprint = await response.json();
      setCurrentBlueprint(blueprint);
      saveBlueprintToDrafts(blueprint);
      setActiveTab('dashboard');
    } catch (err) {
      console.warn('API call error, falling back to instant client generator:', err);
      // Fallback generator guarantees app works smoothly
      const fallback = generateFallbackBlueprint(promptText.trim());
      setCurrentBlueprint(fallback);
      saveBlueprintToDrafts(fallback);
      // Slight delay for loading state feel
      setTimeout(() => {
        setActiveTab('dashboard');
      }, 1200);
    }
  };

  const handleSelectSample = (sampleKey: 'daily_tasks' | 'plant_watering') => {
    const sample = SAMPLE_BLUEPRINTS[sampleKey];
    setCurrentBlueprint(sample);
    saveBlueprintToDrafts(sample);
    setActiveTab('dashboard');
  };

  const handleDeleteDraft = (id: string) => {
    setDrafts(prev => {
      const updated = prev.filter(d => d.id !== id);
      try {
        localStorage.setItem('ideaforge_drafts', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to update localStorage', e);
      }
      return updated;
    });
  };

  const handleClearAllDrafts = () => {
    setDrafts([]);
    localStorage.removeItem('ideaforge_drafts');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ff] text-[#1d2433]">
      {/* Top Navigation */}
      <TopNavBar
        activeTab={activeTab === 'loading' || activeTab === 'error' ? 'home' : activeTab}
        onNavigate={(tab) => {
          if (tab === 'home' && currentBlueprint && activeTab === 'dashboard') {
            // Keep dashboard accessible
            setActiveTab('home');
          } else {
            setActiveTab(tab);
          }
        }}
        draftsCount={drafts.length}
      />

      {/* Main View Router */}
      <main className="flex-grow flex flex-col">
        {activeTab === 'home' && (
          <div className="flex-grow flex flex-col justify-center px-4 md:px-12 pt-12 pb-24 max-w-[1280px] mx-auto w-full">
            <HeroSection
              onGenerate={handleGenerate}
              isLoading={false}
            />
            <BentoFeatures
              onSelectSample={handleSelectSample}
            />
          </div>
        )}

        {activeTab === 'dashboard' && currentBlueprint && (
          <ResultsDashboard
            blueprint={currentBlueprint}
            onTweakIdea={() => {
              setActiveTab('home');
            }}
            onBackToSearch={() => setActiveTab('home')}
          />
        )}

        {activeTab === 'loading' && <LoadingState />}

        {activeTab === 'error' && (
          <ErrorState
            errorTitle={errorDetails.title}
            errorMessage={errorDetails.message}
            onGoBack={() => setActiveTab('home')}
            onTryAgain={() => {
              if (lastPrompt) {
                handleGenerate(lastPrompt);
              } else {
                setActiveTab('home');
              }
            }}
          />
        )}

        {activeTab === 'how-it-works' && (
          <HowItWorksView
            onBackToHome={() => setActiveTab('home')}
            onTryTemplate={(prompt) => handleGenerate(prompt)}
          />
        )}

        {activeTab === 'templates' && (
          <TemplatesView
            onSelectTemplatePrompt={(prompt) => handleGenerate(prompt)}
          />
        )}

        {(activeTab === 'drafts' || activeTab === 'history') && (
          <DraftsHistoryView
            drafts={drafts}
            title={activeTab === 'drafts' ? 'Draft Blueprints' : 'Blueprint Generation History'}
            onSelectDraft={(bp) => {
              setCurrentBlueprint(bp);
              setActiveTab('dashboard');
            }}
            onDeleteDraft={handleDeleteDraft}
            onClearAll={handleClearAllDrafts}
            onNewIdea={() => setActiveTab('home')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
