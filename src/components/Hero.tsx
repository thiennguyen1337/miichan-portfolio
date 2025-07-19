const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-900 mb-6">
            Hi,
            <span className="block text-accent-600">I'm Thanh</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I am passionate about creating beautiful, functional spaces through
            thoughtful design and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Projects
            </a>
            <a
              href="#resume"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
