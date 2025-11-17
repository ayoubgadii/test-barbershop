import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, User, Bot } from 'lucide-react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm your AI Stylist at Barbershop Co. How can I help you achieve your perfect look today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initChat = () => {
    if (!chatRef.current) {
        // The API key must be obtained exclusively from the environment variable process.env.API_KEY
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        chatRef.current = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "You are a professional, trendy, and friendly barber consultant for Barbershop Co. You advise men on haircuts, beard styles, and grooming based on their face shape, hair type, and preferences. Keep your answers concise, helpful, and stylish. If asked about pricing, mention we start around $20. If asked to book, encourage them to visit the Appointment page.",
            }
        });
    }
  };

  useEffect(() => {
    initChat();
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !chatRef.current || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
        // Optimistic update for model message
        setMessages(prev => [...prev, { role: 'model', text: '' }]);

        const result = await chatRef.current.sendMessageStream({ message: userMsg });
        
        let fullText = '';
        for await (const chunk of result) {
            const c = chunk as GenerateContentResponse;
            const text = c.text;
            if (text) {
                fullText += text;
                setMessages(prev => {
                    const newArr = [...prev];
                    newArr[newArr.length - 1].text = fullText;
                    return newArr;
                });
            }
        }
    } catch (error) {
        console.error("Error:", error);
        setMessages(prev => {
             const newArr = [...prev];
             newArr[newArr.length - 1].text = "Sorry, I'm having trouble connecting to the style server right now. Please try again.";
             return newArr;
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#111] min-h-screen pt-32 pb-12">
        <div className="container mx-auto px-4 h-full flex flex-col items-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
            >
                <div className="flex items-center justify-center gap-3 mb-2">
                    <Sparkles className="text-[#d4af37]" />
                    <h3 className="text-[#d4af37] font-heading tracking-widest uppercase text-sm">Virtual Consultant</h3>
                </div>
                <h1 className="text-white font-display text-4xl md:text-5xl uppercase">Find Your Style</h1>
            </motion.div>

            <div className="w-full max-w-3xl bg-[#1a1a1a] border-2 border-[#333] rounded-sm overflow-hidden flex flex-col h-[60vh] md:h-[70vh] shadow-2xl relative">
                {/* Decorative top bar */}
                <div className="h-1 w-full bg-[#d4af37]"></div>
                
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-700 ${msg.role === 'user' ? 'bg-gray-800' : 'bg-[#d4af37]'}`}>
                                {msg.role === 'user' ? <User size={20} className="text-gray-400" /> : <Bot size={20} className="text-black" />}
                            </div>
                            <div className={`max-w-[80%] p-4 rounded-lg ${msg.role === 'user' ? 'bg-gray-800 text-white rounded-tr-none' : 'bg-white text-black rounded-tl-none'}`}>
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && messages[messages.length - 1].text === '' && (
                         <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center flex-shrink-0 border border-gray-700">
                                <Bot size={20} className="text-black" />
                            </div>
                            <div className="bg-white text-black p-4 rounded-lg rounded-tl-none">
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-black rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-black rounded-full animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 bg-black rounded-full animate-bounce delay-150"></span>
                                </div>
                            </div>
                         </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-[#000] border-t border-[#333]">
                    <form onSubmit={handleSend} className="flex gap-4">
                        <input 
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about a haircut, beard style, or product..."
                            className="flex-1 bg-[#1a1a1a] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#d4af37] transition-colors rounded-sm"
                        />
                        <button 
                            type="submit" 
                            disabled={isLoading || !input.trim()}
                            className="bg-[#d4af37] text-black p-3 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send size={24} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AIConsultant;