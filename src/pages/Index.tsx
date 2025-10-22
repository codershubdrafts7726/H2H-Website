import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeSection from "@/components/WelcomeSection";
import NamePhilosophy from "@/components/NamePhilosophy";
import JourneySection from "@/components/JourneySection";
import BuildUpSection from "@/components/BuildUpSection";
import RevealSection from "@/components/RevealSection";
import FloatingParticles from "@/components/FloatingParticles";

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 6;

  const nextSection = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const restart = () => {
    setCurrentSection(0);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <FloatingParticles />
      
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {currentSection === 0 && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <WelcomeSection onStart={nextSection} />
            </motion.div>
          )}

          {currentSection === 1 && (
            <motion.div
              key="name"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <NamePhilosophy onNext={nextSection} />
            </motion.div>
          )}

          {currentSection === 2 && (
            <motion.div
              key="journey1"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              <JourneySection
                phase={1}
                onNext={nextSection}
              />
            </motion.div>
          )}

          {currentSection === 3 && (
            <motion.div
              key="journey2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
            >
              <JourneySection
                phase={2}
                onNext={nextSection}
              />
            </motion.div>
          )}

          {currentSection === 4 && (
            <motion.div
              key="buildup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <BuildUpSection onNext={nextSection} />
            </motion.div>
          )}

          {currentSection === 5 && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <RevealSection onRestart={restart} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
