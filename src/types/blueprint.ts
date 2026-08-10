export interface KeyFeature {
  title: string;
  description: string;
  category?: string;
}

export interface AiIntegration {
  title: string;
  description: string;
}

export interface TechStackItem {
  name: string;
  category: string;
  reason: string;
}

export interface RoadmapStep {
  phase: string;
  title: string;
  description: string;
  keyDeliverables?: string[];
}

export interface ProjectBlueprint {
  id: string;
  createdAt: string;
  originalConcept: string;
  projectName: string;
  tagline: string;
  uniquenessScore: number;
  marketAssessment: string;
  problemStatement: string;
  targetAudience: string;
  keyFeatures: KeyFeature[];
  aiIntegration: AiIntegration[];
  techStack: TechStackItem[];
  roadmap: RoadmapStep[];
}
