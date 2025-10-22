import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface WelcomeSectionProps {
  onStart: () => void;
}

const WelcomeSection = ({ onStart }: WelcomeSectionProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Hey...
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            I made something special for you.
            <br />
            Something that's been on my heart...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="pt-8"
        >
          <Button
            onClick={onStart}
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ boxShadow: "var(--glow-romantic)" }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Begin the Journey
              <Sparkles className="w-5 h-5 animate-glow-pulse" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-shimmer opacity-50" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-sm text-muted-foreground"
        >
          ✨ Click when you're ready ✨
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeSection;
