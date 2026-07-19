'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FileText } from 'lucide-react';
import ThemeLangToggle from './ThemeLangToggle';

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('Nav');
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setIsScrolled(latest > 50);
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electricViolet to-neonCyan z-[60] origin-left"
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
            ? 'py-4 bg-white/90 dark:bg-void/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <div 
            onClick={() => scrollTo('hero')}
            className="cursor-pointer font-heading font-bold text-xl tracking-wider flex items-center gap-2 group"
          >
            <span className="text-electricViolet group-hover:text-neonCyan transition-colors">{'//'}</span>
            <span className="text-gray-900 dark:text-ghostWhite">{t('brand')}</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-1 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-full backdrop-blur-md shadow-sm dark:shadow-none">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="px-4 py-1.5 text-sm font-mono text-gray-700 dark:text-gray-400 hover:text-electricViolet dark:hover:text-neonCyan hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CV link + Toggles */}
          <div className="flex items-center gap-3">
            <Link
              href={`/${locale}/cv`}
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono border border-electricViolet/40 text-electricViolet hover:bg-electricViolet/10 transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              CV
            </Link>
            <ThemeLangToggle />
          </div>
        </div>
      </motion.nav>
    </>
  );
}
