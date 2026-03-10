import { CalendarCheck, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorImg from "@/assets/doctor-portrait.jpg";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10K+", label: "Happy Patients" },
  { icon: CalendarCheck, value: "98%", label: "Satisfaction" },
];

const HeroSection = () => (
  <section id="home" className="pt-20 md:pt-24">
    <div className="hero-gradient text-primary-foreground">
      <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-in-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70 mb-4">
            Trusted Healthcare
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Dr. James Carter
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 font-sans">
            Board-Certified Internal Medicine Specialist
          </p>
          <p className="text-primary-foreground/70 mb-8 font-sans max-w-lg">
            Providing compassionate, patient-centered care with over 15 years of medical expertise. Your health and well-being are my top priority.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="#appointment">Book Appointment</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src={doctorImg}
            alt="Dr. James Carter – Internal Medicine Specialist"
            className="w-72 md:w-96 rounded-2xl shadow-2xl object-cover aspect-[3/4]"
          />
        </div>
      </div>
    </div>
    {/* Stats bar */}
    <div className="container -mt-10 relative z-10">
      <div className="bg-card rounded-2xl card-shadow grid grid-cols-3 divide-x">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center py-6 md:py-8 gap-1">
            <s.icon className="w-6 h-6 text-primary mb-1" />
            <span className="text-2xl md:text-3xl font-bold text-foreground font-serif">{s.value}</span>
            <span className="text-xs md:text-sm text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
