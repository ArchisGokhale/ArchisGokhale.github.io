import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Fake network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "TRANSMISSION SENT",
        description: "Your message has been encrypted and relayed to the server.",
        variant: "default", 
        className: "bg-black border-primary text-primary font-mono"
      });
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-8 border-b border-primary/20 pb-4">
        <h2 className="text-2xl font-display font-bold text-foreground tracking-wider glitch-text" data-text="ESTABLISH_UPLINK">
          ESTABLISH_UPLINK
        </h2>
        <p className="text-xs font-mono text-muted-foreground mt-1">SECURE_CHANNEL // ENCRYPTION: ENABLED</p>
      </header>

      <motion.form 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="space-y-6 border border-white/10 bg-black/40 p-6 md:p-8 backdrop-blur-sm"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-primary uppercase">Identity</label>
            <Input 
              placeholder="ENTER_NAME" 
              className="bg-black/50 border-white/10 font-mono text-sm focus:border-primary/50 focus:ring-primary/20 rounded-none h-12"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-primary uppercase">Frequency</label>
            <Input 
              placeholder="ENTER_EMAIL" 
              type="email"
              className="bg-black/50 border-white/10 font-mono text-sm focus:border-primary/50 focus:ring-primary/20 rounded-none h-12"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono text-primary uppercase">Payload</label>
          <Textarea 
            placeholder="ENTER_MESSAGE_DATA..." 
            className="bg-black/50 border-white/10 font-mono text-sm focus:border-primary/50 focus:ring-primary/20 rounded-none min-h-[150px]"
          />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 rounded-none h-12 font-mono tracking-widest transition-all duration-300 hover:text-glow group"
        >
          {isSubmitting ? (
            <span className="animate-pulse">TRANSMITTING...</span>
          ) : (
            <span className="flex items-center gap-2">
              SEND_TRANSMISSION <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>
      </motion.form>
      
      <div className="mt-8 flex justify-center text-[10px] text-muted-foreground font-mono opacity-50">
        <Terminal className="w-3 h-3 mr-2" />
        <span>SERVER_TIME: {new Date().toISOString()}</span>
      </div>
    </div>
  );
}
