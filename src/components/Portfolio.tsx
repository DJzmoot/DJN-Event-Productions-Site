import { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { PortfolioModal } from './PortfolioModal';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  services: string[];
  isVideo?: boolean;
  featured?: boolean;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Residential Light Show Installation - Lights on Marquette',
    description:
      '10,000+ pixel residential holiday light show installation choreographed in xLights and synchronized to music. Custom sequencing, controller layout, power distribution, and weather-ready outdoor installation.',
    image: '/LightsonMarquetteChristmas1.jpg',
    category: 'Pixel Light Shows',
    services: ['Pixel Light Shows', 'xLights Programming', 'Installation'],
    featured: true,
    isVideo: false,
  },
  {
    id: '2',
    title: 'Corporate Gala Production',
    description:
      'Full production services for 500-person corporate event including intelligent lighting, professional audio mixing, and DJ services with integrated light control.',
    image:
      'https://images.unsplash.com/photo-1709731191876-899e32264420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY3MTI0MTM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Lighting',
    services: ['Lighting Design', 'Audio Engineering', 'DJ Services'],
  },
  {
    id: '3',
    title: 'Live Sound Engineering',
    description:
      'Multi-stage festival audio production with comprehensive PA systems, monitor mixing, and live sound engineering for outdoor venue.',
    image:
      'https://images.unsplash.com/photo-1629124985795-896afbb07d7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdWRpbyUyMG1peGVyfGVufDF8fHx8MTc2NzIwOTU1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    services: ['Audio Engineering', 'PA Systems', 'Live Mixing'],
  },
  {
    id: '4',
    title: 'School Performance Lighting',
    description:
      'Theatre lighting design and installation for high school auditorium, featuring moving heads, LED pars, and DMX c
