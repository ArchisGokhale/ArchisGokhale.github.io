import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useSound } from "@/hooks/use-sound";

export default function Contact() {
  const { toast } = useToast();
  const { play } = useSound();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    play('success');
    setIsSubmitting(true);
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });

        toast({
          title: "MESSAGE RECEIVED",
          description: "Thanks for reaching out! I'll get back to you soon.",
          className: "bg-black border-primary text-primary font-mono"
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "ERROR",
        description: "Failed to send message. Please try again.",
        className: "bg-black border-red-500 text-red-500 font-mono"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 pb-8">
      <header>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-wider">LET'S CONNECT</h2>
        <p className="text-base font-mono text-muted-foreground mt-3">Open to opportunities, collaborations, and interesting problems</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="md:col-span-2 steam-panel border border-secondary/30 p-10 space-y-8 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-base font-mono text-secondary font-bold uppercase">Your Name</label>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                className="bg-black/50 border-white/10 font-mono text-base focus:border-primary/50 focus:ring-primary/20 rounded-sm h-12"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="text-base font-mono text-secondary font-bold uppercase">Email</label>
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@example.com" 
                className="bg-black/50 border-white/10 font-mono text-base focus:border-primary/50 focus:ring-primary/20 rounded-sm h-12"
                required
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-base font-mono text-secondary font-bold uppercase">Subject</label>
            <Input 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Let's build something great" 
              className="bg-black/50 border-white/10 font-mono text-base focus:border-primary/50 focus:ring-primary/20 rounded-sm h-12"
              required
            />
          </div>

          <div className="space-y-3">
            <label className="text-base font-mono text-secondary font-bold uppercase">Message</label>
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, idea, or opportunity..." 
              className="bg-black/50 border-white/10 font-mono text-base focus:border-primary/50 focus:ring-primary/20 rounded-sm min-h-[180px]"
              required
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 rounded-sm h-13 font-mono font-bold text-base tracking-widest transition-all duration-300 hover:shadow-[0_0_12px_rgba(255,107,26,0.3)]"
          >
            {isSubmitting ? (
              <span className="animate-pulse">SENDING...</span>
            ) : (
              <span className="flex items-center justify-center gap-3">
                SEND MESSAGE <Send className="w-5 h-5" />
              </span>
            )}
          </Button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <div className="steam-panel border border-primary/30 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-mono font-bold text-foreground text-base mb-2">Email</h4>
                <a href="mailto:archisgokhale001@gmail.com" className="text-base text-primary hover:text-glow transition-all">
                  archisgokhale001@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="steam-panel border border-secondary/30 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-mono font-bold text-foreground text-base mb-2">Phone</h4>
                <a href="tel:+918698762960" className="text-base text-secondary hover:text-glow-secondary transition-all">
                  +91 86987 62960
                </a>
              </div>
            </div>
          </div>

          <div className="steam-panel border border-accent/30 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-mono font-bold text-foreground text-base mb-2">Location</h4>
                <p className="text-base text-accent">Pune, India</p>
              </div>
            </div>
          </div>

          <div className="steam-panel border border-border/30 p-6 rounded-lg">
            <h4 className="font-mono font-bold text-muted-foreground text-base mb-4">SOCIAL</h4>
            <div className="space-y-3">
              <a href="https://linkedin.com/in/archisgokhale" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base text-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/ArchisGokhale" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-base text-foreground hover:text-secondary transition-colors">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
