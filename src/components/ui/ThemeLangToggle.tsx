'use client';

import { useTheme } from 'next-themes';
import { useLocale } from 'next-intl';
import { Moon, Sun, Languages } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeLangToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const locale = useLocale();

  useEffect(() => setMounted(true), []);

  const toggleLang = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${nextLocale}`);
    window.location.href = newPath || `/${nextLocale}`;
  };

  if (!mounted) return null;

  return (
    <div className="flex gap-3">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="glass-panel p-2.5 text-gray-400 hover:text-neonCyan transition-colors rounded-full bg-[#050505]/80"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
      
      <button
        onClick={toggleLang}
        className="glass-panel px-3 py-2 flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-electricViolet transition-colors rounded-full bg-[#050505]/80"
      >
        <Languages className="w-3.5 h-3.5" />
        {locale === 'en' ? 'عربي' : 'EN'}
      </button>
    </div>
  );
}
