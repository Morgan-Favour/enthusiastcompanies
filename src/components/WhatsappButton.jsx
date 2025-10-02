"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "2348032762526"; // 👈 No "+" for wa.me links
  const defaultMessage = "Hello, I’d like to know more about Enthusiast Hydrogen";

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");
      setIsOpen(false);
      setMessage("");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-10 right-10 w-14 h-14 bg-eh-primary text-eh-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-colors z-50"
        onClick={handleToggle}
        aria-label="Open WhatsApp chat"
        aria-expanded={isOpen}
      >
        <FaWhatsapp className="text-2xl" />
      </button>

      {/* Popup Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-10 w-80 max-w-[90vw] bg-white rounded-lg shadow-xl p-4 z-50 font-lato backdrop-blur-md bg-opacity-95"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Chat with Enthusiast Hydrogen
            </h3>

            <textarea
              className="w-full h-24 p-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-eh-primary focus:ring-2 focus:ring-eh-primary"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={defaultMessage}
              aria-label="Type your message"
            />

            <div className="flex justify-end gap-2 mt-3">
              <button
                className="py-2 px-4 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                onClick={handleToggle}
                aria-label="Cancel"
              >
                Cancel
              </button>
              <button
                className="py-2 px-4 bg-eh-primary text-white rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50"
                onClick={handleSend}
                aria-label="Send message to WhatsApp"
                disabled={!message.trim()}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppButton;
