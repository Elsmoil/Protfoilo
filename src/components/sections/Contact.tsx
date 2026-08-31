'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="relative w-full py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center justify-center z-10">
      <div className="max-w-3xl w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-ghostWhite mb-4">
            <span className="text-brass-light dark:text-brass">06.</span> {t('title')}
          </h2>
          <p className="font-mono text-gray-500 dark:text-gray-400 text-sm">
            {t('desc')}
          </p>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full rounded-sm border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-8 md:p-10"
        >
          {/* Intro text */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 font-sans" dir="auto">
            {t('cat_text')}
          </p>

          {/* Contact links */}
          <div className="flex flex-col gap-5">
            <a
              href="mailto:contact@elsmoal.me"
              onMouseEnter={() => setHoveredLink('email')}
              onMouseLeave={() => setHoveredLink(null)}
              className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-brass-light dark:hover:text-brass transition-colors duration-200 w-fit group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className={`font-mono text-sm ${hoveredLink === 'email' ? 'underline decoration-brass underline-offset-4' : ''}`}>
                contact@elsmoal.me
              </span>
            </a>

            <a
              href="https://github.com/Elsmoil"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink('github')}
              onMouseLeave={() => setHoveredLink(null)}
              className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-brass-light dark:hover:text-brass transition-colors duration-200 w-fit group"
            >
              <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className={`font-mono text-sm ${hoveredLink === 'github' ? 'underline decoration-brass underline-offset-4' : ''}`}>
                github.com/Elsmoil
              </span>
            </a>

            <a
              href="https://ae.linkedin.com/in/elsmoal"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink('linkedin')}
              onMouseLeave={() => setHoveredLink(null)}
              className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors duration-200 w-fit group"
            >
              <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className={`font-mono text-sm ${hoveredLink === 'linkedin' ? 'underline decoration-[#0A66C2] underline-offset-4' : ''}`}>
                linkedin.com/in/elsmoal
              </span>
            </a>
          </div>
        </motion.div>
        
        {/* Footer */}
        <div className="mt-16 text-center font-mono text-xs text-gray-400 dark:text-gray-600">
          <p>{t('footer')}</p>
        </div>
      </div>
    </section>
  );
}
