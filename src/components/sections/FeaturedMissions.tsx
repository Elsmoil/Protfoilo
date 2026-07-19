'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub, FaPython, FaDocker } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { useTranslations } from 'next-intl';

// --- Static project data ---
const projects = [
  {
    key: 'ciphervault',
    title: 'CipherVault',
    github: 'https://github.com/Elsmoal/CipherVault',
    liveUrl: undefined,
    techs: ['TypeScript (71%)', 'Python (27%)', 'AES/ECC Cryptography', 'Steganography'],
    // Visual accent: purple for crypto
    accentFrom: 'from-electricViolet/30',
    accentTo: 'to-neonCyan/20',
    stackBadges: [
      { label: 'TS', color: 'text-blue-700 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
      { label: 'PY', color: 'text-amber-700 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
      { label: 'AES/ECC', color: 'text-purple-700 dark:text-purple-400 bg-purple-500/10 border-purple-500/20' },
    ],
  },
  {
    key: 'tanseeq',
    title: 'Tanseeq',
    github: 'https://github.com/Elsmoal/Tanseeq',
    liveUrl: undefined,
    techs: ['TypeScript (99%)', 'Modern npm Workflows', 'Clean Architecture'],
    accentFrom: 'from-blue-600/20',
    accentTo: 'to-electricViolet/10',
    stackBadges: [
      { label: 'TS', color: 'text-blue-700 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
      { label: 'npm', color: 'text-red-700 dark:text-red-400 bg-red-500/10 border-red-500/20' },
    ],
  },
  {
    key: 'mulhamai',
    title: 'Mulham AI',
    github: 'https://github.com/Elsmoal/Mulham-AI',
    liveUrl: undefined,
    techs: ['TypeScript (99%)', 'AI API Integrations', 'High-availability Deployments'],
    accentFrom: 'from-neonCyan/20',
    accentTo: 'to-electricViolet/10',
    stackBadges: [
      { label: 'TS', color: 'text-blue-700 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
      { label: 'AI', color: 'text-teal-700 dark:text-neonCyan bg-teal-50 dark:bg-neonCyan/10 border-teal-300 dark:border-neonCyan/20' },
    ],
  },
  {
    key: 'mithaq',
    title: 'Mithaq',
    github: 'https://github.com/Elsmoal/Mithaq',
    liveUrl: undefined,
    techs: ['TypeScript', 'Python (95%)', 'Shell Scripting', 'Docker', 'HTML/CSS'],
    accentFrom: 'from-green-500/20',
    accentTo: 'to-blue-500/10',
    stackBadges: [
      { label: 'PY', color: 'text-amber-700 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
      { label: 'TS', color: 'text-blue-700 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
      { label: '🐳', color: 'text-sky-700 dark:text-sky-400 bg-sky-500/10 border-sky-500/20' },
      { label: 'SH', color: 'text-gray-700 dark:text-gray-300 bg-gray-500/10 border-gray-500/20' },
    ],
  },
  {
    key: 'linkedpro',
    title: 'LinkedPro',
    github: 'https://github.com/Elsmoal/LinkedPro',
    liveUrl: undefined,
    techs: ['Python (100%)', 'Browser/API Automation', 'LinkedIn Workflows'],
    accentFrom: 'from-yellow-500/20',
    accentTo: 'to-orange-500/10',
    stackBadges: [
      { label: 'PY', color: 'text-amber-700 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
      { label: 'AUTO', color: 'text-orange-700 dark:text-orange-400 bg-orange-500/10 border-orange-500/20' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" as const } 
  },
};

// Renders the stack-visual banner at the top of each card
function StackBanner({ project }: { project: typeof projects[0] }) {
  return (
    <div className={`w-full h-36 mb-6 rounded-lg overflow-hidden bg-gradient-to-tr ${project.accentFrom} ${project.accentTo} border border-black/10 dark:border-white/5 relative`}>
      {/* Grid dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      {/* Stack badge cluster */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 flex-wrap px-4">
        {project.stackBadges.map((badge, i) => (
          <span
            key={i}
            className={`font-mono font-bold text-sm px-3 py-1.5 rounded-md border ${badge.color} backdrop-blur-sm`}
          >
            {badge.label}
          </span>
        ))}
      </div>
      {/* Glowing corner accent */}
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-neonCyan/10 rounded-full blur-2xl" />
    </div>
  );
}

export default function FeaturedMissions() {
  const t = useTranslations('FeaturedMissions');

  return (
    <section id="featured-missions" className="relative w-full min-h-screen py-24 px-6 flex flex-col items-center justify-center z-10">
      <div className="max-w-6xl w-full">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-ghostWhite mb-4">
            <span className="text-electricViolet">04.</span> {t('title')}
          </h2>
          <p className="font-mono text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl">
            {t('comment')}
            <br />
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Projects grid — first 2 large, then 3 smaller */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.key} project={project} t={t} />
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.slice(2).map((project) => (
            <ProjectCard key={project.key} project={project} t={t} compact />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  t,
  compact = false,
}: {
  project: typeof projects[0];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  compact?: boolean;
}) {
  const descKey = `${project.key}_desc` as const;
  const roleKey = `${project.key}_role` as const;
  const roleVal = t.has?.(roleKey) ? t(roleKey) : null;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -10,
        boxShadow: "0px 15px 35px rgba(0, 255, 255, 0.1)",
        borderColor: "rgba(0, 255, 255, 0.3)"
      }}
      className="glass-panel p-6 md:p-8 flex flex-col transition-all duration-300 h-full group relative overflow-hidden"
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neonCyan/0 to-neonCyan/0 group-hover:from-neonCyan/5 group-hover:to-transparent transition-all duration-500 -z-10" />

      {/* Stack visual banner */}
      <StackBanner project={project} />

      {/* Header row: title + links */}
      <div className="flex justify-between items-start mb-3">
        <h3 className={`font-heading font-bold text-gray-900 dark:text-ghostWhite group-hover:text-neonCyan transition-colors ${compact ? 'text-xl' : 'text-2xl'}`}>
          {project.title}
        </h3>
        <div className="flex gap-3 ml-4 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-gray-400 hover:text-neonCyan transition-colors duration-200"
            >
              <FaGithub className="w-5 h-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-gray-400 hover:text-neonCyan transition-colors duration-200"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Role badge (e.g. CTO) */}
      {roleVal && (
        <span className="inline-block mb-3 font-mono text-xs text-electricViolet bg-electricViolet/10 border border-electricViolet/20 px-2 py-0.5 rounded-full">
          {roleVal}
        </span>
      )}

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {t(descKey)}
      </p>

      {/* Tech tags */}
      <ul className="flex flex-wrap gap-2 mt-auto">
        {project.techs.map((tech, i) => (
          <li
            key={i}
            className="font-mono text-xs text-electricViolet bg-electricViolet/10 px-3 py-1 rounded-full border border-electricViolet/20"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
