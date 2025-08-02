# Pixverse Gaming Website 🎮

**🌐 Live Demo: [https://pixverse.vercel.app/](https://pixverse.vercel.app/)**

A retro-style gaming website built for the **Pixverse Webathon** challenge, featuring interactive components and engaging gaming elements. This project showcases modern web development techniques while maintaining a nostalgic retro aesthetic that appeals to gaming enthusiasts.

## 🌐 About the Website

Pixverse is an immersive gaming platform that combines retro aesthetics with modern web technologies. The website features a bold, cyberpunk-inspired design with interactive elements that engage visitors through gaming experiences. Built with Next.js and featuring custom components, it delivers a seamless user experience across all devices.

The site includes various gaming sections, team showcases, and interactive elements that demonstrate both technical prowess and creative design. With its retro 3D styling, animated components, and responsive design, Pixverse represents the perfect blend of nostalgia and innovation.

## 🎯 Webathon Challenge Components

As part of the Pixverse Webathon, I was tasked with implementing three specific elements and adding a mystery element:

### ✅ Required Elements (Cloned):

1. **🍔 Hamburger Menu** (`src/components/ui/hamburger-menu.tsx`)

   - Retro-styled navigation menu with 3D button effects
   - Smooth animations and transitions
   - Fixed positioning with z-index layering
   - Responsive design for mobile and desktop

2. **♾️ Infinite Marquee** (`src/elements/infinite-marquee/infinite-scroll.tsx`)

   - Seamlessly scrolling cards with gaming content
   - GSAP-powered smooth animations
   - Customizable items and styling
   - Performance-optimized infinite loop

3. **👥 Team Section** (`src/components/landing/teams-section.tsx`)
   - Showcase of gaming team members
   - Interactive cards with hover effects
   - Professional player profiles with images
   - Responsive grid layout

### 🎲 Mystery Element (Original Creation):

4. **🎯 Interactive Crosshair & Shooting Game** (`src/elements/interactive-target/shooting-game.tsx`)
   - Fully functional browser-based shooting game
   - Dynamic target generation with varying speeds and sizes
   - Real-time score tracking and game state management
   - Custom crosshair with GSAP animations
   - Multiple difficulty levels and game modes
   - Sound effects and visual feedback

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shahidhustles/pixverse.git
cd pixverse
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion
- **Icons**: Custom Gaming Icons
- **Image Optimization**: Next.js Image Component
- **Development**: ESLint, PostCSS

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── landing/           # Landing page sections
│   │   ├── hero-section.tsx
│   │   ├── features-grid.tsx
│   │   ├── teams-section.tsx      # ✅ Required: Team Section
│   │   └── footer-section.tsx
│   └── ui/                # Reusable UI components
│       ├── hamburger-menu.tsx     # ✅ Required: Hamburger Menu
│       ├── retro-button.tsx
│       ├── retro-card.tsx
│       └── gaming-icons.tsx
├── elements/              # Interactive elements
│   ├── infinite-marquee/
│   │   └── infinite-scroll.tsx    # ✅ Required: Infinite Marquee
│   ├── interactive-target/
│   │   └── shooting-game.tsx      # 🎲 Mystery: Shooting Game
│   └── mystery/
│       └── crosshair.tsx          # 🎲 Mystery: Interactive Crosshair
└── styles/
    └── retro-3d.css      # Custom retro styling
```

## 🎮 Features

- **Responsive Design**: Optimized for all screen sizes
- **Retro Aesthetics**: 3D buttons, shadows, and cyberpunk styling
- **Interactive Gaming**: Browser-based shooting game with scoring
- **Smooth Animations**: GSAP-powered transitions and effects
- **Performance Optimized**: Next.js optimization and lazy loading
- **Accessibility**: Keyboard navigation and screen reader support
- **Modern Development**: TypeScript, ESLint, and best practices

## 🎯 Game Features

The interactive shooting game includes:

- **Dynamic Targets**: Randomly generated targets with varying properties
- **Scoring System**: Points based on target difficulty and accuracy
- **Game States**: Waiting, active, paused, and game over states
- **Visual Effects**: Muzzle flash, hit effects, and animations
- **Responsive Controls**: Mouse and touch support
- **Customizable**: Adjustable difficulty and game parameters

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 License

This project is created for the Pixverse Webathon challenge.

## 🤝 Contributing

This project was developed as part of the Pixverse Webathon. Feel free to explore the code and learn from the implementations!

---

**Built with ❤️ for the Pixverse Webathon by [Shahid Patel](https://github.com/shahidhustles)**
