import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
  {
    thumbnail: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a8452c4ab7c3b3de41a120/23057cb4a_Screenshot2026-03-04at171422.png',
    link: 'https://www.instagram.com/reel/C-5mKN_NGDM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    views: '26.8K',
  },
  {
    thumbnail: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a8452c4ab7c3b3de41a120/055f49851_Screenshot2026-03-05at130739.png',
    link: 'https://www.instagram.com/reel/DENSSdRteeO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    views: '15K',
  },
  {
    thumbnail: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a8452c4ab7c3b3de41a120/07adf9e49_Screenshot2026-03-05at130847.png',
    link: 'https://www.instagram.com/reel/DEuy7katmIL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    views: '13.7K',
  },
  {
    thumbnail: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a8452c4ab7c3b3de41a120/a01ebe7d0_Screenshot2026-03-05at130950.png',
    link: 'https://www.instagram.com/reel/DCzSpigt8SU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    views: '15.8K',
  },
  {
    thumbnail: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a8452c4ab7c3b3de41a120/513510ce4_Screenshot2026-03-05at131056.png',
    link: 'https://www.instagram.com/',
    views: '18.6K',
  },
  {
    thumbnail: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a8452c4ab7c3b3de41a120/ac9a87f70_Screenshot2026-03-05at131257.png',
    link: 'https://www.instagram.com/reel/DKKSqostOlT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    views: '104K',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">קצת תכנים שיצרתי</h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video, index) => (
            <motion.a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl group block"
            >
              <img
                src={video.thumbnail}
                alt={`סרטון ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                  <Play className="w-7 h-7 text-primary fill-primary mr-[-3px]" />
                </div>
              </div>
              {/* Views badge */}
              <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                {video.views}
              </div>
              {/* Instagram icon always visible */}
              <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E1306C" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#E1306C"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          לחצו על הסרטון לצפייה באינסטגרם
        </motion.p>
      </div>
    </section>
  );
}