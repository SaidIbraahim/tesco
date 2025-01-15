const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About TESCO</h2>
            <p className="text-gray-600 mb-6">
              For over a decade, TESCO (Tayo Engineering Solutions Co.) has been at
              the forefront of construction and engineering excellence. Our
              commitment to innovation, sustainability, and quality has made us a
              trusted partner in building the future.
            </p>
            <p className="text-gray-600">
              With a team of experienced professionals and a track record of
              successful projects, we continue to push boundaries and deliver
              exceptional results for our clients.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a"
              alt="TESCO Team"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;