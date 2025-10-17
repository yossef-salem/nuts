import { Award, TrendingDown, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Award,
    title: "High Precision & Quality",
    description: "Certified quality standards for every product we trade",
  },
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    description: "Competitive pricing through strategic partnerships",
  },
  {
    icon: MapPin,
    title: "Logistics Hub",
    description: "Global distribution network for timely delivery",
  },
  {
    icon: Clock,
    title: "Great History",
    description: "Years of excellence in international nut trading",
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            About World of Nuts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in international nut trading
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              World of Nuts is a leading international trading company specializing in 
              premium nuts, dried fruits, and seeds. With our commitment to quality and 
              excellence, we connect producers and consumers across the globe.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our expertise in logistics, quality control, and market knowledge ensures 
              that every product meets the highest standards. We work directly with 
              trusted suppliers and implement rigorous quality assurance processes to 
              deliver the finest nuts and dried fruits to our customers worldwide.
            </p>
          </div>

          <div className="aspect-video bg-gradient-to-br from-secondary/30 to-accent/30 rounded-2xl flex items-center justify-center">
            <span className="text-8xl md:text-9xl">🌍</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
