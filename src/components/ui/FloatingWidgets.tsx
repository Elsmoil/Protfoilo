'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, TerminalSquare, X, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FloatingWidgets() {
  const [isBotOpen, setIsBotOpen] = useState(false);
  const t = useTranslations('Widgets');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

      {/* نافذة التيرمنال المصغرة لبوت الذكاء الاصطناعي */}
      <AnimatePresence>
        {isBotOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-80 sm:w-96 rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-[0_0_30px_rgba(138,43,226,0.15)] backdrop-blur-xl"
          >
            {/* رأس التيرمنال */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2 text-gray-400 font-mono text-xs">
                <TerminalSquare className="w-4 h-4 text-neonCyan" />
                <span>{t('agent_title')}</span>
              </div>
              <button onClick={() => setIsBotOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* منطقة المحادثة */}
            <div className="h-64 p-4 overflow-y-auto font-mono text-sm text-gray-300 flex flex-col gap-3">
              <div className="bg-white/5 p-3 rounded-lg border border-white/5 w-11/12">
                <span className="text-neonCyan">Agent:</span> {t('agent_greeting')}
              </div>
              {/* هنا ستظهر رسائل المستخدم لاحقاً */}
            </div>

            {/* شريط الإدخال */}
            <div className="p-3 border-t border-white/10 bg-black/50 flex gap-2">
              <input
                type="text"
                placeholder={t('input_placeholder')}
                className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-ghostWhite placeholder:text-gray-600"
              />
              <button className="text-electricViolet hover:text-neonCyan transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* الأزرار الطافية */}
      <div className="flex gap-3">
        {/* زر بوت الذكاء الاصطناعي */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsBotOpen(!isBotOpen)}
          className="w-14 h-14 rounded-full glass-panel flex items-center justify-center border border-electricViolet/30 text-electricViolet shadow-[0_0_15px_rgba(138,43,226,0.2)] hover:shadow-[0_0_25px_rgba(138,43,226,0.5)] transition-shadow bg-[#050505]/80"
        >
          <TerminalSquare className="w-6 h-6" />
        </motion.button>

        {/* زر الواتساب */}
        <motion.a
          href="https://wa.me/+971559264344"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full glass-panel flex items-center justify-center border border-green-500/30 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-shadow bg-[#050505]/80 relative group"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-3 -right-3 text-[10px] bg-red-500 text-white px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">TODO</span>
        </motion.a>
      </div>

    </div>
  );
}
