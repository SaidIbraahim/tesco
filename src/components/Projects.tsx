import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    description: "A state-of-the-art office building with sustainable features",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    completedDate: "March 2024",
    category: "Commercial"
  },
  {
    id: 2,
    title: "Residential Tower",
    description: "Luxury residential high-rise with premium amenities",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
    completedDate: "January 2024",
    category: "Residential"
  },
  {
    id: 3,
    title: "Industrial Complex",
    description: "Modern manufacturing facility with advanced infrastructure",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
    completedDate: "December 2023",
    category: "Industrial"
  },
  {
    id: 4,
    title: "Shopping Mall",
    description: "Contemporary shopping center with innovative design",
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4",
    completedDate: "November 2023",
    category: "Commercial"
  }
];

const Projects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardHeader>
                    <div className="relative h-48 w-full mb-4 overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Completed: {project.completedDate}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{project.description}</p>
                    <span className="inline-block mt-2 px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
                      {project.category}
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;