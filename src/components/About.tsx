const About =() => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >
      <div className="max-w-4xl mx-auto px-4 animate-fadeInUp">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6 animate-text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full animate-scaleX"></div>
        </div>

        <div className="space-y-6">
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed transition-colors duration-300 hover:text-gray-900">
            Hello! I'm a <span className="font-semibold text-purple-600">Junior Test Engineer</span> with a strong interest in software quality and automation. I have experience working with testing frameworks like Jest, Cypress, and Selenium, and I'm passionate about ensuring applications are robust, reliable, and user-friendly.
          </p>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed transition-colors duration-300 hover:text-gray-900">
            I enjoy collaborating with developers and QA teams to write test cases, debug issues, and improve test coverage. I'm also learning frontend technologies like <span className="font-semibold text-purple-600">React</span> and <span className="font-semibold text-purple-600">Tailwind CSS</span> to better understand UI behavior and enhance my testing capabilities.
          </p>

          <p className="text-gray-800 text-lg md:text-xl leading-relaxed transition-colors duration-300 hover:text-gray-900">
            I'm eager to grow in the field of software testing and contribute to high-quality development workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;