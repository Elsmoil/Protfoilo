'use client';
import { Download, Mail, MapPin, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function CVPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans" dir="ltr" lang="en">

      {/* ── Toolbar (hidden on print) ── */}
      <div className="print:hidden sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="font-mono text-sm text-gray-500 hover:text-gray-900 transition-colors">
            ← Back
          </Link>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-1.5 rounded text-sm font-mono border border-gray-300 text-gray-700 hover:border-gray-500 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Save as PDF
          </button>
        </div>
      </div>

      {/* ── CV Document ── */}
      <div className="max-w-3xl mx-auto px-8 py-12 print:py-0 print:px-0 print:max-w-none">

        {/* Header */}
        <header className="mb-8 pb-6 border-b-2 border-gray-900 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">
            Elsmoal S. Ibrahim
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Independent Backend Architect · Part-time CTO @ Mulham AI · Al Ain, UAE
          </p>

          {/* Contact row */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-gray-600 font-mono">
            <a href="mailto:contact@elsmoal.me" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Mail className="w-3 h-3" /> contact@elsmoal.me
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Al Ain, Abu Dhabi, UAE
            </span>
            <a href="https://ae.linkedin.com/in/elsmoal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <FaLinkedin className="w-3 h-3" /> linkedin.com/in/elsmoal
            </a>
            <a href="https://github.com/Elsmoil" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <FaGithub className="w-3 h-3" /> github.com/Elsmoil
            </a>
            <a href="https://elsmoal.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Globe className="w-3 h-3" /> elsmoal.me
            </a>
          </div>
        </header>

        <div className="space-y-7">

          {/* Summary */}
          <section>
            <SectionHeading label="Summary" />
            <p className="text-sm text-gray-700 leading-relaxed">
              Backend-focused software engineer and systems architect with an official Software Development
              Freelance License issued in Abu Dhabi. I build production-ready backend systems, multi-tenant
              SaaS platforms, and AI-driven automation pipelines. Currently serving as part-time CTO at
              Mulham AI while running independent contracts for clients in the UAE and GCC. I write
              maintainable code, ship real products, and take security seriously from day one.
            </p>
          </section>

          {/* Skills */}
          <section>
            <SectionHeading label="Technical Skills" />
            <div className="space-y-1.5 text-sm text-gray-700">
              <SkillRow label="Backend & Databases"    value="Node.js · NestJS · Express · Python · FastAPI · PostgreSQL · Redis · Qdrant · MongoDB · Appwrite" />
              <SkillRow label="Frontend"               value="Next.js · React · TypeScript · Tailwind CSS" />
              <SkillRow label="Architecture"           value="Microservices · Multi-tenant SaaS · REST APIs · JWT · Zero-Trust · RBAC · AES/ECC" />
              <SkillRow label="DevOps & Infra"         value="Docker · Debian Linux · Cloudflare · Vercel · Nginx · Shell scripting · SSH" />
              <SkillRow label="Automation & AI"        value="n8n (self-hosted) · Playwright · OpenAI API · Anthropic API · AI workflow pipelines" />
              <SkillRow label="Integrations"           value="Tap Payments · Ziina · WhatsApp/Instagram APIs · Socket.io · Drizzle ORM" />
            </div>
          </section>

          {/* Experience */}
          <section>
            <SectionHeading label="Experience" />
            <div className="space-y-6">

              <ExperienceBlock
                title="Part-time CTO"
                company="Mulham AI"
                location="Al Ain, UAE · 20 hrs/week"
                period="Mar 2026 – Present"
                bullets={[
                  'Lead the technical direction and full-stack architecture of Mulham AI — an Arabic-first SaaS platform for AI-generated digital products.',
                  'Built an 8-stage AI product generation pipeline (Mulhim Brain) using OpenAI GPT-4o, with structured content, market research, and marketing plan outputs.',
                  'Designed the accounting system: per-order ledger entries (sale, platform commission, payment fee, seller net), seller wallets, and Tap Payments webhook integration with full rollback on failure.',
                  'Implemented a content governance layer: moderation rules, complaint handling, AI consent gates, and a seller appeal system.',
                ]}
              />

              <ExperienceBlock
                title="Independent Software Engineer & Backend Architect"
                company="Freelance — Official Abu Dhabi License"
                location="Al Ain, UAE"
                period="2024 – Present"
                bullets={[
                  'Build full-stack SaaS platforms from infrastructure through deployment — PostgreSQL schemas, API design, authentication, and containerised production environments.',
                  'Deliver n8n self-hosted automation workflows for clients, connecting omnichannel APIs and eliminating manual operational overhead.',
                  'Implement secure payment integrations (Tap Payments, Ziina) with commission accounting and seller wallet logic.',
                  'Completed a Phase 2 contract delivery for a client platform via Mostaql (June 2026).',
                ]}
              />

            </div>
          </section>

          {/* Projects */}
          <section>
            <SectionHeading label="Selected Projects" />
            <div className="space-y-4">
              <ProjectBlock
                name="CipherVault"
                note="NDA · Cybersecurity thesis project"
                desc="Full-stack steganography system: AES-256 encrypted text hidden inside images using ML-ranked pixels (K-Means + Canny edge detection) and LSB embedding. FastAPI backend, Next.js frontend, real-time quality metrics (PSNR, SSIM, BER). Passphrase-only extraction — no sidecar metadata file required."
                stack="Python · FastAPI · Next.js · TypeScript · OpenCV · scikit-learn · PyCryptodome"
              />
              <ProjectBlock
                name="Mulham AI"
                note="NDA · Active production platform"
                desc="Arabic SaaS platform for building and selling digital products. Multi-stage AI pipeline (8 generation steps), seller onboarding, Tap Payments with ledger accounting, content moderation, admin analytics, and community features. PostgreSQL + Drizzle ORM + React + Vite."
                stack="TypeScript · React · Express.js · PostgreSQL · Drizzle ORM · OpenAI GPT-4o · Tap Payments"
              />
              <ProjectBlock
                name="Tanseeq"
                note="Live · tanseeq-app.vercel.app"
                desc="Service-platform web app with user authentication, profile management, admin dashboard, and dynamic service exploration pages. Built with Next.js App Router, Appwrite, and Firebase. Deployed on Vercel."
                stack="Next.js · TypeScript · Appwrite · Firebase · Tailwind CSS"
              />
              <ProjectBlock
                name="LinkedPro"
                note="NDA · Private repository"
                desc="LinkedIn automation platform powered by a multi-agent AI system. Handles AI-generated content, automated job applications with custom cover letters, network automation, and engagement analytics. Containerised deployment with Nginx and Let's Encrypt SSL."
                stack="Python · FastAPI · MongoDB · Playwright · OpenAI · Docker · Nginx"
              />
            </div>
          </section>

          {/* Education & Credentials */}
          <section>
            <SectionHeading label="Education & Credentials" />
            <div className="space-y-3 text-sm text-gray-700">
              <CredentialRow
                title="Software Development Freelance License"
                org="ADED — Abu Dhabi, UAE"
                year="2024"
              />
              <CredentialRow
                title="Software Engineering Program"
                org="ALX Africa"
                year="2023"
              />
              <CredentialRow
                title="AI Career Essentials"
                org="ALX Africa"
                year="July 2024"
              />
            </div>
          </section>

        </div>

        {/* References note */}
        <p className="mt-8 text-xs text-gray-400 italic text-center font-mono">
          References and project details available on request.
        </p>

        {/* Page footer */}
        <footer className="mt-6 pt-5 border-t border-gray-200 flex items-center justify-between print:hidden">
          <p className="font-mono text-xs text-gray-400">
            © {new Date().getFullYear()} Elsmoal S. Ibrahim
          </p>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-1.5 rounded text-sm font-mono border border-gray-300 text-gray-700 hover:border-gray-500 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Save as PDF
          </button>
        </footer>

      </div>

      {/* ── Print styles ── */}
      <style>{`
        @page {
          size: A4;
          margin: 18mm 20mm;
        }
        @media print {
          *, *::before, *::after {
            animation: none !important;
            transition: none !important;
            box-shadow: none !important;
          }
          html, body {
            background: #fff !important;
            color: #111 !important;
            font-size: 10.5pt;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print\\:hidden { display: none !important; }
          section { page-break-inside: avoid; break-inside: avoid; }
          h1 { font-size: 20pt !important; }
          h2 { font-size: 8pt !important; }
          h3 { font-size: 10.5pt !important; }
          a[href^="mailto"]::after { content: ""; }
          a[href^="http"]::after  { content: ""; }
        }
      `}</style>

    </div>
  );
}

/* ── Sub-components ── */

function SectionHeading({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 shrink-0">
        {label}
      </h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

function SkillRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="font-semibold text-gray-800 shrink-0 w-36">{label}</span>
      <span className="text-gray-600">{value}</span>
    </div>
  );
}

function ExperienceBlock({
  title, company, location, period, bullets,
}: {
  title: string; company: string; location: string; period: string; bullets: string[];
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
        <div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{company} · {location}</p>
        </div>
        <span className="font-mono text-xs text-gray-400 shrink-0">{period}</span>
      </div>
      <ul className="space-y-1.5 pl-3 border-l border-gray-200 mt-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-gray-700 leading-relaxed">{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectBlock({
  name, note, desc, stack,
}: {
  name: string; note?: string; desc: string; stack: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="pt-0.5 shrink-0 w-1 self-stretch bg-gray-200 rounded" />
      <div>
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
          {note && <span className="font-mono text-xs text-amber-700">[{note}]</span>}
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-1">{desc}</p>
        <p className="font-mono text-xs text-gray-400 italic">{stack}</p>
      </div>
    </div>
  );
}

function CredentialRow({
  title, org, year,
}: {
  title: string; org: string; year: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <div>
        <span className="font-semibold text-gray-800">{title}</span>
        <span className="text-gray-500 ml-2">— {org}</span>
      </div>
      <span className="font-mono text-xs text-gray-400 shrink-0 italic">{year}</span>
    </div>
  );
}
