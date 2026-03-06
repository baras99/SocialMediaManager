import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Coffee, Sparkles, Crown, Camera, Smartphone, MessageSquare, Bookmark } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(1);

  const packages = [
    {
      id: 0,
      name: 'קפה של בוקר',
      emoji: '☕',
      subtitle: 'נוכחות שוטפת, יציבה ומקצועית',
      price: '3,500',
      features: [
        { icon: Camera, text: 'יום צילום 1: עד 3 שעות בשטח' },
        { icon: Smartphone, text: '4 סרטוני רילס בחודש (סרטון בשבוע)' },
        { icon: Smartphone, text: '4 פוסטים/קרוסלות בחודש (תפריט, אווירה)' },
        { icon: Bookmark, text: 'סטוריז: 3 פעמים בשבוע (+שיתופי לקוחות)' },
        { icon: MessageSquare, text: 'מענה ל-DMs ותגובות בימי חול' },
        { icon: Bookmark, text: 'יצירת ועדכון היילייטים' },
      ],
      total: 'סה"כ 8 פוסטים חודשיים',
    },
    {
      id: 1,
      name: 'אספרסו כפול',
      emoji: '🥐',
      subtitle: 'חבילת צמיחה ויראליות בוידאו',
      price: '5,000',
      recommended: true,
      features: [
        { icon: Camera, text: 'ימי צילום: 1 ארוך (4-5 שעות) או 2 קצרים' },
        { icon: Smartphone, text: '8 סרטוני רילס בחודש (ASMR, צוות, הכנה, אווירה)' },
        { icon: Smartphone, text: '2 פוסטים סטטיים/קרוסלות' },
        { icon: Bookmark, text: 'סטוריז: 5 פעמים בשבוע - נוכחות כמעט יומיומית' },
        { icon: MessageSquare, text: 'מענה ל-DMs ותגובות בימי חול' },
        { icon: Bookmark, text: 'יצירת ועדכון היילייטים' },
      ],
      total: 'סה"כ 10 פוסטים חודשיים',
    },
    {
      id: 2,
      name: 'פרימיום 360°',
      emoji: '🥂',
      subtitle: 'ויראליות מלאה, אינסטגרם + טיקטוק',
      price: '7,500',
      features: [
        { icon: Camera, text: '2 ימי צילום מלאים בחודש' },
        { icon: Smartphone, text: '10 סרטונים בחודש לאינסטגרם וטיקטוק' },
        { icon: Smartphone, text: 'בניית גריד מעוצב ומוקפד' },
        { icon: Bookmark, text: 'סטוריז: פעילות יומיומית מלאה' },
        { icon: Sparkles, text: 'איתור והזמנת משפיעני Foodies' },
        { icon: Bookmark, text: 'יצירת ועדכון היילייטים' },
      ],
      total: 'שילוב פלטפורמות מלא',
    },
  ];

  const icons = [Coffee, Sparkles, Crown];

  return (
    <section id="packages" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">בחרו את המסלול שלכם</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">שלוש חבילות מותאמות לצרכים שלכם</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = icons[index];
            const isSelected = selectedPackage === pkg.id;
            
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${pkg.recommended ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm">
                      המסלול המומלץ
                    </Badge>
                  </div>
                )}
                
                <Card 
                  className={`h-full cursor-pointer transition-all duration-300 border-2 ${
                    isSelected 
                      ? 'border-primary shadow-2xl scale-[1.02]' 
                      : 'border-transparent hover:border-primary/30 shadow-lg hover:shadow-xl'
                  } ${pkg.recommended ? 'bg-card' : 'bg-card'}`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <CardHeader className="text-center pb-4 pt-8">
                    <div className="text-4xl mb-4">{pkg.emoji}</div>
                    <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                      isSelected ? 'bg-primary' : 'bg-primary/10'
                    } transition-colors`}>
                      <IconComponent className={`w-7 h-7 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">מסלול {index + 1}: {pkg.name}</h3>
                    <p className="text-muted-foreground text-sm">{pkg.subtitle}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground mr-1">₪ / חודש</span>
                      <p className="text-xs text-muted-foreground mt-1">(+מע"מ)</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {pkg.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <feature.icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-sm text-foreground/80">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-center text-sm font-semibold text-primary">{pkg.total}</p>
                    </div>

                    <Button 
                      className={`w-full mt-6 ${
                        isSelected 
                          ? 'bg-primary hover:bg-primary/90' 
                          : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {isSelected ? 'צור קשר' : 'בחר מסלול'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}