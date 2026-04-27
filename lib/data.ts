import type { Service, Barber, Testimonial, GalleryImage, NavLink } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Barbers", href: "#barbers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#booking" },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    name: "Signature Cut",
    description:
      "A consultation-led cut tailored to your face shape, lifestyle, and personal aesthetic. Includes wash and blow-dry.",
    price: "Rs 1,200",
    duration: "45 min",
    icon: "scissors",
  },
  {
    id: 2,
    name: "Beard Sculpt",
    description:
      "Full beard shaping, detailing and conditioning with warm oils and a hot towel finish for precision results.",
    price: "Rs 900",
    duration: "30 min",
    icon: "beard",
  },
  {
    id: 3,
    name: "Hot Towel Shave",
    description:
      "A classic straight-razor shave with premium lather, hot towels, facial massage and aftercare balm.",
    price: "Rs 1,500",
    duration: "60 min",
    icon: "razor",
  },
  {
    id: 4,
    name: "Fade & Taper",
    description:
      "Precision fade from skin to length — low, mid or high. Crisp lines, clean edges and perfect blending included.",
    price: "Rs 1,000",
    duration: "40 min",
    icon: "fade",
  },
  {
    id: 5,
    name: "Scalp Treatment",
    description:
      "Deep-cleanse and nourishing scalp massage using therapeutic oils to promote growth and relaxation.",
    price: "Rs 800",
    duration: "35 min",
    icon: "scalp",
  },
  {
    id: 6,
    name: "Full Grooming",
    description:
      "Complete top-to-toe grooming package: cut, beard sculpt, hot towel shave, scalp treatment and styling.",
    price: "Rs 3,200",
    duration: "2 hrs",
    icon: "crown",
  },
];

export const BARBERS: Barber[] = [
  {
    id: 1,
    name: "Zain Khan",
    role: "Master Barber",
    experience: "12 yrs",
    bio: "Trained in London and Dubai. Specializes in precision fades, tapers and classic gentleman cuts.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    specialties: ["Classic Cuts", "Fades", "Tapers"],
  },
  {
    id: 2,
    name: "Omar Farooq",
    role: "Fade Artist",
    experience: "9 yrs",
    bio: "Known for razor-sharp fades and creative hair designs. A social media favourite with 50K followers.",
    image:
      "https://images.unsplash.com/photo-1540474212649-f494de02b58b?w=600&q=80",
    specialties: ["Skin Fades", "Designs", "Modern Cuts"],
  },
  {
    id: 3,
    name: "Bilal Raza",
    role: "Beard Expert",
    experience: "7 yrs",
    bio: "Beard sculpting and hot towel shave specialist with a meticulous eye for symmetry and balance.",
    image:
      "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&q=80",
    specialties: ["Beard Sculpt", "Hot Shave", "Styling"],
  },
  {
    id: 4,
    name: "Hamza Ali",
    role: "Style Consultant",
    experience: "5 yrs",
    bio: "Combines modern trends with classic techniques. Certified by Wahl International Barbering Academy.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    specialties: ["Styling", "Colour", "Scalp Care"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ahmed Siddiqui",
    role: "Regular Client · 3 years",
    text: "Best barbershop in Karachi — no question. Zain knows exactly how to bring a vision to life. The hot towel shave alone is worth every rupee.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    years: "3 years",
  },
  {
    id: 2,
    name: "Tariq Mirza",
    role: "VIP Member · 5 years",
    text: "I've been to barbershops in London, Dubai, NYC — Cuts & Craft holds its own. The attention to detail is exceptional. My go-to every time I'm in Karachi.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    years: "5 years",
  },
  {
    id: 3,
    name: "Faisal Ansari",
    role: "Regular Client · 2 years",
    text: "Omar's fade skills are on another level. Walked in with a reference photo and walked out looking better than the picture. Genuinely talented team.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    years: "2 years",
  },
  {
    id: 4,
    name: "Kamran Sheikh",
    role: "New Client",
    text: "First time here and I'm already a regular. The ambience, the music, the skill — everything is dialled in perfectly. Absolutely phenomenal experience.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    years: "6 months",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=85",
    alt: "Master barber at work",
    category: "Cuts",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=85",
    alt: "Precision fade",
    category: "Fades",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=85",
    alt: "Beard grooming",
    category: "Beards",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=85",
    alt: "Hair styling session",
    category: "Styling",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=85",
    alt: "Barbershop interior",
    category: "Shop",
  },
];

export const STATS = [
  { num: "15+", label: "Years" },
  { num: "8K+", label: "Clients" },
  { num: "4.9", label: "Rating" },
];
