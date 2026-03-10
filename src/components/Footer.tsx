import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="hero-gradient text-primary-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
              <span className="font-bold text-lg text-primary-foreground">D</span>
            </div>
            <span className="font-serif text-xl">Dr. Carter</span>
          </div>
          <p className="text-primary-foreground/70 text-sm font-sans">Compassionate, evidence-based medical care for you and your family.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 font-sans">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "About", "Services", "Testimonials", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-sans">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 font-sans">Contact</h4>
          <div className="space-y-2 text-sm text-primary-foreground/70 font-sans">
            <p>1234 Medical Center Blvd, Suite 200</p>
            <p>Houston, TX 77030</p>
            <p>(713) 555-0192</p>
            <p>info@drcarter.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/50 font-sans">
        <p>© 2026 Dr. James Carter. All rights reserved.</p>
        <p className="flex items-center gap-1">Made with <Heart className="w-3 h-3 fill-current" /> for better health</p>
      </div>
    </div>
  </footer>
);

export default Footer;
