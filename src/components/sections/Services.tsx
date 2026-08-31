'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Server, Layers, Cpu, Shield } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function Services() {
  const t = useTranslations('Services');

  const services = [
    {
      icon: <Server className="w-8 h-8 text-brass-light dark:text-brass" />,
      title: t('s1_title'),
      desc: t('s1_desc'),
      tags: ['Node.js', 'PostgreSQL', 'Redis', 'Microservices'],
      glowColor: 'rgba(201,138,75,0.12)',
      borderHover: 'rgba(201,138,75,0.35)',
    },
    {
      icon: <Layers className="w-8 h-8 text-brass-light dark:text-brass" />,
      title: t('s2_title'),
      desc: t('s2_desc'),
      tags: ['Multi-tenant', 'TypeScript', 'Docker', 'Vercel'],
      glowColor: 'rgba(166,106,50,0.12)',
      borderHover: 'rgba(166,106,50,0.4)',
    },
    {
      icon: <Cpu className="w-8 h-8 text-brass-light dark:text-brass" />,
      title: t('s3_title'),
      desc: t('s3_desc'),
      tags: ['n8n (Self-hosted)', 'Python', 'Omnichannel APIs', 'AI Pipelines'],
      glowColor: 'rgba(201,138,75,0.12)',
      borderHover: 'rgba(201,138,75,0.35)',
    },
    {
      icon: <Shield className="w-8 h-8 text-brass-light dark:text-brass" />,
      title: t('s4_title'),
      desc: t('s4_desc'),
      tags: ['AES/ECC', 'Steganography', 'Zero-Trust', 'RBAC'],
      glowColor: 'rgba(166,106,50,0.12)',
      borderHover: 'rgba(166,106,50,0.4)',
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center justify-center z-10"
    >
      <div className="max-w-6xl w-full">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center md:text-start"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-ghostWhite mb-4">
            <span className="text-brass-light dark:text-brass">03.</span> {t('title')}
          </h2>
          <p className="font-mono text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl">
            {t('comment')}
            <br />
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Abu Dhabi license note */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14 flex items-center gap-3 px-4 py-2.5 rounded-md border border-brass/20 bg-brass/5 w-fit"
        >
          <span className="font-mono text-sm text-brass-light dark:text-brass">{t('license_note')}</span>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((svc, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: `0px 20px 40px ${svc.glowColor}`,
                borderColor: svc.borderHover,
              }}
              className="glass-panel p-8 flex flex-col gap-5 transition-all duration-300 group relative overflow-hidden cursor-default"
            >
              {/* Background glow blob */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: svc.glowColor }}
              />

              {/* Icon + Title */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-sm bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  {svc.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-ghostWhite group-hover:text-brass transition-colors duration-200">
                  {svc.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-sans">
                {svc.desc}
              </p>

              {/* Tech tags */}
              <ul className="flex flex-wrap gap-2 mt-auto">
                {svc.tags.map((tag, j) => (
                  <li
                    key={j}
                    className="font-mono text-xs text-gray-500 dark:text-gray-400 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-md"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* CTA arrow — WhatsApp link */}
              <a
                href={`https://wa.me/971559264344?text=${encodeURIComponent(
                  `Hi Elsmoal, I'm interested in your ${svc.title} service. I'd like to discuss a project.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-2 flex items-center gap-1 font-mono text-xs text-gray-400
                group-hover:text-brass-light dark:group-hover:text-brass
                opacity-0 group-hover:opacity-100 transition-all duration-200 w-fit"
              >
                → {t('cta_label')}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 glass-panel p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-brass/10 text-center md:text-start"
        >
          <div>
            <p className="font-heading text-xl font-semibold text-gray-900 dark:text-ghostWhite mb-1">
              {t('banner_title')}
            </p>
            <p className="font-mono text-sm text-gray-500 dark:text-gray-400">
              {t('banner_sub')}
            </p>
          </div>
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="shrink-0 px-6 py-3 rounded-md bg-brass text-white font-mono text-sm transition-colors hover:bg-brass-light cursor-pointer"
          >
            {t('banner_cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
