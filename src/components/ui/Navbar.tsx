'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FileText, Menu, X } from 'lucide-react';
import ThemeLangToggle from './ThemeLangToggle';

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations('Nav');
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileOpen(false);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navItems = [
    { label: t('hero'), id: 'hero' },
    { label: t('engine'), id: 'engine-room' },
    { label: t('services'), id: 'services' },
    { label: t('missions'), id: 'featured-missions' },
    { label: t('philosophy'), id: 'philosophy' },
    { label: t('contact'), id: 'contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-brass z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-white/90 dark:bg-void/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
            : 'py-4 bg-transparent'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
          {/* Brand */}
          <div 
            onClick={() => scrollTo('hero')}
            className="cursor-pointer font-heading font-bold text-xl tracking-wider flex items-center gap-2 group"
          >
            <span className="text-brass dark:text-brass group-hover:text-brass-light transition-colors">{'//'}</span>
            <span className="text-gray-900 dark:text-ghostWhite">{t('brand')}</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className={`flex items-center gap-1 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-md backdrop-blur-md shadow-sm dark:shadow-none ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-4 py-1.5 text-sm font-mono text-gray-700 dark:text-gray-400 hover:text-brass-light dark:hover:text-brass hover:bg-black/5 dark:hover:bg-white/5 rounded-sm transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CV link + Toggles + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href={`/${locale}/cv`}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-mono border border-brass/40 text-brass-light dark:text-brass hover:bg-brass/10 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              CV
            </Link>
            <ThemeLangToggle />
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden p-1.5 text-gray-700 dark:text-gray-300 hover:text-brass transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-gray-200 dark:border-white/10 bg-white/95 dark:bg-void/95 backdrop-blur-md"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left w-full px-3 py-2.5 text-sm font-mono text-gray-700 dark:text-gray-300 hover:text-brass-light dark:hover:text-brass hover:bg-black/5 dark:hover:bg-white/5 rounded-sm transition-all"
                  >
                    <span className="text-brass mr-2">›</span>{item.label}
                  </button>
                ))}
                <Link
                  href={`/${locale}/cv`}
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center gap-2 px-3 py-2.5 text-sm font-mono border border-brass/30 text-brass-light dark:text-brass rounded-sm hover:bg-brass/10 transition-all w-fit"
                >
                  <FileText className="w-3.5 h-3.5" />
                  CV
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

