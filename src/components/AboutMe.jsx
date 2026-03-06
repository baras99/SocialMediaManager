import React from 'react';
import { motion } from 'framer-motion';
import { Star, Camera, Heart, Megaphone } from 'lucide-react';

export default function AboutMe() {
  const highlights = [
  {
    icon: Star,
    title: '7 שנות ניסיון',
    description: 'אני חיה ונושמת את עולם הרשתות החברתיות. הדרך שלי התחילה כבלוגרית ויוצרת תוכן (UGC), ומשם התרחבה לניהול מקצועי של עמודי סושיאל בתחומים שונים.'
  },
  {
    icon: Camera,
    title: 'שתי נקודות מבט',
    description: 'אני מביאה לשולחן (ולקפה) את הראייה של יוצרת התוכן שיודעת לספר סיפור ויזואלי מושך, יחד עם הידע של מנהלת סושיאל אסטרטגית.'
  },
  {
    icon: Heart,
    title: 'יותר מפוסטים',
    description: 'אני יוצרת אווירה, סיפור, מעבירה את הריח והטעם דרך המסך, וגורמת לאנשים לרצות להגיע פיזית.'
  },
  {
    icon: Megaphone,
    title: 'חשיפה מהעמוד האישי שלי',
    description: 'כמשפיענית באינסטגרם, אני מעלה סטוריז מהמקום גם מהעמוד האישי שלי - ומביאה אתי חשיפה אורגנית לקהל העוקבים שלי ישירות לבית הקפה שלכם.'
  }];


  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">

          <span className="text-3xl mb-4 block">✨</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">קצת עליי</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 flex-shrink-0">

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a8452c4ab7c3b3de41a120/9a9b6a9b6_baraswixcom11065.jpg"
              alt="בר עשור" className="relative rounded-3xl shadow-2xl w-full max-w-sm mx-auto object-cover" style={{maxHeight: '420px'}} />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6">

            {highlights.map((item, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4">

                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}