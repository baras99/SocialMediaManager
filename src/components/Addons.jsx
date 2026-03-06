import React from 'react';
import { motion } from 'framer-motion';
import { Star, Video, Camera, Megaphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Addons() {
  const addons = [
    {
      icon: Star,
      title: 'ניהול משפיענים (פודיז)',
      description: 'איתור, סינון ותיאום הגעה של משפיעני אוכל ויוצרי תוכן לסיקור המקום בשת״פ.',
      price: '800 ₪',
      note: '(עד 4 בחודש)',
    },
    {
      icon: Video,
      title: 'הפקת סרטון (Reel) נוסף',
      description: 'צילום, בימוי, איתור סאונד טרנדי ועריכה מלאה לסרטון מעבר לכמות שבחבילה.',
      price: '450 ₪',
      note: 'לסרטון בודד',
    },
    {
      icon: Camera,
      title: 'יום צילום אקסטרה',
      description: 'אידיאלי להשקת תפריט חדש, צילום אירוע מיוחד במקום, או צילומי אווירה לעונה.',
      price: '1,200 ₪',
      note: '(עד 3 שעות בשטח)',
    },
    {
      icon: Megaphone,
      title: 'ניהול קמפיין ממומן',
      description: 'מסעות פרסום ממומנים במטא (אינסטגרם/פייסבוק) להבאת טראפיק ממוקד.',
      price: 'החל מ-1,000 ₪',
      note: '(לא כולל מדיה)',
    },
  ];

  return (
    <section id="addons" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-3xl mb-4 block">✨</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">תוספות ושדרוגים</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">צריכים בוסט נקודתי? תמיד אפשר להוסיף:</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:shadow-xl transition-all duration-300 border border-border group">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <addon.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{addon.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{addon.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xl font-bold text-primary">{addon.price}</p>
                    <p className="text-xs text-muted-foreground">{addon.note}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}