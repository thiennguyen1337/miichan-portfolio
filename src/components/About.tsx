const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 bg-neutral-200 rounded-lg overflow-hidden">
              <div className="flex items-center justify-center h-96 bg-gradient-to-br from-primary-100 to-accent-100">
                <p className="text-neutral-500">Profile Photo</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                I&apos;m an interior design student currently pursuing
                my degree at Stephen F. Austin State University. My journey in design began with
                a fascination for how spaces can influence emotions and
                behaviors.
              </p>
              <p>
                Through my studies, I&apos;ve developed skills in space
                planning, color theory, material selection, and sustainable
                design practices. I believe that great design should be both
                beautiful and functional, creating spaces that truly enhance
                people&apos;s lives.
              </p>
              <p>
                My design philosophy centers around understanding the unique
                needs of each client and translating their vision into
                thoughtfully crafted spaces that reflect their personality and
                lifestyle.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary-700 mb-4">
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Space Planning",
                  "Color Theory",
                  "AutoCAD",
                  "SketchUp",
                  "Material Selection",
                  "Sustainable Design",
                  "Hand Sketching",
                  "Adobe Creative Suite",
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
