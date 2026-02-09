import { motion } from 'motion/react';
import logo from 'figma:asset/ba903176d079dc459036529cf29fe7b6886bb041.png';

export function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
          className="mb-8"
        >
          <img 
            src={logo} 
            alt="Rent in Kigali" 
            className="h-32 md:h-40 mx-auto drop-shadow-2xl"
          />
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.6
          }}
        >
          <h1 className="text-white mb-2">Welcome to Rent in Kigali</h1>
          <p className="text-blue-100 text-xl">Your trusted real estate partner</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mt-12"
        >
          <div className="flex justify-center gap-2">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
