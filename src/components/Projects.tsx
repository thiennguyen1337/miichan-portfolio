const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Living Room Design",
      category: "Residential",
      description:
        "A contemporary living space that maximizes natural light and creates a cozy atmosphere for a young family.",
      year: "2024",
      tools: ["SketchUp", "AutoCAD", "Photoshop"],
    },
    {
      id: 2,
      title: "Sustainable Office Space",
      category: "Commercial",
      description:
        "An eco-friendly office design focusing on biophilic elements and sustainable materials.",
      year: "2024",
      tools: ["Revit", "SketchUp", "InDesign"],
    },
    {
      id: 3,
      title: "Small Apartment Optimization",
      category: "Residential",
      description:
        "Creative space planning for a 400 sq ft studio apartment, maximizing functionality and storage.",
      year: "2023",
      tools: ["AutoCAD", "SketchUp", "Illustrator"],
    },
    {
      id: 4,
      title: "Café Interior Concept",
      category: "Hospitality",
      description:
        "A warm and inviting café design that encourages community gathering and relaxation.",
      year: "2023",
      tools: ["SketchUp", "Photoshop", "Hand Sketching"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A collection of academic and personal projects showcasing my design
            process and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-w-16 aspect-h-10 bg-neutral-200">
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-primary-100 to-accent-100">
                  <p className="text-neutral-500">Project Image</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-primary-800 mb-3">
                  {project.title}
                </h3>

                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="border-t pt-4">
                  <p className="text-sm text-neutral-500 mb-2">Tools Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs bg-accent-100 text-accent-700 px-2 py-1 rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600">
            More projects available upon request
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
