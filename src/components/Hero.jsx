import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content - centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white/80 text-sm md:text-base mb-4 tracking-widest"
        >
          ✦ סושיאל לבתי קפה ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-white mb-6 leading-none"
          style={{ fontFamily: 'Heebo, sans-serif' }}
        >
          בר עשור
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl mb-10"
        >
          מנהלת סושיאל מדיה | יוצרת תוכן | משפיענית
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          onClick={scrollToPackages}
          className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          לצפייה בחבילות
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}