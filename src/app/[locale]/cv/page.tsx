'use client';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, ExternalLink, Shield, Cpu, Server, Zap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-void text-gray-900 dark:text-ghostWhite font-sans">
      {/* ── Floating download bar ── */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-white/10 bg-white/90 dark:bg-void/90 backdrop-blur-md"
      >
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading font-bold text-lg flex items-center gap-2 text-gray-900 dark:text-ghostWhite hover:text-electricViolet dark:hover:text-neonCyan transition-colors"
          >
            <span className="text-electricViolet">{'//'}</span> Elsmoal
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono border border-electricViolet/40 text-electricViolet hover:bg-electricViolet/10 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <a
              href="/cv.pdf"
              download="Elsmoal_Ibrahim_CV.pdf"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono bg-gradient-to-r from-electricViolet to-neonCyan text-white hover:opacity-90 transition-opacity shadow-lg"
            >
              <Download className="w-3.5 h-3.5" />
              Download PDF
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── Main CV Content ── */}
      <div className="max-w-4xl mx-auto px-6 py-12 print:py-6 print:px-0">

        {/* Header */}
        <motion.header
          variants={stagger}
          initial="initial"
          animate="animate"
          className="mb-10 pb-8 border-b border-gray-200 dark:border-white/10 print:border-gray-300"
        >
          {/* Gradient accent line */}
          <div className="w-20 h-1 bg-gradient-to-r from-electricViolet to-neonCyan rounded-full mb-6 print:hidden" />

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-ghostWhite mb-1">
                ELSMOAL S. IBRAHIM
              </h1>
              <p className="font-mono text-electricViolet dark:text-neonCyan text-sm md:text-base font-medium tracking-wide">
                Chief Technology Officer (CTO) | Independent Backend &amp; SaaS Architect
              </p>
            </div>
            {/* License badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 self-start shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-green-600 dark:text-green-400">Official Abu Dhabi License</span>
            </div>
          </motion.div>

          {/* Contact row */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-x-6 gap-y-2 mt-5 font-mono text-sm text-gray-500 dark:text-gray-400">
            <a href="mailto:contact@elsmoal.com" className="flex items-center gap-1.5 hover:text-electricViolet dark:hover:text-neonCyan transition-colors">
              <Mail className="w-3.5 h-3.5" /> contact@elsmoal.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Al Ain, Abu Dhabi, UAE
            </span>
            <a href="https://ae.linkedin.com/in/elsmoal-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-electricViolet dark:hover:text-neonCyan transition-colors">
              <FaLinkedin className="w-3.5 h-3.5" /> linkedin.com/in/elsmoal-
            </a>
            <a href="https://github.com/Elsmoil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-electricViolet dark:hover:text-neonCyan transition-colors">
              <FaGithub className="w-3.5 h-3.5" /> github.com/Elsmoal
            </a>
          </motion.div>
        </motion.header>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="space-y-10"
        >

          {/* Professional Summary */}
          <motion.section variants={fadeUp}>
            <SectionHeading icon={<Cpu className="w-4 h-4" />} label="Professional Summary" />
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px]">
              Independent Full-Stack Software Engineer and Backend Architect holding an official Software Development
              Freelance License in Abu Dhabi. Specializing in building highly scalable, multi-tenant SaaS platforms,
              high-concurrency microservices, and secure cryptography systems (AES/ECC). Proven track record in
              orchestrating zero-downtime deployments, engineering robust monetization layers, and designing Zero-Trust
              backend architectures for enterprise-grade applications and AI integrations.
            </p>
          </motion.section>

          {/* Core Competencies */}
          <motion.section variants={fadeUp}>
            <SectionHeading icon={<Zap className="w-4 h-4" />} label="Core Competencies" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Backend & Databases',
                  items: ['Node.js', 'NestJS', 'Next.js', 'Python', 'PostgreSQL', 'Redis', 'Qdrant (Vector DBs)', 'Appwrite'],
                  color: 'neonCyan',
                },
                {
                  title: 'Architecture & Security',
                  items: ['Microservices', 'Multi-tenant SaaS', 'Zero-Trust Security', 'AES/ECC Cryptography', 'RBAC', 'JWT'],
                  color: 'electricViolet',
                },
                {
                  title: 'DevOps & Infrastructure',
                  items: ['Bare-metal Linux (Debian/Kali)', 'Distributed SSH Dev-Environments', 'Docker', 'Cloudflare (DNS, R2)', 'Vercel', 'Self-hosted n8n'],
                  color: 'neonCyan',
                },
                {
                  title: 'Integrations',
                  items: ['Tap Payments', 'Ziina', 'WhatsApp / Instagram / Messenger APIs', 'Custom AI Agents', 'WebSockets (Socket.io)'],
                  color: 'electricViolet',
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="p-4 rounded-xl border border-gray-200 dark:border-white/8 bg-gray-50 dark:bg-white/[0.02]"
                >
                  <h3 className={`font-mono text-xs font-semibold uppercase tracking-widest mb-3 ${cat.color === 'neonCyan' ? 'text-teal-600 dark:text-neonCyan' : 'text-electricViolet'}`}>
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Professional Experience */}
          <motion.section variants={fadeUp}>
            <SectionHeading icon={<Server className="w-4 h-4" />} label="Professional Experience" />
            <div className="space-y-8">

              <ExperienceBlock
                title="Chief Technology Officer (CTO)"
                company="Mulham AI"
                location="Remote"
                period="2024 – Present"
                bullets={[
                  'Architect the complete B2B SaaS infrastructure, establishing isolated deployment environments and securing internal workflows via Zero-Trust network access.',
                  'Design and implement API-driven AI integration patterns utilizing self-hosted vector databases (Qdrant) and Appwrite for scalable, cost-effective data state management.',
                  'Configure and manage enterprise IT infrastructure and communications, optimizing operational costs by routing secure workspace emails via Cloudflare and Zoho Workspace.',
                ]}
              />

              <ExperienceBlock
                title="Independent Software Engineer & Backend Architect"
                company="Freelance (Official Abu Dhabi License)"
                location="UAE"
                period="2024 – Present"
                bullets={[
                  'Engineer comprehensive B2B SaaS platforms from initial infrastructure setup to deploying secure, scalable microservices and decoupled monolithic structures.',
                  'Develop custom n8n self-hosted workflows to automate omnichannel business processes, significantly reducing manual operational overhead for clients.',
                  'Design secure database schemas (PostgreSQL) and implement robust authentication alongside automated financial transaction protocols utilizing regional payment gateways (Tap Payments, Ziina).',
                ]}
              />
            </div>
          </motion.section>

          {/* Key Engineering Deployments */}
          <motion.section variants={fadeUp}>
            <SectionHeading icon={<ExternalLink className="w-4 h-4" />} label="Key Engineering Deployments" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: 'CipherVault',
                  desc: 'Engineered a hybrid security system combining AES + ECC cryptography with steganography for multilayer data protection.',
                  stack: ['TypeScript', 'Python', 'Cryptography'],
                },
                {
                  name: 'Mithaq',
                  desc: 'Built a multi-tenant B2B SaaS platform utilizing a decoupled microfrontend architecture.',
                  stack: ['TypeScript', 'React', 'Python', 'Docker'],
                },
                {
                  name: 'Tanseeq',
                  desc: 'Developed a TypeScript-first application utilizing modern npm workflows and clean architectural patterns.',
                  stack: ['TypeScript', 'npm'],
                },
                {
                  name: 'LinkedPro',
                  desc: 'Created a robust Python-based automation tool to streamline repetitive professional workflows.',
                  stack: ['Python', 'Automation'],
                },
              ].map((project) => (
                <div
                  key={project.name}
                  className="p-4 rounded-xl border border-gray-200 dark:border-white/8 bg-gray-50 dark:bg-white/[0.02] group hover:border-electricViolet/40 dark:hover:border-neonCyan/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold text-gray-900 dark:text-ghostWhite">{project.name}</h3>
                    <a
                      href="https://github.com/Elsmoil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-electricViolet dark:hover:text-neonCyan transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded bg-electricViolet/10 dark:bg-neonCyan/10 text-electricViolet dark:text-neonCyan border border-electricViolet/20 dark:border-neonCyan/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Credentials & Education */}
          <motion.section variants={fadeUp}>
            <SectionHeading icon={<Shield className="w-4 h-4" />} label="Credentials & Education" />
            <div className="space-y-3">
              {[
                {
                  title: 'Official Software Development Freelance License',
                  org: 'Abu Dhabi, UAE',
                  type: 'Government License',
                  icon: '🔐',
                },
                {
                  title: 'Software Engineering Graduate',
                  org: 'ALX',
                  type: 'Degree',
                  icon: '🎓',
                },
                {
                  title: 'AI Career Essentials Certification',
                  org: 'ALX',
                  type: 'Certificate',
                  icon: '🤖',
                },
              ].map((cred) => (
                <div
                  key={cred.title}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-white/8 bg-gray-50 dark:bg-white/[0.02]"
                >
                  <span className="text-2xl">{cred.icon}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-ghostWhite text-sm">{cred.title}</p>
                    <p className="font-mono text-xs text-gray-500 dark:text-gray-400">{cred.org}</p>
                  </div>
                  <span className="hidden sm:block font-mono text-xs px-2.5 py-1 rounded-full border border-electricViolet/30 text-electricViolet bg-electricViolet/5">
                    {cred.type}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

        </motion.div>

        {/* Footer */}
        <motion.footer
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="mt-14 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 print:hidden"
        >
          <p className="font-mono text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Elsmoal S. Ibrahim · All rights reserved.
          </p>
          <a
            href="/cv.pdf"
            download="Elsmoal_Ibrahim_CV.pdf"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-mono bg-gradient-to-r from-electricViolet to-neonCyan text-white hover:opacity-90 transition-opacity shadow-lg"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF
          </a>
        </motion.footer>
      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .sticky { display: none !important; }
        }
      `}</style>
    </div>
  );
}

/* ── Sub-components ── */

function SectionHeading({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="text-electricViolet dark:text-neonCyan">{icon}</span>
      <h2 className="font-heading font-bold text-xs uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">{label}</h2>
      <div className="flex-1 h-px bg-gray-200 dark:bg-white/8" />
    </div>
  );
}

function ExperienceBlock({
  title,
  company,
  location,
  period,
  bullets,
}: {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="relative pl-5 border-l-2 border-electricViolet/30 dark:border-neonCyan/20">
      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-electricViolet dark:bg-neonCyan" />
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="font-heading font-semibold text-gray-900 dark:text-ghostWhite">{title}</h3>
          <p className="font-mono text-sm text-electricViolet dark:text-neonCyan">{company}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-mono text-xs text-gray-500 dark:text-gray-400">{period}</p>
          <p className="font-mono text-xs text-gray-400 dark:text-gray-600">{location}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed">
            <span className="text-electricViolet dark:text-neonCyan shrink-0 mt-0.5">›</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
