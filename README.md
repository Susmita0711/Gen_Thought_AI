# Gen Thought AI

A polished AI-powered idea-to-project generation app built with React, Vite, and TypeScript.

This project helps users turn rough product ideas into structured outcomes such as:
- project blueprints
- market viability and uniqueness scores
- tech stack recommendations
- MVP roadmap planning
- AI integration suggestions

## Live Demo

The app is currently running locally with Vite on:
- http://localhost:3000/

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind-inspired utility styling
- Custom UI components
- Local draft/history persistence

## Features

- Smart prompt-based idea improvement
- Instant project blueprint generation
- Recommended technology stack selection
- MVP roadmap with deliverables
- Saved drafts and historical generation tracking
- Light lavender + green visual theme

## Project Structure

```bash
src/
  App.tsx
  components/
  services/
  server/
  types/
  index.css
```

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev -- --host 0.0.0.0 --port 3000
```

4. Open the app in your browser:

```bash
http://localhost:3000/
```

## Build

```bash
npm run build
```

## Notes

This project includes a client-side fallback blueprint generator so it remains usable even if the AI backend is unavailable.

## License

This project is for educational and portfolio/demo purposes.
