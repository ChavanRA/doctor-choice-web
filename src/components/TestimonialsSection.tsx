import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "Dr. Carter is the most thorough and caring doctor I've ever had. He takes the time to listen and explain everything clearly.", rating: 5 },
  { name: "Robert K.", text: "After years of managing my diabetes poorly, Dr. Carter helped me get my health back on track. I'm incredibly grateful.", rating: 5 },
  { name: "Emily T.", text: "The clinic is clean, modern, and the staff is wonderful. Wait times are minimal and appointments always feel unhurried.", rating: 5 },
  { name: "Michael D.", text: "Highly recommend Dr. Carter for anyone looking for a genuine, knowledgeable physician. Five stars across the board!", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">What Our Patients Say</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card rounded-xl p-8 card-shadow relative">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground font-sans mb-6 italic">"{r.text}"</p>
            <p className="font-semibold text-foreground">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
