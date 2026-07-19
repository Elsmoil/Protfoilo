'use client';
import { motion } from 'framer-motion';
import { TerminalSquare, Layers, Cpu } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Philosophy() {
  const t = useTranslations('Philosophy');

  return (
    <section id="philosophy" className="relative w-full py-24 px-6 flex flex-col items-center justify-center z-10">
      <div className="max-w-4xl w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-ghostWhite mb-4 text-center md:text-left">
            <span className="text-electricViolet">05.</span> {t('title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* About Me text block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 glass-panel p-8 relative overflow-hidden"
          >
            {/* Glow blob */}
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-gradient-to-br from-electricViolet/20 to-neonCyan/20 rounded-full blur-3xl -z-10" />
            
            <div className="flex flex-col md:flex-row gap-8 mb-6 items-start">
              {/* Initials avatar */}
              <div className="w-24 h-24 shrink-0 rounded-2xl bg-gradient-to-br from-electricViolet/40 to-neonCyan/30 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-electricViolet/60 to-neonCyan/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="font-heading font-bold text-2xl text-white tracking-wider z-10">ES</span>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-sans">
                  {t('p1_1')} <strong className="text-electricViolet dark:text-neonCyan font-mono">{t('p1_name')}</strong>{t('p1_2')}
                </p>
                {/* Credentials badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="font-mono text-xs text-teal-700 dark:text-neonCyan bg-teal-50 dark:bg-neonCyan/10 border border-teal-200 dark:border-neonCyan/20 px-2 py-0.5 rounded-full">
                    🎓 ALX SWE Graduate
                  </span>
                  <span className="font-mono text-xs text-electricViolet bg-electricViolet/10 border border-electricViolet/20 px-2 py-0.5 rounded-full">
                    🎓 ALX AI Career Essentials
                  </span>
                  <span className="font-mono text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-full">
                    📋 Freelance License · Abu Dhabi
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-6 font-sans">
              {t('p2')}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed font-sans border-s-2 border-electricViolet ps-4 italic">
              {t('quote')}
            </p>
          </motion.div>

          {/* Engineering values */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-5 flex flex-col gap-6"
          >
            <div className="flex gap-4 items-start">
              <TerminalSquare className="w-8 h-8 text-teal-600 dark:text-neonCyan shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-gray-900 dark:text-ghostWhite font-semibold text-lg">{t('val1_title')}</h4>
                <p className="text-sm text-gray-500 font-mono mt-1">{t('val1_desc')}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Layers className="w-8 h-8 text-electricViolet shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-gray-900 dark:text-ghostWhite font-semibold text-lg">{t('val2_title')}</h4>
                <p className="text-sm text-gray-500 font-mono mt-1">{t('val2_desc')}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Cpu className="w-8 h-8 text-teal-600 dark:text-neonCyan shrink-0 mt-1" />
              <div>
                <h4 className="font-heading text-gray-900 dark:text-ghostWhite font-semibold text-lg">{t('val3_title')}</h4>
                <p className="text-sm text-gray-500 font-mono mt-1">{t('val3_desc')}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
