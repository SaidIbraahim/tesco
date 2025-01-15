import { Building, Lightbulb, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Construction",
    description:
      "Full-service construction solutions for commercial and residential projects.",
    icon: Building,
  },
  {
    title: "Electrical Solutions",
    description:
      "Comprehensive electrical engineering and installation services.",
    icon: Lightbulb,
  },
  {
    title: "Engineering Consultancy",
    description:
      "Expert engineering consultation and project management services.",
    icon: Wrench,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-tesco-red mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;