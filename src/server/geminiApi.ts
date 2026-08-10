import { GoogleGenAI } from '@google/genai';
import { generateFallbackBlueprint } from '../services/sampleBlueprints';
import { ProjectBlueprint } from '../types/blueprint';

export async function processIdeaWithGemini(promptText: string): Promise<ProjectBlueprint> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    console.warn('GEMINI_API_KEY not configured or placeholder used. Using fallback heuristic blueprint generator.');
    return generateFallbackBlueprint(promptText);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const systemPrompt = `You are IdeaForge AI, an elite software architect and technical product strategist.
Given a raw project concept from a developer, founder, or student, generate a comprehensive engineering blueprint in strict JSON format.

Output MUST be a single JSON object matching this exact shape:
{
  "originalConcept": "exact raw concept prompt",
  "projectName": "Catchy short product name (e.g. NeuroTask Sync, PlantPulse AI, CraftMarket)",
  "tagline": "Crisp technical 1-line summary subtitle",
  "uniquenessScore": 85,
  "marketAssessment": "HIGH POTENTIAL - Low competition detected in this niche",
  "problemStatement": "Clear 2-3 sentence problem statement describing friction and gaps in current tools.",
  "targetAudience": "Target: Knowledge Workers & Developers",
  "keyFeatures": [
    {
      "title": "Feature Title",
      "description": "Clear 1-2 sentence description of feature value."
    },
    {
      "title": "Second Feature",
      "description": "Clear 1-2 sentence description."
    }
  ],
  "aiIntegration": [
    {
      "title": "AI Mechanism Name",
      "description": "How LLMs / Vision / ML is used effectively."
    }
  ],
  "techStack": [
    { "name": "Next.js", "category": "Frontend", "reason": "Server-side rendering and swift API routes" },
    { "name": "PostgreSQL", "category": "Database", "reason": "Relational data integrity" },
    { "name": "Redis", "category": "Caching", "reason": "Sub-millisecond session & pub-sub caching" }
  ],
  "roadmap": [
    {
      "phase": "WEEK 1-2",
      "title": "Core Infrastructure & Auth",
      "description": "Setup monorepo, database schema, and authentication flow.",
      "keyDeliverables": ["Database setup", "Auth middleware"]
    },
    {
      "phase": "WEEK 3-4",
      "title": "AI Engine & Core UI",
      "description": "Implement prompt pipeline and core dashboard view.",
      "keyDeliverables": ["AI pipeline", "Dashboard UI"]
    },
    {
      "phase": "WEEK 5",
      "title": "Beta Launch",
      "description": "Production deployment, telemetry, and user feedback.",
      "keyDeliverables": ["Cloud deployment", "Telemetry"]
    }
  ]
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { text: systemPrompt },
        { text: `Raw Concept: ${promptText}` }
      ],
      config: {
        responseMimeType: 'application/json',
        temperature: 0.7,
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error('Empty response from Gemini');
    }

    const parsed = JSON.parse(responseText);
    return {
      id: 'bp-' + Date.now(),
      createdAt: new Date().toISOString(),
      originalConcept: promptText,
      projectName: parsed.projectName || 'IdeaForge Project',
      tagline: parsed.tagline || 'AI-Architected Engineering Blueprint',
      uniquenessScore: typeof parsed.uniquenessScore === 'number' ? parsed.uniquenessScore : 82,
      marketAssessment: parsed.marketAssessment || 'HIGH POTENTIAL',
      problemStatement: parsed.problemStatement || 'Problem statement analysis completed.',
      targetAudience: parsed.targetAudience || 'Target: Technical Founders & Developers',
      keyFeatures: parsed.keyFeatures || [],
      aiIntegration: parsed.aiIntegration || [],
      techStack: parsed.techStack || [],
      roadmap: parsed.roadmap || []
    };
  } catch (err) {
    console.error('Error generating project blueprint with Gemini:', err);
    return generateFallbackBlueprint(promptText);
  }
}
