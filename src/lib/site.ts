// Site-wide constants. Contact details below are the ones already published
// on the previous djneventproductions.com site.
export const SITE = {
  name: 'DJN Event Productions',
  owner: 'Nick Manganiello',
  url: 'https://djneventproductions.com',
  description:
    'Nick Manganiello — independent lighting designer, technical director, show programmer and live event operator serving production companies, agencies and venues throughout the Northeastern United States.',
  email: 'info@djneventproductions.com',
  phone: '(516) 578-0551',
  phoneHref: 'tel:+15165780551',
  locality: 'Smithtown',
  region: 'NY',
  serviceArea: 'Northeastern United States',
  since: 2008,
} as const;

export const NAV = [
  { label: 'Home', href: '/', id: 'top' },
  { label: 'Work', href: '/work/', id: 'work' },
  { label: 'Expertise', href: '/#expertise', id: 'expertise' },
  { label: 'About', href: '/#about', id: 'about' },
  { label: 'Collaboration', href: '/#collaboration', id: 'collaboration' },
  { label: 'Contact', href: '/#contact', id: 'contact' },
] as const;

export const EXPERTISE = [
  { icon: 'lighting', label: 'Lighting Design & Programming' },
  { icon: 'direction', label: 'Technical Direction' },
  { icon: 'operation', label: 'Show Operation' },
  { icon: 'audio', label: 'Audio Systems' },
  { icon: 'video', label: 'Video & Projection' },
  { icon: 'holiday', label: 'Holiday Lighting & Animated Displays' },
  { icon: 'architectural', label: 'Architectural Lighting' },
  { icon: 'dj', label: 'DJ Services' },
] as const;

export const PROJECT_TYPES = [
  'Lighting design & programming',
  'Technical direction',
  'Show operation',
  'Video & projection',
  'Audio systems',
  'Holiday lighting / animated light show',
  'Architectural lighting',
  'DJ services',
  'Something else',
] as const;
