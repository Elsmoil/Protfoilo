'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ProjectDetail {
  key: string;
  title: string;
  isNDA?: boolean;
  liveUrl?: string;
  problem: string;
  architecture: string[];
  decisions: { title: string; reason: string }[];
  challenges: { challenge: string; solution: string }[];
  stack: string[];
  outcome: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    key: 'ciphervault',
    title: 'CipherVault',
    isNDA: true,
    problem:
      'A cybersecurity master\'s student needed a steganography system that goes beyond basic LSB hiding. The requirement: encrypt a secret message, protect it with error-correction, intelligently select which pixels to use (not random), and embed it — all without leaving a detectable statistical fingerprint.',
    architecture: [
      'Next.js frontend → multipart POST → FastAPI backend',
      'FastAPI: AES-256 encrypt → Reed-Solomon ECC encode → ML pixel selection → LSB embed',
      'Response: stego PNG + quality headers (PSNR, SSIM, BER, SHA-256)',
      'Extraction: reverse the pipeline using passphrase only — no sidecar file needed',
    ],
    decisions: [
      {
        title: 'AES-256 + ECC before embedding',
        reason:
          'Raw LSB is trivially detectable. Encrypting first means even if the stego image is analysed, the extracted bits are meaningless without the passphrase.',
      },
      {
        title: 'ML pixel ranking (K-Means + Canny)',
        reason:
          'Embedding in high-frequency edge regions (detected by Canny) causes less perceptual distortion than embedding in flat areas. K-Means clusters the image spatially to distribute bits across diverse regions.',
      },
      {
        title: 'Reed-Solomon ECC',
        reason:
          'JPEG compression and minor image edits flip bits. ECC adds redundancy so the message survives small-scale corruption without needing the original cover image.',
      },
      {
        title: 'Passphrase-only extraction',
        reason:
          'No sidecar metadata file — the embedding map is deterministically derived from the passphrase itself via PRNG seeding, so the receiver needs only the stego image and the passphrase.',
      },
    ],
    challenges: [
      {
        challenge: 'Maintaining high PSNR while embedding large payloads',
        solution:
          'Used ML-ranked pixels in edge-dense regions where the human eye is less sensitive to change, keeping PSNR above 48dB on standard test images.',
      },
      {
        challenge: 'Wrong passphrase must fail silently',
        solution:
          'AES-256 decryption produces garbage on wrong key; SHA-256 hash verification then explicitly rejects the payload, preventing false positives.',
      },
    ],
    stack: ['Python 3.10', 'FastAPI', 'OpenCV', 'scikit-learn', 'PyCryptodome', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel + Heroku'],
    outcome:
      'Delivered a working academic demo used in the student\'s cybersecurity thesis. The system consistently scores PSNR > 48dB, SSIM > 0.99, and BER < 0.001 on standard benchmark images.',
  },
  {
    key: 'mulhamai',
    title: 'Mulham AI',
    isNDA: true,
    problem:
      'Arabic content creators had no native AI tool to turn a rough product idea into a complete, sellable digital product. Existing platforms are English-first, ignore RTL typography, and produce generic output — not culturally relevant Arabic content.',
    architecture: [
      'React + Vite frontend (RTL, Arabic-first UI) → Express.js API',
      'PostgreSQL + Drizzle ORM for all user, product, and order data',
      'OpenAI GPT-4o for product generation (8-stage Mulhim Brain pipeline)',
      'Tap Payments (redirect-based) for checkout → webhook → commission accounting',
      'Drizzle ledger system: sale → platform_commission → payment_fee → seller_net',
    ],
    decisions: [
      {
        title: '8-step product wizard instead of one-shot generation',
        reason:
          'One-shot AI generation produces bloated output. Breaking it into Idea → Assets → Consent → Generation → Review → Approval → Pricing → Publish lets the seller validate at each stage and keeps AI output focused.',
      },
      {
        title: 'Mulhim Brain: multi-stage AI pipeline',
        reason:
          'Research → Structured Insights → Outline → Content → Improve → Build Product → Sales Page → Marketing Plan. Each stage feeds the next, producing 2000+ word content grounded in market research rather than hallucination.',
      },
      {
        title: 'PostgreSQL ledger entries over simple balance fields',
        reason:
          'Every financial event (sale, commission, payment fee, seller net) is an immutable ledger entry. This gives a full audit trail, supports disputes, and lets the admin see exactly where every riyal went.',
      },
      {
        title: 'AI governance layer',
        reason:
          'Pre-generation and post-generation consent gates, AI-assisted product badges, audit logging of all AI calls. Required for legal compliance and seller accountability in the Saudi/GCC market.',
      },
    ],
    challenges: [
      {
        challenge: 'Arabic RTL + AI-generated content in a React SPA',
        solution:
          'Used CSS dir="rtl" at the document level with selective dir="ltr" overrides for code blocks and API responses. TanStack Query handles server state so RTL layout never flickers on re-fetch.',
      },
      {
        challenge: 'Tap Payments webhook race condition',
        solution:
          'Webhook handler runs inside a DB transaction: verify order → calculate commission → create ledger entries → update wallet. Full rollback on any step failure, so wallets are never partially updated.',
      },
    ],
    stack: ['React 18', 'TypeScript', 'Vite', 'TanStack Query', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'OpenAI GPT-4o', 'Tap Payments', 'Radix UI', 'Tailwind CSS'],
    outcome:
      'Full-featured Arabic SaaS with seller onboarding, AI product generation, payments, communities, moderation, and an admin analytics panel — architected for production scale from day one.',
  },
  {
    key: 'tanseeq',
    title: 'Tanseeq',
    isNDA: false,
    liveUrl: 'https://tanseeq-app.vercel.app',
    problem:
      'A services platform needed a clean, mobile-first web app: users browse services, create profiles, submit requests, and admins manage everything — with a PWA install prompt for mobile retention.',
    architecture: [
      'Next.js App Router: pages in app/ directory with server + client components',
      'app/api/* route handlers for auth (login/logout) and profile (create/get)',
      'Appwrite for user authentication and database',
      'Firebase as secondary integration layer',
      'Vercel deployment — automatic preview deployments per PR',
    ],
    decisions: [
      {
        title: 'Next.js App Router over Pages Router',
        reason:
          'App Router enables React Server Components for data-heavy pages (explore, services listings) reducing client bundle size, and nested layouts keep the shared TopHeader/BottomNav DRY across all routes.',
      },
      {
        title: 'Appwrite for auth and DB',
        reason:
          'Appwrite provides a self-hostable backend with typed SDK, reducing vendor lock-in versus Firebase alone. Firebase was retained for real-time features where Appwrite\'s real-time capabilities were insufficient.',
      },
      {
        title: 'PWA InstallAppModal',
        reason:
          'Mobile users on the target market (UAE/GCC) heavily use mobile browsers. The install prompt increases session retention by surfacing the app-install flow at the right moment.',
      },
    ],
    challenges: [
      {
        challenge: 'Server and client component boundary in App Router',
        solution:
          'Data-fetching components (explore listings, profile fetch) are server components. Interactive elements (BottomNav, InstallAppModal, auth forms) are client components with "use client" — kept the boundary explicit from the start.',
      },
    ],
    stack: ['Next.js 14', 'TypeScript', 'Appwrite', 'Firebase', 'Tailwind CSS', 'Vercel'],
    outcome:
      'Live production app deployed on Vercel. Clean mobile-first UI with PWA support, user auth, profile management, and an admin dashboard.',
  },
  {
    key: 'linkedpro',
    title: 'LinkedPro',
    isNDA: true,
    problem:
      'Professionals waste hours on LinkedIn doing repetitive tasks — writing posts, applying to jobs, sending connection requests. The goal: a platform where AI agents handle the mechanical work while the user stays in control of strategy.',
    architecture: [
      'FastAPI backend (Python 3.11) — async, high-throughput API',
      'MongoDB + Motor (async driver) for user data, job applications, content history',
      'Multi-agent AI system: Content Creator, Recruiter, Analyzer, Strategist agents',
      'Playwright for browser automation (headless Chromium)',
      'Nginx reverse proxy + Docker Compose + Let\'s Encrypt SSL',
      'Notification layer: Email (SMTP), Discord webhook, Slack webhook',
    ],
    decisions: [
      {
        title: 'Multi-agent architecture over a single AI call',
        reason:
          'A single GPT call can\'t reliably handle content creation, job matching, AND analytics simultaneously. Specialized agents (Content Creator, Recruiter Agent, Strategist) each own a domain, enabling parallel execution and independent quality tuning per task.',
      },
      {
        title: 'Playwright over LinkedIn API',
        reason:
          'LinkedIn\'s official API is heavily restricted. Playwright with randomized delays (2-5s), headless Chromium, and session-cookie management mimics human behavior patterns, reducing detection risk.',
      },
      {
        title: 'Multi-model AI support with automatic fallback',
        reason:
          'OpenAI, Anthropic Claude, and OpenRouter are all supported. If one provider hits rate limits or goes down, the orchestrator automatically falls back to the next — zero downtime for the user.',
      },
      {
        title: 'Docker Compose + Nginx + Watchtower',
        reason:
          'Self-contained deployment: app, MongoDB, Nginx, and Certbot in one compose file. Watchtower auto-updates containers daily so the production server always runs the latest build without manual SSH.',
      },
    ],
    challenges: [
      {
        challenge: 'LinkedIn bot detection',
        solution:
          'Randomized action delays (LINKEDIN_DELAY_MIN/MAX), session cookie reuse to avoid repeated logins, headless mode with realistic viewport sizes, and daily action limits (MAX_DAILY_APPLICATIONS) to stay within human-plausible usage patterns.',
      },
      {
        challenge: 'MongoDB analytics indexes at scale',
        solution:
          'Compound indexes on (user_id ASC, timestamp DESC) for activities and profiles tables. Migration script (migrate_analytics_indexes.py) is idempotent — safe to run multiple times, with a separate check script returning exit codes for CI health checks.',
      },
    ],
    stack: ['Python 3.11', 'FastAPI', 'MongoDB', 'Motor', 'Playwright', 'OpenAI GPT-4o', 'Anthropic Claude', 'Docker', 'Nginx', 'JWT', 'bcrypt'],
    outcome:
      'Production-ready platform with full Docker deployment, SSL, multi-agent AI orchestration, and automated LinkedIn workflows. Architected for self-hosted deployment with zero-downtime auto-updates.',
  },
];

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!mounted) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
        />
      )}
      
      {project && (
        <div className="fixed inset-0 z-[101] flex flex-col items-center justify-center p-4 md:py-10 pointer-events-none">
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-paper dark:bg-void border border-black/10 dark:border-white/10 rounded-md overflow-hidden shadow-2xl pointer-events-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 dark:border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <h2 className="font-heading text-xl font-bold text-gray-900 dark:text-ghostWhite">
                  {project.title}
                </h2>
                {project.isNDA && (
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm border border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/5">
                    NDA
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-brass-light dark:text-brass hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Live <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-sm hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 min-h-0 px-6 py-6 space-y-8">

              {/* Problem */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-brass-light dark:text-brass mb-3">
                  The Problem
                </h3>
                {project.isNDA && (
                  <p className="font-mono text-xs text-amber-600 dark:text-amber-400 border border-amber-500/20 bg-amber-500/5 rounded-sm p-3 mb-4 italic">
                    [CONFIDENTIAL] Client name and proprietary algorithms have been redacted. The following details are permitted for disclosure.
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Architecture */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-brass-light dark:text-brass mb-3">
                  Architecture
                </h3>
                <ul className="space-y-2">
                  {project.architecture.map((line, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      <span className="text-brass-light dark:text-brass mr-2 mt-1">»</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Technical Decisions */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-brass-light dark:text-brass mb-3">
                  Key Technical Decisions
                </h3>
                <div className="space-y-4">
                  {project.decisions.map((d, i) => (
                    <div key={i} className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-md p-4">
                      <p className="font-mono text-sm font-bold text-gray-900 dark:text-ghostWhite mb-2">
                        {d.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {d.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-brass-light dark:text-brass mb-3">
                  Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="border border-black/10 dark:border-white/10 rounded-md p-4">
                      <p className="text-sm font-bold text-gray-900 dark:text-ghostWhite mb-2 flex items-start gap-2">
                        <span className="text-red-500 shrink-0">⚠</span> {c.challenge}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-green-500 shrink-0">✓</span> {c.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-brass-light dark:text-brass mb-3">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-sm border border-black/5 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-brass-light dark:text-brass mb-3">
                  Outcome
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-l-2 border-brass/30 pl-4 italic">
                  {project.outcome}
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    modalRoot
  );
}
