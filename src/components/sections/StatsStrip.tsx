'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Briefcase, GraduationCap, BadgeCheck, Star } from 'lucide-react';

export default function StatsStrip() {
  const t = useTranslations('StatsStrip');

  const stats = [
    {
      icon: <Briefcase className="w-4 h-4 text-teal-600 dark:text-neonCyan shrink-0" />,
      value: '5+',
      label: t('stat1'),
    },
    {
      icon: <GraduationCap className="w-4 h-4 text-electricViolet shrink-0" />,
      value: 'ALX',
      label: t('stat2'),
    },
    {
      icon: <BadgeCheck className="w-4 h-4 text-green-600 dark:text-green-400 shrink-0" />,
      value: '🇦🇪',
      label: t('stat3'),
    },
    {
      icon: <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-400 shrink-0" />,
      value: 'CTO',
      label: t('stat4'),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative z-10 w-full py-5 border-y border-black/10 dark:border-white/5 bg-gray-50/80 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden"
    >
      {/* Subtle glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neonCyan/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-black/10 dark:divide-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center gap-2 px-4 text-center group"
            >
              {/* Value row */}
              <div className="flex items-center gap-2">
                {stat.icon}
                <span className="font-heading font-bold text-xl md:text-2xl text-gray-900 dark:text-ghostWhite">
                  {stat.value}
                </span>
              </div>
              {/* Label */}
              <p className="font-mono text-xs text-gray-500 dark:text-gray-400 leading-snug group-hover:text-teal-600 dark:group-hover:text-neonCyan transition-colors duration-200">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
