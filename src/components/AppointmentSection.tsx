import { useState } from "react";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const AppointmentSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Appointment request submitted! We'll contact you shortly.");
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <section id="appointment" className="py-20 md:py-28">
      <div className="container max-w-2xl">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Schedule a Visit</p>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">Book an Appointment</h2>
          <p className="text-muted-foreground font-sans">Fill out the form below and our team will get back to you to confirm your appointment.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 card-shadow space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
              <Input placeholder="John Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
              <Input type="email" placeholder="john@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
              <Input type="tel" placeholder="(713) 555-0192" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Date *</label>
              <Input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Message (optional)</label>
            <Textarea placeholder="Describe your symptoms or reason for visit..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>
          <Button type="submit" size="lg" className="w-full">
            <CalendarCheck className="w-5 h-5 mr-2" />
            Request Appointment
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
