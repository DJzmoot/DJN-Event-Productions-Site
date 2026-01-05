import { motion } from 'motion/react';
import {
  Lightbulb,
  Volume2,
  Theater,
  Speaker,
  Wrench,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Live Lighting Design (Concerts / Events / Conferences)',
    description:
      'Show design, programming, and live busking for concerts, corporate events, and large productions.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Theater,
    title: 'Theatrical Lighting Design',
    description:
      'Cue-based lighting design for theatre, schools, and performance venues — from plot and paperwork through programming and tech.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Volume2,
    title: 'Live Audio Engineering (Concerts / Events / Conferences)',
    description:
      'FOH engineering, system tuning, and RF coordination for clear, consistent sound in any room — from intimate venues to outdoor stages.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Speaker,
    title: 'Theatrical Audio Design',
    description:
      'Mic planning, cue-based mixing, and playback systems designed for intelligibility-first theatrical productions and auditoriums.',
    gradient: 'from-cyan-500 to-emerald-500',
  },
  {
    icon: Wrench,
    title: 'AV Systems Design & Installation',
    description:
      'Specification, installation, and commissioning of lighting, audio, and video systems — engineered signal flow, power, and control.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Sparkles,
    title: 'xLights / Pixel Holiday Displays (Residential + Commercial)',
    description:
      'Custom pixel installations and xLights choreography—from high-impact residential shows to commercial properties and municipal-scale displays.',
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
            Production engineering for live events, theatrical shows, and permanent installations—designed for reliability,
            clarity, and clean aesthetics.
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
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
