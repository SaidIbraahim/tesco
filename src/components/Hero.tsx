import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
          Building a Sustainable Future Together
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeIn">
          Leading the way in construction and engineering excellence
        </p>
        <Button
          size="lg"
          className="bg-tesco-red hover:bg-red-600 text-white animate-fadeIn"
        >
          Explore Services
        </Button>
      </div>
    </div>
  );
};

export default Hero;