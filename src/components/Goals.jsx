import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Goals() {
  const goals = [
    {
      icon: Flame,
      title: 'ויראליות וחשיפה',
      description: 'בניית נוכחות באמצעות reels קצרים וטרנדיים שמביאים לקוחות חדשים מהשכונה ומחוצה לה.',
      color: 'from-orange-400 to-amber-500',
    },
    {
      icon: Sparkles,
      title: 'בניית שפת מותג',
      description: 'סידור הGrid באינסטגרם, צילום אווירה, מנות דגל וקפה שמשדרים מקצועיות ואיכות.',
      color: 'from-amber-400 to-yellow-500',
    },
    {
      icon: Heart,
      title: 'ניהול קהילה',
      description: 'תחזוקת הקשר עם הלקוחות הקבועים, מענה מהיר להודעות ושיתוף תיוגים כדי ליצור תחושת ביתיות ושייכות.',
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  return (
    <section id="goals" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">המטרה המשותפת שלנו</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            להפוך את בית הקפה למקום שיודעים עליו, מדברים עליו, ובעיקר - שרוצים לצלם אותו ולשבת בו.
          </p>
          <p className="text-primary font-semibold mt-4">והכי חשוב - להעביר את המסר שלכם דרך המסך</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <goal.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{goal.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}