import { ProjectBlueprint } from '../types/blueprint';

export const SAMPLE_BLUEPRINTS: Record<string, ProjectBlueprint> = {
  daily_tasks: {
    id: 'draft-neurotask',
    createdAt: new Date().toISOString(),
    originalConcept: 'An app for managing daily tasks.',
    projectName: 'NeuroTask Sync',
    tagline: 'AI-Augmented Cognitive Task Prioritization Engine',
    uniquenessScore: 85,
    marketAssessment: 'HIGH POTENTIAL - Low competition detected in neurodivergent task optimization',
    problemStatement: 'Standard task managers rely on manual input and static categorization, leading to cognitive overload for users with ADHD or high-context switching jobs. They fail to adapt to fluctuating energy levels and context contexts.',
    targetAudience: 'Target: Knowledge Workers & Neurodivergent Individuals',
    keyFeatures: [
      {
        title: 'Context-Aware Prioritization',
        description: 'Automatically reprioritizes tasks based on time of day, location, and inferred user energy levels via device telemetry.'
      },
      {
        title: 'Micro-Task Generation',
        description: 'Breaks down large, intimidating goals into 5-minute actionable steps automatically.'
      },
      {
        title: 'Dopamine Milestone Rewards',
        description: 'Gamified micro-feedback loops that reinforce completion momentum without overwhelming notifications.'
      }
    ],
    aiIntegration: [
      {
        title: 'LLM Task Decomposition',
        description: 'Uses Gemini 2.5 Flash for nuanced breakdown of complex project descriptions into structured sub-tasks.'
      },
      {
        title: 'Predictive Fatigue Modeling',
        description: 'Custom ML model trained on user completion rates to predict peak productivity windows.'
      }
    ],
    techStack: [
      { name: 'React Native', category: 'Mobile UI', reason: 'Cross-platform native touch responsiveness and background telemetry' },
      { name: 'Next.js (Web Admin)', category: 'Web Admin', reason: 'Fast server-side rendered analytics and web access' },
      { name: 'FastAPI (Python)', category: 'AI Microservice', reason: 'Asynchronous Python backend for fast ML inference' },
      { name: 'PostgreSQL + pgvector', category: 'Database', reason: 'Relational integrity with vector embeddings for semantic task search' },
      { name: 'Gemini 2.5 Flash', category: 'AI Inference', reason: 'Low-latency structured reasoning for sub-task breakdown' },
      { name: 'Vercel', category: 'Hosting', reason: 'Edge deployment with instantaneous global CDN distribution' }
    ],
    roadmap: [
      {
        phase: 'WEEK 1-2',
        title: 'Core Infrastructure & Auth',
        description: 'Setup monorepo, database schema for tasks/users, and basic JWT authentication. Integrate raw OpenAI endpoint.',
        keyDeliverables: ['Monorepo setup', 'Database schema', 'Auth endpoints', 'Basic task CRUD']
      },
      {
        phase: 'WEEK 3-4',
        title: 'AI Micro-Task Engine',
        description: 'Implement the prompt pipeline for breaking down tasks. Build the front-end UI for expanding/collapsing generated steps.',
        keyDeliverables: ['Decomposition pipeline', 'Expandable task UI', 'Context tagger']
      },
      {
        phase: 'WEEK 5',
        title: 'Beta Release & Analytics',
        description: 'Deploy to TestFlight/Vercel. Implement basic telemetry to begin training the predictive fatigue model.',
        keyDeliverables: ['Beta build', 'Telemetry hooks', 'User feedback flow']
      }
    ]
  },
  plant_watering: {
    id: 'draft-plantpulse',
    createdAt: new Date().toISOString(),
    originalConcept: 'A plant watering app using React Native',
    projectName: 'FloraPulse AI',
    tagline: 'Computer Vision & Hydration Predictive Care Engine for Houseplants',
    uniquenessScore: 78,
    marketAssessment: 'MODERATE COMPETITION - Differentiated through hyper-local microclimate sensing',
    problemStatement: 'Plant owners struggle to balance watering schedules due to shifting indoor sunlight, seasonal humidity fluctuations, and misidentifying subtle soil decay or pest infestations until it is too late.',
    targetAudience: 'Target: Indoor Gardening Enthusiasts & Urban Apartment Dwellers',
    keyFeatures: [
      {
        title: 'Photo Leaf Diagnostics',
        description: 'Snap a picture to instantly diagnose leaf yellowing, root rot, or nutrient deficiencies.'
      },
      {
        title: 'Smart Solar & Humidity Sync',
        description: 'Cross-references local weather API data with household ambient sensors to auto-adjust schedule.'
      }
    ],
    aiIntegration: [
      {
        title: 'Vision Flora Classifier',
        description: 'Fine-tuned Vision AI for plant species identification and health scoring.'
      },
      {
        title: 'Soil Evaporation Predictor',
        description: 'Predictive algorithm calculating moisture decay curves based on plant pot volume and sunlight hours.'
      }
    ],
    techStack: [
      { name: 'React Native (Expo)', category: 'Mobile UI', reason: 'Native camera hardware access and offline push notifications' },
      { name: 'Node.js Express', category: 'API Server', reason: 'Lightweight REST API proxy with low memory footprint' },
      { name: 'Firebase Firestore', category: 'Realtime DB', reason: 'Instant offline sync for garden logs and device sensors' },
      { name: 'Gemini Vision API', category: 'Computer Vision', reason: 'Multi-modal leaf visual diagnosis' },
      { name: 'Tailwind CSS', category: 'Styling', reason: 'Utility-first dark & light theme styling' }
    ],
    roadmap: [
      {
        phase: 'WEEK 1-2',
        title: 'Garden Inventory & Camera Access',
        description: 'Build plant cataloging UI, local photo storage, and basic schedule reminders.',
        keyDeliverables: ['Camera view', 'Plant profile storage', 'Reminder scheduler']
      },
      {
        phase: 'WEEK 3-4',
        title: 'Gemini Vision Integration',
        description: 'Connect camera uploads to Gemini multi-modal diagnosis prompt for health assessments.',
        keyDeliverables: ['Vision AI pipeline', 'Diagnostic UI card', 'Treatment recommendations']
      },
      {
        phase: 'WEEK 5',
        title: 'Community Exchange & Launch',
        description: 'Enable plant clipping swap marketplace and launch Expo app store build.',
        keyDeliverables: ['Clippings trade board', 'Push notifications', 'Store publication']
      }
    ]
  }
};

export function generateFallbackBlueprint(promptText: string): ProjectBlueprint {
  const cleanPrompt = promptText.trim().toLowerCase();
  
  if (cleanPrompt.includes('daily task') || cleanPrompt.includes('task manager') || cleanPrompt.includes('todo')) {
    return { ...SAMPLE_BLUEPRINTS.daily_tasks, originalConcept: promptText, id: 'bp-' + Date.now() };
  }
  if (cleanPrompt.includes('plant') || cleanPrompt.includes('water')) {
    return { ...SAMPLE_BLUEPRINTS.plant_watering, originalConcept: promptText, id: 'bp-' + Date.now() };
  }

  // Generic dynamic generator based on prompt words
  const words = promptText.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  const shortName = words.slice(0, 15) || 'ConceptForge';

  return {
    id: 'bp-' + Date.now(),
    createdAt: new Date().toISOString(),
    originalConcept: promptText,
    projectName: `${shortName} Engine`,
    tagline: 'AI-Architected Autonomous Workflow Platform',
    uniquenessScore: Math.floor(Math.random() * 18) + 77,
    marketAssessment: 'HIGH POTENTIAL - Niche automated solution with scalable architecture',
    problemStatement: `Current solutions for "${promptText}" require heavy manual setup and fragmented toolchains. Users experience friction when translating raw ideas into structured execution loops.`,
    targetAudience: 'Target: Developers, Founders, and Technical Creators',
    keyFeatures: [
      {
        title: 'Autonomous Logic Pipeline',
        description: `Streamlines "${promptText}" by automatically mapping input triggers into actionable output states.`
      },
      {
        title: 'Real-time Telemetry Dashboard',
        description: 'Visualizes throughput metrics, error rates, and user engagement signals in real-time.'
      },
      {
        title: 'Intelligent Feedback Loop',
        description: 'Continuously adapts execution parameters based on system analytics.'
      }
    ],
    aiIntegration: [
      {
        title: 'Contextual Intent Analysis',
        description: 'Uses Gemini 2.5 Flash to parse natural language requirements into structured JSON logic.'
      },
      {
        title: 'Predictive Resource Optimizer',
        description: 'Dynamically scales computational resources based on workload demand.'
      }
    ],
    techStack: [
      { name: 'Next.js 15 (App Router)', category: 'Frontend/Backend', reason: 'Modern full-stack React framework with server actions' },
      { name: 'TypeScript', category: 'Language', reason: 'End-to-end type safety and maintainability' },
      { name: 'Tailwind CSS v4', category: 'Styling', reason: 'Utility-first responsive styling with dark mode support' },
      { name: 'PostgreSQL + Drizzle ORM', category: 'Database', reason: 'High-performance relational database with type-safe schema' },
      { name: 'Gemini 2.5 Flash', category: 'AI Inference', reason: 'Ultrafast structured generation and intent analysis' },
      { name: 'Cloud Run / Vercel', category: 'Deployment', reason: 'Containerized edge deployment with scalable autoscaling' }
    ],
    roadmap: [
      {
        phase: 'WEEK 1-2',
        title: 'MVP Foundation & Data Schema',
        description: 'Initialize repository, configure database models, and build core user onboarding interface.',
        keyDeliverables: ['Repository setup', 'PostgreSQL schema', 'Authentication endpoints']
      },
      {
        phase: 'WEEK 3-4',
        title: 'Core Engine & AI Integration',
        description: 'Implement primary workflow pipeline, connect Gemini API, and design real-time dashboard.',
        keyDeliverables: ['AI prompt pipeline', 'Main dashboard layout', 'State persistence']
      },
      {
        phase: 'WEEK 5',
        title: 'Polishing & Launch Preparation',
        description: 'Optimize load times, implement telemetry tracking, and deploy production builds.',
        keyDeliverables: ['Performance optimization', 'Monitoring setup', 'Production deployment']
      }
    ]
  };
}
