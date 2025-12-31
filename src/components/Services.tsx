import { motion } from 'motion/react';
import { Lightbulb, Volume2, Music, Zap } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Lighting Design',
    description: 'Intelligent fixtures, uplighting, and complete stage lighting systems tailored to your venue and vision.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Volume2,
    title: 'Audio Engineering',
    description: 'Professional PA systems, live sound mixing, and acoustic solutions for crystal-clear audio experiences.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Music,
    title: 'DJ Services',
    description: 'Professional DJ & MC with integrated lighting control, curated playlists, and seamless event flow.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Pixel Lighting & xLights',
    description: 'Custom pixel installations, sequencing, and xLights-programmed shows for stunning visual displays.',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
];

export function Services() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive production services engineered for performance and reliability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
