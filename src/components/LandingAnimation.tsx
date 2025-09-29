import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Sparkles } from 'lucide-react';

interface LandingAnimationProps {
  onComplete: () => void;
}

const LandingAnimation: React.FC<LandingAnimationProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-amber-700"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center text-white">
        {/* Floating Elements */}
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-200"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 50,
                rotate: 0
              }}
              animate={{
                y: -50,
                rotate: 360,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                ease: "linear"
              }}
            >
              <Leaf size={20 + Math.random() * 20} />
            </motion.div>
          ))}
        </motion.div>

        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="relative z-10"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="p-4 bg-white/20 rounded-full backdrop-blur-sm"
            >
              <Heart className="h-12 w-12 text-green-200" fill="currentColor" />
            </motion.div>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-5xl font-bold mb-2"
          >
            AyurSutra
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl text-green-100 flex items-center justify-center gap-2"
          >
            <Sparkles className="h-5 w-5" />
            Panchakarma Therapy Management
            <Sparkles className="h-5 w-5" />
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "linear" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 h-1 bg-white/30 rounded-full overflow-hidden"
          style={{ width: "200px" }}
        >
          <div className="h-full bg-gradient-to-r from-green-300 to-amber-300 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingAnimation;