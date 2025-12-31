import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const values = [
  {
    title: 'Reliability',
    description: 'Consistent performance and dependable service delivery for every event',
  },
  {
    title: 'Craftsmanship',
    description: 'Technical excellence and attention to detail in every installation',
  },
  {
    title: 'Clean Design',
    description: 'Elegant, professional aesthetics that enhance rather than distract',
  },
  {
    title: 'Thoughtful Planning',
    description: 'Strategic approach to production logistics and event execution',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="gradient-text">About Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1624252447862-6c904f09286a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwc291bmQlMjBlbmdpbmVlcnxlbnwxfHx8fDE3NjcyMDk1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sound engineer at work"
                className="rounded-2xl border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                DJN Event Productions was founded by Nick Manganiello in 2008, beginning with professional DJ services and steadily expanding into comprehensive event production.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What started as a passion for music and entertainment has evolved into a full-scale production company known for technical excellence, clean aesthetics, and reliable service delivery. Our growth has been built entirely through word-of-mouth referrals from satisfied clients across Long Island and the greater New York City area.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we serve schools, venues, corporate clients, municipalities, and provide custom installations for large-scale displays. Every project reflects our commitment to craftsmanship and attention to detail.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl">Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
