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
      'Theatre lighting design and installation for high school auditorium, featuring moving heads, LED pars, and DMX control system.',
    image:
      'https://images.unsplash.com/photo-1723902701334-08b0fe53ff4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGxpZ2h0aW5nJTIwY29uY2VydHxlbnwxfHx8fDE3NjcxNzMzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Lighting',
    services: ['Lighting Design', 'Installation', 'DMX Programming'],
  },
  {
    id: '5',
    title: 'Wedding Reception',
    description:
      'Complete DJ and lighting package with custom uplighting, intelligent fixtures, and professional sound system for 200-guest wedding reception.',
    image:
      'https://images.unsplash.com/photo-1642178225043-f299072af862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMGVxdWlwbWVudCUyMG5pZ2h0Y2x1YnxlbnwxfHx8fDE3NjcyMDk1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'DJ',
    services: ['DJ Services', 'Lighting Design', 'Audio Engineering'],
  },
  {
    id: '6',
    title: 'Riverhead - Merry Market',
    description:
      'Large-scale outdoor event production featuring weather-resistant lighting, distributed PA system, and multi-zone audio control.',
    image:
      '/RiverheadMerryMarket1.gif',
    category: 'Audio',
    services: ['Audio Engineering', 'Lighting Design', 'Installation'],
    isVideo: false,
  },
];

const categories = ['All', 'Lighting', 'Audio', 'DJ', 'Pixel Light Shows'];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const featuredItem = portfolioItems.find((item) => item.featured);
  const regularItems = filteredItems.filter((item) => !item.featured);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Featured work across lighting, audio, DJ services, and pixel installations
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-card border border-border text-muted-foreground hover:border-purple-500/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {selectedCategory === 'All' && featuredItem && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card hover:border-purple-500/50 transition-all"
              onClick={() => setSelectedItem(featuredItem)}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={featuredItem.image}
                    alt={featuredItem.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {featuredItem.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-purple-500/80 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm w-fit mb-4">
                    {featuredItem.category}
                  </span>
                  <h3 className="text-3xl mb-4">{featuredItem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredItem.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featuredItem.services.map((service) => (
                      <span key={service} className="px-3 py-1 bg-secondary rounded-lg text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all h-full">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-purple-500/80 flex items-center justify-center backdrop-blur-sm">
                        <Play className="w-6 h-6 text-white ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
