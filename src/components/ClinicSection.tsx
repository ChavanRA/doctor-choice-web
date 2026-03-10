import { MapPin, Clock, Phone as PhoneIcon } from "lucide-react";
import clinicImg from "@/assets/clinic-interior.jpg";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const ClinicSection = () => (
  <section id="clinic" className="py-20 md:py-28 bg-medical-light">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Visit Us</p>
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">Our Clinic</h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <img src={clinicImg} alt="Modern medical clinic interior" className="rounded-xl w-full h-60 object-cover card-shadow" />
          <div className="bg-card rounded-xl p-6 card-shadow space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Address</p>
                <p className="text-sm text-muted-foreground">1234 Medical Center Blvd, Suite 200, Houston, TX 77030</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">(713) 555-0192</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">Working Hours</p>
                {hours.map((h) => (
                  <p key={h.day} className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{h.day}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden card-shadow min-h-[400px]">
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.123456789!2d-95.3980!3d29.7100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQyJzM2LjAiTiA5NcKwMjMnNTIuOCJX!5e0!3m2!1sen!2sus!4v1234567890"
            className="w-full h-full min-h-[400px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ClinicSection;
