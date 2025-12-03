# Vercel Deployment Link - https://vows-vibes-r2-assignment.vercel.app/
# Bhagavad Gita Website

A beautiful, responsive website built with SvelteKit and Tailwind CSS, featuring the Bhagavad Gita with sections on Ayurveda, Yogasutras, Upanisads, and Sanskrit.

## Features

- 📌 18 Chapters Grid Layout with Diamond Cards
- 📌 Custom Tailwind CSS Styling
- 📌 Fully Responsive Design
- 📌 Interactive Dropdown Navigation
- 📌 Scroll to Top Button
- 📌 Fast Performance with SvelteKit
- 📌 Deployed on Vercel

## Tech Stack

- **Framework:** SvelteKit 2.48.5
- **Styling:** Tailwind CSS 4.1.17
- **Icons:** FontAwesome 6.0.0
- **Fonts:** Google Fonts (Lato), Custom Font (Edensor)
- **Deployment:** Vercel

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.x or higher)
- **npm** (comes with Node.js)

## Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd svelte Assignment_main
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- SvelteKit
- Tailwind CSS
- Vite
- ESLint & Prettier
- Vercel Adapter

### 3. Run Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or another available port).

To automatically open the app in your browser:

```bash
npm run dev -- --open
```

### 4. View the Application

Open your browser and navigate to:
```
http://localhost:5173
```

## Project Structure

```
svelte Assignment_main/
├── src/
│   ├── lib/
│   │   ├── assets/
│   │   │   └── images/          # Images and logos
│   │   ├── components/
│   │   │   ├── Navbar.svelte    # Navigation component
│   │   │   ├── Hero.svelte      # Hero section
│   │   │   ├── ChaptersGrid.svelte  # 18 chapters grid
│   │   │   ├── Footer.svelte    # Footer component
│   │   │   └── ScrollToTop.svelte   # Scroll to top button
│   │   └── index.js
│   ├── routes/
│   │   ├── +layout.svelte       # Main layout
│   │   ├── +page.svelte         # Home page
│   │   └── layout.css           # Global styles
│   └── app.html                 # HTML template
├── static/                      # Static assets
├── package.json
├── svelte.config.js             # SvelteKit configuration
├── vite.config.js               # Vite configuration
└── README.md
```

## Available Scripts

### Development

```bash
npm run dev
```
Starts the development server with hot module replacement.

### Build

```bash
npm run build
```
Creates an optimized production build.

### Preview

```bash
npm run preview
```
Preview the production build locally before deploying.

### Format Code

```bash
npm run format
```
Formats code using Prettier.

### Lint

```bash
npm run lint
```
Checks code quality with ESLint and Prettier.

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The build output will be in the `.vercel` directory (configured for Vercel deployment).

## Deployment

This project is configured for deployment on Vercel using `@sveltejs/adapter-vercel`.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect SvelteKit and deploy

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Fonts

The project uses:
- **Lato** (Google Fonts) - for body text and navigation
- **Edensor** (Custom OTF) - for headings

## Customization

### Colors

Main colors used in the project:
- Primary Text: `#3E4939`
- Hover: `#deb887`
- Headings: `#bd003c`
- Dark Background: `#464238`

### Tailwind Configuration

Tailwind CSS v4 is integrated via `@tailwindcss/vite` plugin. Custom styles can be added in `src/routes/layout.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Dependencies Issues

If you encounter dependency issues, try:

```bash
rm -rf node_modules package-lock.json
npm install
```


