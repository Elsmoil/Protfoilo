'use client';
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import EngineRoom from "@/components/sections/EngineRoom";
import Services from "@/components/sections/Services";
import FeaturedMissions from "@/components/sections/FeaturedMissions";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import { motion } from "framer-motion";

const Divider = ({ via }: { via: string }) => (
  <div className={`w-full h-px bg-gradient-to-r from-transparent ${via} to-transparent`} />
);

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col selection:bg-electricViolet selection:text-white"
    >
      <Hero />
      <StatsStrip />
      <Divider via="via-white/10" />
      <EngineRoom />
      <Divider via="via-electricViolet/20" />
      <Services />
      <Divider via="via-neonCyan/20" />
      <FeaturedMissions />
      <Divider via="via-white/10" />
      <Philosophy />
      <Divider via="via-electricViolet/20" />
      <Contact />
      <Footer />
    </motion.main>
  );
}
