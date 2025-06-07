# cm-quiz

This repository will host a Next.js quiz application about cloud modernization. The quiz is intended to generate leads for a B2B website. If a user scores 80% or higher, they will see a message about winning **FREE swag from moderncloud.io** and a form to collect their contact information.

## Getting Started

1. Ensure you have Node.js installed.
2. Scaffold the application using **create-next-app**:
   ```bash
   npx create-next-app@latest --typescript
   ```
3. Navigate into the created directory and run the development server:
   ```bash
   cd cm-quiz
   npm run dev
   ```
4. Visit `http://localhost:3000` to view the app locally.

## Deployment to Vercel

1. Install the Vercel CLI if you do not already have it:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command and follow the prompts:
   ```bash
   vercel
   ```
3. For subsequent deployments, you can use:
   ```bash
   vercel --prod
   ```

The app will be hosted at [https://github.com/shiqi-ong/cm-quiz](https://github.com/shiqi-ong/cm-quiz) and deployed to Vercel.

