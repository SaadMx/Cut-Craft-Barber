export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: string;
}

export interface Barber {
  id: number;
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  years: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface NavLink {
  label: string;
  href: string;
}
