import { useState } from "react";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-medical-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">Contact Us</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 card-shadow flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg medical-gradient flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <a href="tel:+17135550192" className="text-sm text-muted-foreground hover:text-primary transition-colors">(713) 555-0192</a>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg medical-gradient flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email</p>
                <a href="mailto:info@drcarter.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@drcarter.com</a>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 card-shadow flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">WhatsApp</p>
                <a href="https://wa.me/17135550192" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Chat with us on WhatsApp</a>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 card-shadow space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
              <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
              <Input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
              <Textarea placeholder="How can we help you?" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <Button type="submit" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
