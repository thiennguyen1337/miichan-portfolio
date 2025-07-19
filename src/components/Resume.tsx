const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Interior Design",
      school: "University Name",
      period: "2022 - 2026 (Expected)",
      details:
        "Relevant Coursework: Space Planning, Color Theory, Materials & Finishes, Sustainable Design, CAD & 3D Modeling",
    },
  ];

  const experience = [
    {
      title: "Design Intern",
      company: "Local Design Studio",
      period: "Summer 2024",
      responsibilities: [
        "Assisted senior designers with space planning and material selection",
        "Created technical drawings using AutoCAD and SketchUp",
        "Participated in client meetings and design presentations",
        "Researched sustainable materials and vendors",
      ],
    },
    {
      title: "Freelance Design Assistant",
      company: "Various Residential Projects",
      period: "2023 - Present",
      responsibilities: [
        "Helped homeowners with room layouts and color schemes",
        "Created mood boards and design presentations",
        "Assisted with furniture selection and space optimization",
      ],
    },
  ];

  const awards = [
    "Dean's List - Fall 2023, Spring 2024",
    "Student Design Competition - 2nd Place (2024)",
    "Sustainable Design Award - University Project (2023)",
  ];

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
            Resume
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            My educational background and professional experience in interior
            design
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Full Resume
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-primary-700 mb-6">
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-6 p-6 bg-neutral-50 rounded-lg">
                <h4 className="text-xl font-semibold text-primary-800">
                  {edu.degree}
                </h4>
                <p className="text-primary-600 font-medium">{edu.school}</p>
                <p className="text-neutral-500 mb-3">{edu.period}</p>
                <p className="text-neutral-600 text-sm">{edu.details}</p>
              </div>
            ))}

            {/* Awards */}
            <h3 className="text-2xl font-semibold text-primary-700 mb-6 mt-8">
              Awards & Recognition
            </h3>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <p className="text-neutral-600">{award}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-primary-700 mb-6">
              Experience
            </h3>
            {experience.map((exp, index) => (
              <div key={index} className="mb-8 p-6 bg-neutral-50 rounded-lg">
                <h4 className="text-xl font-semibold text-primary-800">
                  {exp.title}
                </h4>
                <p className="text-primary-600 font-medium">{exp.company}</p>
                <p className="text-neutral-500 mb-4">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-neutral-600 text-sm">{resp}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
