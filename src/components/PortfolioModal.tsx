import { motion, AnimatePresence } from 'motion/react';
import { X, Play } from 'lucide-react';
import { Button } from './ui/button';

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

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>

          {/* Image/Video */}
          <div className="relative aspect-video bg-black">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {item.isVideo && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-purple-500/80 flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-3xl mb-2">{item.title}</h3>
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  {item.category}
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {item.description}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  Services Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-secondary rounded-lg text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
