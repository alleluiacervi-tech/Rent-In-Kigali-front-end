import { MessageCircle, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function WhatsAppChat() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // WhatsApp business number
  const phoneNumber = '250785514692'; // Format: country code + number (no + or spaces)
  const message = encodeURIComponent('Hello! I am interested in properties. Can you help me?');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 bg-white rounded-lg shadow-2xl p-4 w-64 mb-2"
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900">Rent in Kigali</h4>
                  <p className="text-sm text-gray-500">Online</p>
                </div>
              </div>
              
              <div className="text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="font-medium">Hi there!</span>
                </div>
                <p>How can we help you find your dream property?</p>
              </div>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-center py-2 px-4 rounded-lg transition-colors"
              >
                Start Chat
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-colors group relative"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
          
          {/* Notification Badge */}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            1
          </motion.span>
          
          {/* Tooltip */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              Chat with us on WhatsApp
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </motion.div>
          )}
        </motion.button>

        {/* Pulse Animation */}
        {!isExpanded && (
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-[#25D366] rounded-full -z-10"
          />
        )}
      </motion.div>
    </>
  );
}