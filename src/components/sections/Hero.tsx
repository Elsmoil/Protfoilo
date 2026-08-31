'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Download, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Hero() {
  const t = useTranslations('Hero');
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';

  return (
    <section id="hero" className="relative flex min-h-[70vh] pt-20 pb-10 w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6">

      <div className="z-10 flex max-w-4xl flex-col items-center text-center">

        {/* Availability pulse indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 mb-8 px-4 py-2 rounded-md border border-brass/20 bg-brass/5 backdrop-blur-sm"
        >
          <span className="font-mono text-xs text-brass-light dark:text-brass tracking-wide">
            {t('availability')}
          </span>
        </motion.div>

        {/* Status line + h1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' as const, delay: 0.15 }}
        >
          <p className="font-mono text-brass-light dark:text-brass mb-4 tracking-wide text-sm md:text-base">
            {t('status')}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-ghostWhite">
            {t('title_1')}{' '}
            <span className="text-brass-light dark:text-brass">
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

        {/* Abu Dhabi License */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex items-center gap-2 mb-10 px-4 py-2 rounded-md border border-brass/30 bg-brass/5"
        >
          <span className="font-mono text-xs text-brass-light dark:text-brass tracking-wide">
            {t('license_badge')}
          </span>
        </motion.div>

        {/* Dual CTA row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary CTA */}
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex items-center gap-2 px-6 py-3 rounded-sm bg-brass text-white font-mono text-sm cursor-pointer hover:bg-brass-light transition-colors"
          >
            {t('cta')}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>

          {/* Download CV */}
          <Link
            href={`/${locale}/cv`}
            className="flex items-center gap-2 px-6 py-3 rounded-sm border border-brass/40 text-brass-light dark:text-brass font-mono text-sm cursor-pointer hover:border-brass transition-colors"
          >
            <Download className="w-4 h-4" />
            {t('cta_cv')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
