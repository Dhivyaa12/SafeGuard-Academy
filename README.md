# SafeGuard Academy: AI-Powered Fire Safety Training

SafeGuard Academy is a modern, AI-driven web application designed to provide comprehensive and personalized fire safety training for hotel staff. Built with Next.js and powered by Google's Gemini AI model through Genkit, this platform offers an interactive and engaging learning experience.

## Key Features

- **Personalized Learning Paths:** An AI agent recommends specific training modules based on an employee's role (e.g., chef, housekeeping, front desk), ensuring relevant and efficient training.
- **Interactive AI Chat Coach:** Staff can ask fire safety-related questions in a chat interface and receive instant, context-aware answers tailored to their role.
- **Comprehensive Training Modules:** The platform includes several key training modules:
  - Kitchen Fire Safety
  - Handling Electrical Fires
  - Guest Evacuation Procedures
  - Using Fire Extinguishers
- **Rich Learning Content:** Each module is composed of detailed lessons, a curated list of YouTube training videos, and a final assessment to test knowledge.
- **Augmented Reality (AR) Simulation:** A forward-thinking feature that allows staff to practice using a fire extinguisher in a safe, simulated AR environment using their device's camera.
- **Progress & Achievement Tracking:** A dedicated dashboard where staff can view their overall progress, completed modules, and earned badges and certificates.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (using the App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Generative AI:** Google's AI models via [Genkit](https://firebase.google.com/docs/genkit)
- **UI Components:** Built with [React](https://react.dev/), [ShadCN UI](https://ui.shadcn.com/), and [Radix UI](https://www.radix-ui.com/).
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with a custom, themeable design system.
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

The main application logic is contained within the `src/app` directory.

- **Pages & Layouts:** The core pages and layouts for the dashboard are in `src/app/(dashboard)/`.
- **UI Components:** Reusable components are located in `src/components/`.
- **Static Data:** Training module content (lessons, quizzes, videos) is managed in `src/lib/data.ts`.
- **AI Flows:** The AI logic, including prompts and flows for recommendations and chat, is defined in the `src/ai/` directory.

To run the application locally, use the following command:

```bash
npm run dev
```

This will start the Next.js development server.
