# AgriPilot Uganda - Coming Soon Landing Page

A modern, responsive landing page for AgriPilot Uganda, an AI-powered agriculture advisory platform built with Next.js, Tailwind CSS, and Lucide React icons.

## 🌱 Features

- ✨ Modern, responsive design with custom color palette (forest greens and earthy tones)
- 🎯 Hero section with bold headlines and CTA buttons
- 📱 Mobile-first approach using Tailwind CSS
- 🎨 Interactive feature cards with hover effects
- 🚀 Optimized for Vercel deployment
- ♿ Accessible markup and semantic HTML

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel

## 📋 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Hero.tsx         # Hero section
│       ├── Features.tsx      # Features section
│       └── Footer.tsx        # Footer section
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/okelo0121/agripilot.git
cd agripilot
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: GitHub Integration

1. Push to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically build and deploy on every push to the main branch.

## 🎨 Color Palette

- **Forest Green:** `#15803d` (primary)
- **Light Green:** `#dcfce7` (accent)
- **Earth Brown:** `#b8a892` (secondary)
- **White:** `#ffffff` (background)

## 📱 Sections

### Hero Section
- Bold headline: "AgriPilot Uganda: AI-Powered Agriculture Advisory"
- Subheadline with value proposition
- Two CTA buttons: "View Pitch Deck" and "Watch Demo Video"
- Animated background elements

### Features Grid (3 Columns)
1. **GraphRAG Intelligence** - Neo4j & Gemini API integration
2. **Last-Mile SMS Delivery** - Luganda & Swahili support
3. **SACCO Integration** - Financial inclusion focus

### Footer
- Navigation links
- Company info
- Social media links
- Attribution: Built by Team Amana for Mercy Corps AgriFin Challenge

## 📝 Environment Variables

Currently, no environment variables are required for the landing page.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built by **Team Amana**
- Developed for the **Mercy Corps AgriFin Challenge**
- Powered by cutting-edge AI and local expertise
