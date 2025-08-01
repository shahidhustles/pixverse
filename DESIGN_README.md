# Retro 3D UI Gaming Landing Page Design Document

## Project Overview

Creating a modern retro 3D/sticker shadow UI landing page for a Valorant-style FPS game.

## Design Theme

**Retro 3D UI + Gaming FPS (Valorant Style)**

- Bold, pronounced shadows and depth
- Vibrant gaming colors
- 3D sticker-like elements
- Modern retro aesthetic
- Clean, playful approach with gaming vibes

## Color Palette

- **Primary Background**: #0f1419 (dark gaming background)
- **Secondary Background**: #1a1f2e
- **Card Background**: #ffffff (bright white cards)
- **Accent Colors**:
  - Valorant Red: #ff4655
  - Electric Blue: #00d4ff
  - Neon Green: #00ff88
  - Purple: #9d4edd
  - Orange: #ff8500
- **Shadow Colors**:
  - Primary Shadow: #000000 (strong black shadows)
  - Colored Shadows: Match accent colors with opacity
- **Text**: #000000 (black on white), #ffffff (white on dark)

## Landing Page Structure

### 1. Hero Section

- **Location**: Top of page
- **Content**:
  - Gaming FPS headline with retro 3D text effects
  - Subtitle about the FPS game
  - CTA buttons with sticker shadow styling
  - **Placeholder**: Blank space reserved for gaming component
- **Styling**: Large 3D cards, vibrant gradients, strong shadows

### 2. Image Grid Section (Features/Game Photos)

- **Location**: Below hero
- **Content**: Game features, screenshots, weapons, maps
- **Component**: Grid layout with retro 3D cards
- **Styling**: Sticker shadow cards with gaming visuals
- **Images**: FPS game features and screenshots

### 3. Teams Section

- **Location**: Middle section
- **Content**: **PLACEHOLDER** - Space reserved for team component
- **Styling**: 3D cards for team members with strong shadows
- **Features**: Hover effects, vibrant colors

### 4. Footer Section

- **Location**: Bottom
- **Content**:
  - Gaming community links
  - Social media with 3D sticker icons
  - Newsletter signup
- **Styling**: Retro 3D card design

## Retro 3D UI Design Principles

### Shadow System

```css
/* Strong 3D Shadow Effects */
.retro-3d {
  box-shadow: 8px 8px 0px #000000;
  border: 2px solid #000000;
}

/* Colored Shadow Variants */
.retro-3d-red {
  box-shadow: 8px 8px 0px #ff4655;
  border: 2px solid #ff4655;
}

/* Hover Effects */
.retro-3d:hover {
  transform: translate(-2px, -2px);
  box-shadow: 10px 10px 0px #000000;
}
```

### Interactive States

- **Hover**: Lift effect (translate up and left, increase shadow)
- **Active**: Press effect (translate down and right, decrease shadow)
- **Focus**: Add glow effect for accessibility

## Gaming Elements Integration

- **Typography**: Bold, modern gaming fonts
- **Colors**: Valorant-inspired color scheme
- **Animations**: Smooth, snappy transitions
- **Interactive**: Gaming-style hover effects
- **Layout**: Card-based, grid system

## File Structure Implementation

```
src/
├── app/
│   ├── globals.css          # Updated with retro 3D styles
│   ├── layout.tsx
│   └── page.tsx             # Main landing page layout
├── components/              # Landing page components
│   ├── landing/
│   │   ├── hero-section.tsx         # Hero with retro 3D design
│   │   ├── features-grid.tsx        # Game features/photos grid
│   │   ├── teams-section.tsx        # Teams placeholder
│   │   └── footer-section.tsx       # Gaming footer
│   └── ui/                          # Reusable 3D UI components
│       ├── retro-card.tsx           # Base retro 3D card
│       ├── retro-button.tsx         # 3D buttons
│       └── gaming-icons.tsx         # Gaming UI elements
├── elements/                        # Keep existing elements
│   └── infinite-marquee/
└── styles/                          # Styling
    └── retro-3d.css                 # Retro 3D utility classes
```

## Component Responsibilities

### New Files to Create:

1. `hero-section.tsx` - Gaming hero with retro 3D design + blank space for gaming component
2. `features-grid.tsx` - Game features/photos in 3D grid layout
3. `teams-section.tsx` - Team cards placeholder with 3D styling
4. `footer-section.tsx` - Gaming footer with retro 3D elements
5. `retro-card.tsx` - Reusable retro 3D card component
6. `retro-button.tsx` - 3D sticker shadow buttons
7. `gaming-icons.tsx` - Gaming UI components
8. `retro-3d.css` - Retro 3D utility styles

### Files to Modify:

1. `page.tsx` - Main layout using new components
2. `globals.css` - Add retro 3D base styles

## Development Notes

- No cursor animation/splur effect
- Focus on strong shadows and 3D effects
- Use vibrant gaming colors
- Leave clear placeholder for gaming component in hero
- Grid-based layout for game features
- Responsive design for all screen sizes

## Reference Guidelines

- Strong, pronounced shadows (8px+)
- High contrast colors
- Bold, chunky design elements
- Smooth hover animations
- Gaming-focused content and imagery
