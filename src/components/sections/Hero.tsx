'use client';
import { motion } from 'framer-motion';
import ParticleBackground from '../canvas/ParticleBackground';
import { useTranslations } from 'next-intl';
import { Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Hero() {
  const t = useTranslations('Hero');
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';

  return (
    <section id="hero" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
      <ParticleBackground />

      <div className="z-10 flex max-w-4xl flex-col items-center text-center">

        {/* Availability pulse indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="font-mono text-xs text-green-700 dark:text-green-400 tracking-wide">
            {t('availability')}
          </span>
        </motion.div>

        {/* Status line + h1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' as const, delay: 0.15 }}
        >
          <p className="font-mono text-teal-600 dark:text-neonCyan mb-4 tracking-widest uppercase text-sm md:text-base">
            {t('status')}
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-ghostWhite">
            {t('title_1')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electricViolet to-neonCyan">
              {t('title_highlight')}
            </span>
            <br />
            {t('title_2')}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: 'easeOut' as const }}
          className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mb-3 leading-relaxed font-sans"
        >
          {t('description')}
        </motion.p>

        {/* Credentials line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.32, ease: 'easeOut' as const }}
          className="font-mono text-xs md:text-sm text-gray-400 dark:text-gray-500 mb-10 tracking-wide"
        >
          {t('credentials')}
        </motion.p>

        {/* Abu Dhabi Verified Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-electricViolet/40 bg-electricViolet/5 backdrop-blur-sm"
        >
          <span className="text-sm">🔐</span>
          <span className="font-mono text-xs text-electricViolet tracking-wide">
            {t('license_badge')}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-electricViolet ml-1 animate-pulse" />
        </motion.div>

        {/* Dual CTA row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 25px rgba(0, 255, 255, 0.4)',
              borderColor: 'rgba(0, 255, 255, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="glass-panel flex items-center gap-2 px-8 py-4 rounded-full border border-neonCyan/30 text-neonCyan font-mono uppercase tracking-widest cursor-pointer transition-colors"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          {/* Download CV */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 20px rgba(138, 43, 226, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`/${locale}/cv`}
              className="glass-panel flex items-center gap-2 px-8 py-4 rounded-full border border-electricViolet/30 text-electricViolet font-mono uppercase tracking-widest cursor-pointer transition-colors hover:border-electricViolet/60"
            >
              <Download className="w-4 h-4" />
              {t('cta_cv')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
