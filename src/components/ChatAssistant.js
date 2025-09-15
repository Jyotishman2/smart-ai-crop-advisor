"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en"); // default English
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I’m your खेती मित्र. How can I help?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setOpen(!open);

  // Crop requirements database
  const cropData = {
    rice: {
      en: " Rice grows best in clay or loamy soil with high fertility, pH 5.5–6.5, and requires plenty of water.",
      hi: " धान गहरी चिकनी या दोमट मिट्टी में अच्छा उगता है, pH 5.5–6.5 और पर्याप्त पानी की आवश्यकता होती है।",
    },
    wheat: {
      en: " Wheat prefers well-drained loamy soil with pH 6–7.5 and cool climate.",
      hi: " गेहूं अच्छी जल निकासी वाली दोमट मिट्टी में उगता है, pH 6–7.5 और ठंडी जलवायु की आवश्यकता होती है।",
    },
    maize: {
      en: " Maize requires fertile, well-drained loamy soil with pH 5.5–7.0 and warm climate.",
      hi: "मक्का उपजाऊ, अच्छी जल निकासी वाली दोमट मिट्टी में उगता है, pH 5.5–7.0 और गर्म जलवायु की आवश्यकता होती है।",
    },
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    let botReply =
      lang === "en"
        ? " Sorry, I didn’t understand. Try asking about crops or weather."
        : " माफ़ करें, मैं समझ नहीं पाया। कृपया फसलों या मौसम के बारे में पूछें।";

    const lower = input.toLowerCase();

    // Check crop requirements
    if (cropData.rice && lower.includes("rice")) botReply = cropData.rice[lang];
    if (cropData.wheat && lower.includes("wheat")) botReply = cropData.wheat[lang];
    if (cropData.maize && lower.includes("maize")) botReply = cropData.maize[lang];

    // English responses
    if (lang === "en") {
      if (lower.includes("hello")) botReply = " Hello! How are you?";
      if (lower.includes("recommend")) botReply = " You can get crop recommendations by filling the form above.";
      if (lower.includes("weather")) botReply = " Weather data will be fetched automatically based on your location.";
    }

    // Hindi responses
    if (lang === "hi") {
      if (lower.includes("hello") || lower.includes("नमस्ते")) botReply = " नमस्ते! आप कैसे हैं?";
      if (lower.includes("recommend") || lower.includes("सुझाव")) botReply = " आप फसल सुझाव ऊपर वाले फॉर्म से प्राप्त कर सकते हैं।";
      if (lower.includes("weather") || lower.includes("मौसम")) botReply = " मौसम का डेटा आपके स्थान के आधार पर स्वतः लिया जाएगा।";
    }

    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    setInput("");
  };

  const switchLang = (language) => {
    setLang(language);
    setMessages([
      {
        sender: "bot",
        text:
          language === "en"
            ? "👋 Hi! I’m your खेती मित्र. How can I help?"
            : "👋 नमस्ते! मैं खेती मित्र हूँ, आपकी मदद के लिए तैयार हूँ।",
      },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Toggle Button */}
      {!open && (
        <motion.button
          onClick={toggleChat}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700"
          whileHover={{ scale: 1.1 }}
        >
          <MessageCircle size={24} />
        </motion.button>
      )}

      {/* Chat Box */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col"
          >
            {/* Header with language toggle */}
            <div className="bg-green-600 text-white p-3 flex justify-between items-center rounded-t-lg">
              <span>खेती मित्र</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => switchLang("en")}
                  className={`px-2 py-1 rounded text-sm ${
                    lang === "en" ? "bg-white text-green-700" : "bg-green-700 text-white"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLang("hi")}
                  className={`px-2 py-1 rounded text-sm ${
                    lang === "hi" ? "bg-white text-green-700" : "bg-green-700 text-white"
                  }`}
                >
                  HI
                </button>
                <button onClick={toggleChat}>
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "bot"
                      ? "bg-green-100 text-green-900 self-start"
                      : "bg-green-600 text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 flex gap-2 border-t">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder={lang === "en" ? "Type a message..." : "संदेश लिखें..."}
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-3 rounded hover:bg-green-700"
              >
                {lang === "en" ? "Send" : "भेजें"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
