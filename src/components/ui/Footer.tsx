'use client';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const navLinks = [
  { label: 'Home', id: 'hero' },
  { label: 'Skills', id: 'engine-room' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'featured-missions' },
  { label: 'About', id: 'philosophy' },
  { label: 'Contact', id: 'contact' },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Elsmoil',
    icon: <FaGithub className="w-5 h-5" />,
    hoverColor: 'hover:text-neonCyan',
  },
  {
    label: 'LinkedIn',
    href: 'https://ae.linkedin.com/in/elsmoal-',
    icon: <FaLinkedin className="w-5 h-5" />,
    hoverColor: 'hover:text-[#0A66C2]',
  },
  {
    label: 'Email',
    href: 'mailto:contact@elsmoal.com',
    icon: <Mail className="w-5 h-5" />,
    hoverColor: 'hover:text-electricViolet',
  },
];

export default function Footer() {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();
  const params = useParams();
  const locale = (params?.locale as string) ?? 'en';

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative w-full z-10 border-t border-black/10 dark:border-white/5 bg-gray-50/80 dark:bg-white/[0.02] backdrop-blur-sm">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-electricViolet/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-heading font-bold text-2xl flex items-center gap-2 mb-3">
              <span className="text-electricViolet">{'//'}</span>
              <span className="text-gray-900 dark:text-ghostWhite">Elsmoal</span>
            </div>
            <p className="font-mono text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              {t('brand_tagline')}
            </p>
            {/* License badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-green-400">{t('license_short')}</span>
            </div>
          </motion.div>

          {/* Nav links column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              {t('nav_heading')}
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="font-mono text-sm text-gray-600 dark:text-gray-400 hover:text-neonCyan dark:hover:text-neonCyan transition-colors duration-200 text-left"
                  >
                    <span className="text-electricViolet mr-1">›</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social + availability column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              {t('connect_heading')}
            </h4>
            <ul className="flex flex-col gap-3 mb-6">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 font-mono text-sm text-gray-500 dark:text-gray-400 ${s.hoverColor} transition-colors duration-200`}
                  >
                    {s.icon}
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            {/* Availability */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neonCyan/20 bg-neonCyan/5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="font-mono text-xs text-green-400">{t('available')}</span>
            </div>
            {/* CV Download */}
            <Link
              href={`/${locale}/cv`}
              className="mt-4 flex items-center gap-2 font-mono text-sm text-gray-500 dark:text-gray-400 hover:text-electricViolet dark:hover:text-neonCyan transition-colors duration-200"
            >
              <FileText className="w-4 h-4" />
              <span>View / Download CV</span>
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/5 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-400 dark:text-gray-500">
          <p>
            © {year}{' '}
            <span className="text-gray-600 dark:text-gray-300">Elsmoal S. Ibrahim</span>.{' '}
            {t('rights')}
          </p>
          <p className="text-gray-400 dark:text-gray-600">
            {t('built_with')}{' '}
            <span className="text-neonCyan">Next.js</span> ·{' '}
            <span className="text-electricViolet">TypeScript</span> ·{' '}
            <span className="text-neonCyan">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
