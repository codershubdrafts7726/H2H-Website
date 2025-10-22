import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BuildUpSectionProps {
  onNext: () => void;
}

const BuildUpSection = ({ onNext }: BuildUpSectionProps) => {
  const [showHeartbeat, setShowHeartbeat] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowHeartbeat(true), 2000);
    const timer2 = setTimeout(() => onNext(), 6000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onNext]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-b from-background to-mystery-deep">
      <div className="max-w-2xl text-center space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed mb-8">
            There's something I've been meaning to say...
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
            It's been in every word, every smile, every moment...
          </p>
        </motion.div>

        {showHeartbeat && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-primary/20 animate-heart-beat" />
              <div className="absolute inset-0 w-24 h-24 rounded-full bg-primary/10 animate-heart-beat animation-delay-150" />
              <div className="absolute inset-0 w-24 h-24 rounded-full bg-primary/5 animate-heart-beat animation-delay-300" />
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4 }}
          className="text-muted-foreground text-lg"
        >
          ...
        </motion.div>
      </div>
    </div>
  );
};

export default BuildUpSection;
