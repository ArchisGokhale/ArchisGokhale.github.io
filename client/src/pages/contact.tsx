import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
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
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "MESSAGE RECEIVED",
        description: "Thanks for reaching out! I'll get back to you soon.",
        className: "bg-black border-primary text-primary font-mono"
      });
    }, 1500);
  };

  return (
    <div className="space-y-8 pb-8">
      <header>
        <h2 className="text-3xl font-display font-bold text-foreground tracking-wider">LET'S CONNECT</h2>
        <p className="text-xs font-mono text-muted-foreground mt-2">Open to opportunities, collaborations, and interesting problems</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="md:col-span-2 steam-panel border border-secondary/30 p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-secondary font-bold uppercase">Your Name</label>
              <Input 
                placeholder="John Doe" 
                className="bg-black/50 border-white/10 font-mono text-sm focus:border-primary/50 focus:ring-primary/20 rounded-sm h-10"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-secondary font-bold uppercase">Email</label>
              <Input 
                placeholder="hello@example.com" 
                type="email"
                className="bg-black/50 border-white/10 font-mono text-sm focus:border-primary/50 focus:ring-primary/20 rounded-sm h-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-secondary font-bold uppercase">Subject</label>
            <Input 
              placeholder="Let's build something great" 
              className="bg-black/50 border-white/10 font-mono text-sm focus:border-primary/50 focus:ring-primary/20 rounded-sm h-10"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-secondary font-bold uppercase">Message</label>
            <Textarea 
              placeholder="Tell me about your project, idea, or opportunity..." 
              className="bg-black/50 border-white/10 font-mono text-sm focus:border-primary/50 focus:ring-primary/20 rounded-sm min-h-[150px]"
              required
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 rounded-sm h-11 font-mono font-bold tracking-widest transition-all duration-300 hover:shadow-[0_0_12px_rgba(255,107,26,0.3)]"
          >
            {isSubmitting ? (
              <span className="animate-pulse">SENDING...</span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                SEND MESSAGE <Send className="w-4 h-4" />
              </span>
            )}
          </Button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <div className="steam-panel border border-primary/30 p-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono font-bold text-foreground text-sm">Email</h4>
                <a href="mailto:archisgokhale001@gmail.com" className="text-xs text-primary hover:text-glow transition-all">
                  archisgokhale001@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="steam-panel border border-secondary/30 p-4">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono font-bold text-foreground text-sm">Phone</h4>
                <a href="tel:+918698762960" className="text-xs text-secondary hover:text-glow-secondary transition-all">
                  +91 86987 62960
                </a>
              </div>
            </div>
          </div>

          <div className="steam-panel border border-accent/30 p-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-mono font-bold text-foreground text-sm">Location</h4>
                <p className="text-xs text-accent">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="space-y-2">
            <h4 className="font-mono font-bold text-foreground text-sm">SOCIALS</h4>
            <div className="space-y-2">
              <a href="https://linkedin.com/in/archisgokhale" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 text-xs text-primary hover:text-glow transition-all font-mono">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://github.com/ArchisGokhale" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-secondary hover:text-glow-secondary transition-all font-mono">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
