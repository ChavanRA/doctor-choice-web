import { Stethoscope, HeartPulse, Brain, Pill, Baby, Eye, Bone, Activity } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Check-ups", desc: "Comprehensive health examinations and preventive screenings." },
  { icon: HeartPulse, title: "Cardiology", desc: "Heart health evaluation, ECG, and cardiovascular risk management." },
  { icon: Brain, title: "Neurology", desc: "Diagnosis and treatment of neurological conditions and disorders." },
  { icon: Pill, title: "Chronic Disease", desc: "Management of diabetes, hypertension, and chronic conditions." },
  { icon: Baby, title: "Pediatric Care", desc: "Well-child visits, immunizations, and pediatric consultations." },
  { icon: Eye, title: "Diagnostics", desc: "Lab tests, imaging referrals, and comprehensive diagnostics." },
  { icon: Bone, title: "Orthopedics", desc: "Joint pain, sports injuries, and musculoskeletal assessments." },
  { icon: Activity, title: "Wellness Programs", desc: "Nutrition counseling, weight management, and lifestyle coaching." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-medical-light">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What We Offer</p>
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">Our Medical Services</h2>
        <p className="text-muted-foreground font-sans">
          We provide a wide range of medical services to address your healthcare needs with expertise and care.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all hover:-translate-y-1 group cursor-default">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:medical-gradient transition-colors">
              <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground font-sans">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
