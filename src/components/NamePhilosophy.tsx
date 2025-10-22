import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface NamePhilosophyProps {
  onNext: () => void;
}

const NamePhilosophy = ({ onNext }: NamePhilosophyProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 animate-shimmer bg-[length:200%_100%]">
            Humerah
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-6 text-center"
        >
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed italic">
            "A name that carries the essence of crimson dawn,
            <br />
            Like the first light that breaks the darkness."
          </p>

          <div className="space-y-4 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              In the Arabic tongue, <span className="text-primary font-semibold">Humerah</span> means "red" — 
              but it is not merely a color. It is the warmth of life itself,
              the pulse of a beating heart, the passion that colors every moment with meaning.
            </p>

            <p className="leading-relaxed">
              Like the roses that bloom with patience and grace,
              your name speaks of beauty that doesn't demand attention —
              it simply exists, naturally, perfectly, timelessly.
            </p>

            <p className="leading-relaxed">
              The philosophers say that names shape destiny.
              If so, yours was written in the ink of compassion,
              traced by the hand of grace, and sealed with light.
            </p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="flex justify-center pt-4"
            >
              <Heart className="w-8 h-8 text-primary animate-heart-beat" fill="currentColor" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="flex justify-center pt-8"
        >
          <Button
            onClick={onNext}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-10 py-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            Continue →
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NamePhilosophy;
