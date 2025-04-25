# Deployment Instructions for The Box with a Hinged Lid Website

This document provides step-by-step instructions for deploying the Next.js website for "The Box with a Hinged Lid" project.

## Prerequisites

- Node.js (version 16.x or higher)
- npm or yarn package manager
- A hosting service that supports Next.js applications (Vercel, Netlify, etc.)

## Project Structure

The project files include:
- `src/` - Contains all source code including components, pages, and styles
- `public/` - Contains static assets
- `package.json` - Defines project dependencies and scripts
- `next.config.js` - Next.js configuration file
- `jahunger-style.css` - Custom CSS styling based on jahunger.com

## Deployment Steps

### Option 1: Local Development

1. Extract all files to a directory on your computer
2. Open a terminal and navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
4. Run the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```
5. Open your browser and navigate to `http://localhost:3000`

### Option 2: Deployment to Vercel (Recommended)

1. Create an account on [Vercel](https://vercel.com) if you don't have one
2. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```
3. Navigate to the project directory in your terminal
4. Run:
   ```
   vercel
   ```
5. Follow the prompts to deploy your project
6. Once deployed, Vercel will provide you with a URL to access your website

### Option 3: Deployment to Netlify

1. Create an account on [Netlify](https://netlify.com) if you don't have one
2. From the Netlify dashboard, click "New site from Git"
3. Connect your Git repository or upload the project files directly
4. Set the build command to `npm run build` or `yarn build`
5. Set the publish directory to `out`
6. Click "Deploy site"

### Option 4: Static Export

If you prefer to deploy to a static hosting service:

1. Navigate to the project directory in your terminal
2. Install dependencies:
   ```
   npm install
   ```
3. Build and export the project:
   ```
   npm run build
   ```
4. The static files will be generated in the `out` directory
5. Upload the contents of the `out` directory to any static hosting service

## Troubleshooting

If you encounter the error "No Next.js version detected":
1. Ensure your `package.json` file includes "next" in the dependencies section
2. Make sure you're running the deployment command from the directory containing the `package.json` file
3. Try running `npm install` before attempting to deploy again

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Documentation](https://vercel.com/docs/deployments/overview)
- [Netlify Deployment Documentation](https://docs.netlify.com/configure-builds/overview/)

If you need further assistance, please reach out for support.
