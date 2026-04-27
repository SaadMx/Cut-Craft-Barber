# ✂️ Cuts & Craft — Premium Barbershop Website

A professional, animated Next.js 14 barbershop website with 3D Three.js elements, scroll animations, and a full booking form.

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** (App Router) | Framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility styling |
| **CSS Modules** | Component-scoped styles |
| **Three.js + @react-three/fiber** | 3D scene with animated rings, orbs, floating cubes |
| **Framer Motion** | Page transitions (optional, installed) |
| **next/font** | Google Fonts (Playfair Display, Barlow) |
| **next/image** | Optimized images from Unsplash |
| **Lucide React** | Icons |

## Project Structure

```
cuts-and-craft/
├── app/
│   ├── layout.tsx          # Root layout + font setup
│   └── page.tsx            # Main page (assembles all sections)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed animated navbar
│   │   └── Footer.tsx      # Footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx       # Full-screen hero with parallax
│   │   ├── MarqueeSection.tsx    # Scrolling gold marquee
│   │   ├── ServicesSection.tsx   # 6 services with 3D tilt hover
│   │   ├── BarbersSection.tsx    # Team cards with hover reveal
│   │   ├── GallerySection.tsx    # Masonry image gallery
│   │   ├── TestimonialsSection.tsx # Reviews + Google rating
│   │   └── BookingSection.tsx    # Working booking form
│   ├── 3d/
│   │   └── Scene3D.tsx     # Three.js scene (rings, orbs, floating cubes)
│   └── ui/
│       ├── CustomCursor.tsx     # Gold custom cursor
│       ├── FadeIn.tsx           # Scroll reveal wrapper
│       ├── LoadingScreen.tsx    # Animated loading screen
│       ├── ScrollProgress.tsx   # Top progress bar
│       └── SectionLabel.tsx     # Reusable section label
├── styles/
│   ├── globals.css              # Global styles, variables, animations
│   └── components.module.css   # Component-scoped CSS modules
├── lib/
│   └── data.ts             # All site data (services, barbers, etc.)
├── hooks/
│   └── index.ts            # useScrollY, useInView, useMousePosition...
├── types/
│   └── index.ts            # TypeScript interfaces
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### 3. Build for production

```bash
npm run build
npm start
```

## Features

- ✅ **Loading screen** with animated scissors logo
- ✅ **Custom gold cursor** with trailing ring
- ✅ **Scroll progress bar** at top
- ✅ **Hero section** with parallax image + animated text
- ✅ **Gold marquee** banner
- ✅ **Services grid** with 3D perspective tilt on hover
- ✅ **3D Three.js scene** — rotating gold rings, floating cubes, metallic orb
- ✅ **Barbers section** with image hover zoom + detail reveal
- ✅ **Masonry gallery** with overlay effects
- ✅ **Testimonials** with Google rating card
- ✅ **Booking form** with confirmation state
- ✅ **Fixed navbar** that transforms on scroll
- ✅ **FadeIn scroll animations** on all sections
- ✅ **Optimized images** from Unsplash via next/image

## Customisation

Edit `lib/data.ts` to update:
- Services names and prices
- Barber profiles and images
- Testimonials
- Gallery images

Edit `styles/globals.css` to change the colour palette (CSS variables at `:root`).

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```
