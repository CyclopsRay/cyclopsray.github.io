import React from 'react';

const Website = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">Your Name</span>
            
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#publications" className="text-gray-600 hover:text-gray-900">Publications</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="/cv.pdf" className="text-gray-600 hover:text-gray-900">CV</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#about" className="block py-2 text-gray-600">About</a>
              <a href="#publications" className="block py-2 text-gray-600">Publications</a>
              <a href="#projects" className="block py-2 text-gray-600">Projects</a>
              <a href="#blog" className="block py-2 text-gray-600">Blog</a>
              <a href="/cv.pdf" className="block py-2 text-gray-600">CV</a>
            </div>
          )}
        </div>
      </nav>

      {/* Friend Links Sidebar - Fixed position */}
      <div className="hidden lg:block fixed right-0 top-1/4 bg-white shadow-lg p-4 rounded-l-lg z-40">
        <h3 className="font-bold mb-4">Friends</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600 hover:text-blue-800">Friend 1</a></li>
          <li><a href="#" className="text-blue-600 hover:text-blue-800">Friend 2</a></li>
          <li><a href="#" className="text-blue-600 hover:text-blue-800">Friend 3</a></li>
        </ul>
      </div>

      {/* Main Content - Adjusted with top padding for fixed nav */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Yuqi Lei</h1>
            <p className="text-xl text-gray-600 mb-8">Ph.D. Student at Vanderbilt University</p>
            <p className="text-gray-600">Research interests: Spatial Transcriptomic • Single-Cell Sequencing • Deep Learning</p>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-gray-600 mb-6">
              My name is Yuqi, you can also call me Ryan.
              I'm a first year Ph.D. student in the Department of Computer Science at Vanderbilt University.
              I'm passionate about developing computational methods to analyze biological data and uncover the underlying mechanisms of complex biological systems.
              In my spare time, I enjoy playing guitar and piano, playing video games, and skiboarding.
            </p>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Publications</h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold mb-2">I'm working on it...</h3>
                <p className="text-gray-600 mb-2">Authors</p>
                <p className="text-gray-500 mb-4">Conference/Journal Name, Year</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">📄 PDF</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">💻 Code</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">🎥 Video</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">Project 1</h3>
                <p className="text-gray-600 mb-4">Project description</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">📂 Code</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">🔗 Demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
            <div className="space-y-8">
              <article className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2">Blog Post Title</h3>
                <p className="text-gray-500 mb-2">Posted on Date</p>
                <p className="text-gray-600 mb-4">Brief excerpt from the blog post...</p>
                <a href="#" className="text-blue-600 hover:text-blue-800">Read More →</a>
              </article>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="mailto:yuqi.lei@vanderbilt.edu">✉️ Email</a>
              <a href="https://github.com/cyclopsray">💻 GitHub</a>
              <a href="https://scholar.google.com/citations?hl=en&user=l8gKmBIAAAAJ">📚 Google Scholar</a>
            </div>
            <p>© 2025 Yuqi Lei. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Website;