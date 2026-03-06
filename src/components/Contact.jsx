import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, CreditCard, Calendar, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const terms = [
    {
      icon: CreditCard,
      title: 'קידום ממומן',
      text: 'המחירים המפורטים הינם עבור ניהול ויצירת התוכן (אורגני), ואינם כוללים תקציב למדיה ממומנת או ניהול קמפיינים.',
    },
    {
      icon: Clock,
      title: 'שעות מענה',
      text: 'כדי לספק שירות איכותי בשעות השיא הרלוונטיות, המענה בעמוד מתבצע בימים א\'-ה\' בין 09:00 ל-18:00.',
    },
    {
      icon: Calendar,
      title: 'ההתקשרות',
      text: 'הפעילות מבוצעת במסגרת ריטיינר חודשי מתחדש המאפשר עבודה אסטרטגית וצמיחה עקבית.',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Terms */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">תנאים כלליים והמשך עבודה</h2>
            <div className="w-16 h-1 bg-primary mb-8" />
            
            <div className="space-y-6">
              {terms.map((term, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{term.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{term.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-0 shadow-2xl">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-3xl">☕</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  מחכה לצאת לדרך משותפת!
                </h3>
                <p className="text-xl text-primary font-semibold mb-8">בר עשור</p>

                <div className="space-y-4 mb-8">
                  <a 
                    href="tel:0509565137"
                    className="flex items-center justify-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    050-9565137
                  </a>
                  <a 
                    href="mailto:baraassor@gmail.com"
                    className="flex items-center justify-center gap-3 text-lg text-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    baraassor@gmail.com
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open('https://wa.me/972509565137', '_blank')}
                  >
                    שלחו הודעה בווטסאפ
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.location.href = 'mailto:baraassor@gmail.com'}
                  >
                    שלחו מייל
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} בר עשור | ניהול סושיאל לבתי קפה
          </p>
        </motion.div>
      </div>
    </section>
  );
}