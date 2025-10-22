import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smile, Sun, Star, Sparkles } from "lucide-react";

interface JourneySectionProps {
  phase: number;
  onNext: () => void;
}

const JourneySection = ({ phase, onNext }: JourneySectionProps) => {
  const phase1Content = [
    { icon: Smile, text: "Your smile lights up every room you enter" },
    { icon: Sun, text: "You make the ordinary feel extraordinary" },
    { icon: Star, text: "Your kindness touches everyone around you" },
  ];

  const phase2Content = [
    { icon: Sparkles, text: "Every conversation with you feels like magic" },
    { icon: Heart, text: "Your presence brings peace to my chaos" },
    { icon: Smile, text: "You see beauty where others see ordinary" },
  ];

  const content = phase === 1 ? phase1Content : phase2Content;
  const title = phase === 1 ? "Do you believe in magic?" : "Because I do...";

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center text-foreground mb-12"
        >
          {title}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5 + index * 0.3,
                type: "spring",
              }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-md border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary animate-float" />
                  </div>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="flex justify-center pt-8"
        >
          <Button
            onClick={onNext}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Next →
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

// Missing Heart icon import
const Heart = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export default JourneySection;
