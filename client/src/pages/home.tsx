import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = `> INITIALIZING SYSTEM...
> LOADING KERNEL...
> CONNECTING TO NEURAL NET...
> ACCESS GRANTED.

WELCOME TO THE PORTFOLIO OF [REDACTED].
SPECIALIZATION: AAA UI ENGINEERING / WEBGL / CREATIVE TECH.

PLEASE SELECT A MODULE FROM THE NAVIGATION MENU.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full flex flex-col justify-center items-start">
      <div className="w-full max-w-3xl border border-primary/20 bg-black/80 p-6 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-sm">
        {/* Decor */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
        
        <pre className="font-mono text-sm md:text-base lg:text-lg text-primary whitespace-pre-wrap leading-relaxed min-h-[200px]">
          {text}
          <span className="animate-pulse">_</span>
        </pre>
        
        <div className="mt-8 flex gap-4">
           <div className="h-1 bg-primary/20 w-1/3 rounded-full overflow-hidden">
             <motion.div 
               className="h-full bg-primary"
               initial={{ width: "0%" }}
               animate={{ width: "100%" }}
               transition={{ duration: 2, ease: "easeInOut" }}
             />
           </div>
        </div>
      </div>
    </div>
  );
}
