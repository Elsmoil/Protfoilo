'use client';
import { motion } from 'framer-motion';
import { Terminal, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="relative w-full py-24 px-6 flex flex-col items-center justify-center z-10">
      <div className="max-w-3xl w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-ghostWhite mb-4">
            <span className="text-electricViolet">06.</span> {t('title')}
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
          className="w-full rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#0a0a0a] shadow-[0_0_30px_rgba(0,255,255,0.05)]"
        >
          {/* Terminal title bar */}
          <div className="flex items-center px-4 py-3 border-b border-black/10 dark:border-white/10 bg-gray-100 dark:bg-white/5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto flex items-center gap-2 text-gray-500 dark:text-gray-400 font-mono text-xs">
              <Terminal className="w-3.5 h-3.5" />
              <span>root@elsmoal-server:~</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base text-gray-700 dark:text-gray-300">
            <div className="mb-4">
              <span className="text-teal-600 dark:text-neonCyan">elsmoal@system</span>
              <span className="text-gray-400">:</span>
              <span className="text-electricViolet">~</span>
              <span className="text-gray-400">$</span> 
              <span className="ml-2 text-gray-900 dark:text-ghostWhite">cat contact_info.txt</span>
            </div>
            
            <div className="mb-8 space-y-4 pl-2 border-l border-black/10 dark:border-white/10 ml-2">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('cat_text')}
              </p>
            </div>

            <div className="mb-6">
              <span className="text-teal-600 dark:text-neonCyan">elsmoal@system</span>
              <span className="text-gray-400">:</span>
              <span className="text-electricViolet">~</span>
              <span className="text-gray-400">$</span> 
              <span className="ml-2 text-gray-900 dark:text-ghostWhite">./initiate_connection.sh</span>
            </div>

            {/* Contact links — no TODO badges */}
            <div className="flex flex-col gap-4 pl-4">
              <a 
                href="mailto:contact@elsmoal.com" 
                onMouseEnter={() => setHoveredLink('email')}
                onMouseLeave={() => setHoveredLink(null)}
                className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-neonCyan dark:hover:text-neonCyan transition-colors duration-200 w-fit group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className={`${hoveredLink === 'email' ? 'underline decoration-neonCyan underline-offset-4' : ''}`}>
                  contact@elsmoal.com
                </span>
              </a>

              <a 
                href="https://github.com/Elsmoal" 
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink('github')}
                onMouseLeave={() => setHoveredLink(null)}
                className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-electricViolet dark:hover:text-electricViolet transition-colors duration-200 w-fit group"
              >
                <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className={`${hoveredLink === 'github' ? 'underline decoration-electricViolet underline-offset-4' : ''}`}>
                  github.com/Elsmoal
                </span>
              </a>

              <a 
                href="https://ae.linkedin.com/in/elsmoal-" 
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredLink('linkedin')}
                onMouseLeave={() => setHoveredLink(null)}
                className="flex items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-colors duration-200 w-fit group"
              >
                <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className={`${hoveredLink === 'linkedin' ? 'underline decoration-[#0A66C2] underline-offset-4' : ''}`}>
                  linkedin.com/in/elsmoal-
                </span>
              </a>
            </div>

            {/* Blinking cursor */}
            <div className="mt-8 flex items-center">
              <span className="text-teal-600 dark:text-neonCyan">elsmoal@system</span>
              <span className="text-gray-400">:</span>
              <span className="text-electricViolet">~</span>
              <span className="text-gray-400">$</span> 
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="w-2.5 h-5 bg-gray-900 dark:bg-ghostWhite ml-2 inline-block"
              />
            </div>
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
