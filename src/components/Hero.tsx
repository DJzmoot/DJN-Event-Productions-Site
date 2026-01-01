import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Sparkles, MapPin, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1723902701334-08b0fe53ff4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFnZSUyMGxpZ2h0aW5nJTIwY29uY2VydHxlbnwxfHx8fDE3NjcxNzMzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Stage lighting"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Animated background beams */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-1 h-96 bg-gradient-to-b from-purple-500/20 to-transparent blur-sm"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            height: ['300px', '400px', '300px'],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-1 h-96 bg-gradient-to-b from-indigo-500/20 to-transparent blur-sm"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            height: ['350px', '450px', '350px'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-1 h-96 bg-gradient-to-b from-magenta-500/20 to-transparent blur-sm"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            height: ['320px', '420px', '320px'],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-muted-foreground">
              Founded 2008 • Lighting • Audio • Visuals • Installations • Pixel Shows
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl mx-auto">
            We don’t rent gear — we{' '}
            <span className="gradient-text">engineer systems</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional lighting, audio, and visual engineering for concerts, theatrical productions, conferences,
            and permanent installations across Long Island &amp; NYC since 2008.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gradient-purple-magenta text-white hover:opacity-90 glow-purple text-lg px-8 py-6"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request a Production Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border bg-card/50 backdrop-blur-sm hover:bg-card text-lg px-8 py-6"
              onClick={() => {
                const element = document.querySelector('#portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Our Work
            </Button>
          </div>

          {/* Quick Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-12"
          >
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="w-5 h-5 text-purple-500" />
              <span>Founded 2008</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-indigo-500" />
              <span>Long Island / NYC</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Sparkles className="w-5 h-5 text-magenta-500" />
              <span>Live + Theatrical + Installations</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
