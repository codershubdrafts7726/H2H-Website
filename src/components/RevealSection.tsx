import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RefreshCw, Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface RevealSectionProps {
  onRestart: () => void;
}

const RevealSection = ({ onRestart }: RevealSectionProps) => {
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHearts(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      
      {/* Falling hearts */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -100, x: Math.random() * window.innerWidth }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: window.innerHeight + 100,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3,
              }}
              className="absolute"
            >
              <Heart
                className="text-primary"
                fill="currentColor"
                size={20 + Math.random() * 20}
              />
            </motion.div>
          ))}
        </div>
      )}

      <div className="relative z-10 text-center space-y-12 max-w-4xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1.5,
          }}
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-8">
            <span className="inline-block animate-scale-in text-primary drop-shadow-2xl">
              I
            </span>{" "}
            <motion.span
              className="inline-block text-accent"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              ❤️
            </motion.span>{" "}
            <span className="inline-block animate-scale-in animation-delay-200 text-primary drop-shadow-2xl">
              LOVE
            </span>{" "}
            <span className="inline-block animate-scale-in animation-delay-400 text-primary drop-shadow-2xl">
              YOU
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="space-y-6"
        >
          <p className="text-2xl md:text-3xl text-foreground/90 font-light">
            Humerah
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            You are the light that colors my world,
            <br />
            the peace in my chaos,
            <br />
            and the answer to prayers I never knew how to speak.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="flex flex-col items-center gap-6 pt-8"
        >
          <div className="text-sm text-muted-foreground italic">
            Made with ❤️ just for you
          </div>
          
          <Button
            onClick={onRestart}
            variant="outline"
            size="lg"
            className="group border-primary/50 hover:border-primary hover:bg-primary/10 text-foreground px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
          >
            <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Experience it again
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default RevealSection;
