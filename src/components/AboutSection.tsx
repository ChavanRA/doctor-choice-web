import { GraduationCap, Briefcase, ShieldCheck, Heart } from "lucide-react";

const highlights = [
  { icon: GraduationCap, title: "Education", text: "Harvard Medical School, Johns Hopkins Residency" },
  { icon: Briefcase, title: "Experience", text: "15+ years in Internal Medicine & Primary Care" },
  { icon: ShieldCheck, title: "Certifications", text: "ABIM Board Certified, ACLS, BLS Certified" },
  { icon: Heart, title: "Expertise", text: "Chronic Disease Management, Preventive Care, Cardiology" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">About the Doctor</p>
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">Dedicated to Your Health</h2>
        <p className="text-muted-foreground font-sans">
          Dr. James Carter is a board-certified internist committed to delivering evidence-based, compassionate medicine. He believes in building long-lasting relationships with patients and empowering them to take charge of their health.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h) => (
          <div key={h.title} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-shadow group">
            <div className="w-12 h-12 rounded-lg medical-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <h.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg text-foreground mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground font-sans">{h.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
