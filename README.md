# cm-quiz

This repository hosts a Next.js quiz application about cloud modernization. The quiz generates leads for a B2B website. If a user scores 80% or higher, they will see a message about winning **FREE swag from moderncloud.io** and a form to collect their contact information.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000` to view the app locally.

## Testing

Run the Jest test suite with:
```bash
npm test
```

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

The repository includes a `vercel.json` configuration file that tells Vercel to
build the project using `package.json`.

The app is hosted at [https://github.com/shiqi-ong/cm-quiz](https://github.com/shiqi-ong/cm-quiz) and deployed to Vercel.
