'use client';
import { motion } from 'framer-motion';
import { Server, Database, Terminal, Shield, Zap, Cpu } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function EngineRoom() {
  const t = useTranslations('EngineRoom');

  const skills = [
    {
      category: t('cat1'),
      icon: <Server className="w-6 h-6 text-electricViolet" />,
      techs: ["Node.js (NestJS/Express)", "TypeScript", "RESTful APIs", "Microservices"],
    },
    {
      category: t('cat2'),
      icon: <Database className="w-6 h-6 text-teal-600 dark:text-neonCyan" />,
      techs: ["PostgreSQL", "Redis", "Qdrant (Vector DB)", "MongoDB"],
    },
    {
      category: t('cat3'),
      icon: <Zap className="w-6 h-6 text-electricViolet" />,
      techs: ["Appwrite", "JWT Security", "Socket.io", "OTP Authentication"],
    },
    {
      category: t('cat4'),
      icon: <Shield className="w-6 h-6 text-neonCyan" />,
      techs: ["AES/ECC Cryptography", "Steganography", "Zero-Trust Security", "RBAC"],
    },
    {
      category: t('cat5'),
      icon: <Terminal className="w-6 h-6 text-electricViolet" />,
      techs: ["Debian Linux", "Docker", "Shell Scripting", "Vercel"],
    },
    {
      category: t('cat6'),
      icon: <Cpu className="w-6 h-6 text-teal-600 dark:text-neonCyan" />,
      techs: ["n8n (Self-hosted)", "Python Automation", "Omnichannel API Integrations", "AI Workflows"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
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

  return (
    <section id="engine-room" className="relative w-full min-h-screen py-24 px-6 flex flex-col items-center justify-center z-10">
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
            <span className="text-teal-600 dark:text-neonCyan">01.</span> {t('title')}
          </h2>
          <p className="font-mono text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl">
            {t('desc1')}
            <br />
            {t('desc2')}
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0px 10px 30px rgba(138, 43, 226, 0.15)",
                borderColor: "rgba(138, 43, 226, 0.4)"
              }}
              className="glass-panel p-6 flex flex-col transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-black/10 dark:border-white/5 pb-4">
                <div className="p-3 rounded-lg bg-black/5 dark:bg-white/5">
                  {skill.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 dark:text-ghostWhite tracking-wide">
                  {skill.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {skill.techs.map((tech, i) => (
                  <li key={i} className="flex items-center gap-2 font-mono text-gray-600 dark:text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 dark:bg-neonCyan/70"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
