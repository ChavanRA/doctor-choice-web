import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Clinic", href: "#clinic" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg medical-gradient flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <span className="font-serif text-xl text-foreground">Dr. Carter</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button asChild>
            <a href="#appointment">
              <Phone className="w-4 h-4 mr-2" />
              Book Appointment
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b pb-4">
          <div className="container flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary py-2">
                {l.label}
              </a>
            ))}
            <Button asChild className="w-full mt-2">
              <a href="#appointment" onClick={() => setOpen(false)}>Book Appointment</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
