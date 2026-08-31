'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub, FaPython, FaDocker } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ProjectModal, { projectDetails, type ProjectDetail } from '../ui/ProjectModal';

// --- Static project data ---
const projects = [
  {
    key: 'ciphervault',
    title: 'CipherVault',
    github: undefined,
    liveUrl: undefined,
    isNDA: true,
    techs: ['AES-256 + ECC', 'ML Pixel Ranking', 'LSB Steganography', 'PSNR/SSIM Metrics'],
    accentFrom: 'from-brass/15',
    accentTo: 'to-brass/5',
    stackBadges: [
      { label: 'PY', color: 'text-amber-700 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
      { label: 'TS', color: 'text-blue-700 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
      { label: 'AES', color: 'text-brass-light dark:text-brass bg-brass/10 border-brass/20' },
    ],
  },
  {
    key: 'mulhamai',
    title: 'Mulham AI',
    github: undefined,
    liveUrl: undefined,
    isNDA: true,
    techs: ['React + Vite', 'Express.js', 'PostgreSQL', 'OpenAI GPT-4'],
    accentFrom: 'from-blue-500/15',
    accentTo: 'to-brass/10',
    stackBadges: [
      { label: 'TS', color: 'text-blue-700 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
      { label: 'AI', color: 'text-brass-light dark:text-brass bg-brass/10 border-brass/20' },
      { label: 'PG', color: 'text-sky-700 dark:text-sky-400 bg-sky-500/10 border-sky-500/20' },
    ],
  },
  {
    key: 'tanseeq',
    title: 'Tanseeq',
    github: 'https://github.com/methaqapp/tanseeq-app',
    liveUrl: 'https://tanseeq-app.vercel.app',
    isNDA: false,
    techs: ['Next.js App Router', 'TypeScript', 'Appwrite', 'Firebase'],
    accentFrom: 'from-green-500/15',
    accentTo: 'to-blue-500/10',
    stackBadges: [
      { label: 'TS', color: 'text-blue-700 dark:text-blue-400 bg-blue-500/10 border-blue-500/20' },
      { label: 'AW', color: 'text-pink-700 dark:text-pink-400 bg-pink-500/10 border-pink-500/20' },
      { label: 'FB', color: 'text-orange-700 dark:text-orange-400 bg-orange-500/10 border-orange-500/20' },
    ],
  },
  {
    key: 'linkedpro',
    title: 'LinkedPro',
    github: 'https://github.com/Elsmoil/backend',
    liveUrl: undefined,
    isNDA: true,
    techs: ['FastAPI', 'Python', 'MongoDB', 'Playwright', 'Multi-Agent AI'],
    accentFrom: 'from-blue-600/15',
    accentTo: 'to-brass/10',
    stackBadges: [
      { label: 'PY', color: 'text-amber-700 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
      { label: 'AI', color: 'text-brass-light dark:text-brass bg-brass/10 border-brass/20' },
      { label: 'MDB', color: 'text-green-700 dark:text-green-400 bg-green-500/10 border-green-500/20' },
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
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brass/10 rounded-sm blur-2xl" />
    </div>
  );
}

export default function FeaturedMissions() {
  const t = useTranslations('FeaturedMissions');
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <section id="featured-missions" className="relative w-full py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center justify-center z-10">
      <div className="max-w-6xl w-full">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-start"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-ghostWhite mb-4">
            <span className="text-brass-light dark:text-brass">04.</span> {t('title')}
          </h2>
          <p className="font-mono text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.key}
              project={project}
              t={t}
              onOpenDetail={() => {
                const detail = projectDetails.find(d => d.key === project.key);
                if (detail) setSelectedProject(detail);
              }}
            />
          ))}
        </motion.div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

function ProjectCard({
  project,
  t,
  onOpenDetail,
}: {
  project: typeof projects[0] & { isNDA?: boolean };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  onOpenDetail: () => void;
}) {
  const descKey = `${project.key}_desc` as const;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        y: -10,
        boxShadow: "0px 15px 35px rgba(201, 138, 75, 0.1)",
        borderColor: "rgba(201, 138, 75, 0.3)"
      }}
      onClick={onOpenDetail}
      className="glass-panel p-6 md:p-8 flex flex-col transition-all duration-300 h-full group relative overflow-hidden cursor-pointer"
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brass/0 to-brass/0 group-hover:from-brass/5 group-hover:to-transparent transition-all duration-500 -z-10" />

      {/* Stack visual banner */}
      <StackBanner project={project} />

      {/* Header row: title + links */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <h3 className="font-heading font-bold text-gray-900 dark:text-ghostWhite group-hover:text-brass transition-colors text-2xl">
            {project.title}
          </h3>
          {project.isNDA && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm border border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/5 shrink-0">
              NDA
            </span>
          )}
        </div>
        {!project.isNDA && (
          <div className="flex gap-3 ml-4 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.title} GitHub repository`}
                className="text-gray-400 hover:text-brass transition-colors duration-200"
              >
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`${project.title} live demo`}
                className="text-gray-400 hover:text-brass transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {t(descKey)}
      </p>

      {/* Tech tags */}
      <ul className="flex flex-wrap gap-2 mt-auto">
        {project.techs.map((tech, i) => (
          <li
            key={i}
            className="font-mono text-xs text-brass-light dark:text-brass bg-brass/10 px-3 py-1 rounded-md border border-brass/20"
          >
            {tech}
          </li>
        ))}
      </ul>
      
      {/* View Details Link */}
      <div className="mt-4 font-mono text-xs text-brass-light dark:text-brass opacity-60 group-hover:opacity-100 transition-opacity">
        View details →
      </div>
    </motion.div>
  );
}
