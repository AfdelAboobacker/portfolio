function Projects() {
  const projects = [
    {
      title: 'Sign Language Interpreter ',
      description: 'Translated between sign language and spoken or written language in real time, ensuring clear, accurate, and culturally sensitive communication. Facilitated smooth interaction between deaf and hearing individuals, supported inclusive learning in educational environments, and assisted in professional settings by helping participants fully understand discussions, instructions, and presentations.',
      tech: 'Python, Visual Studio Code, Webcam, Microphone setup, Transcription tools, Note-taking apps',
    },
    {
      title: 'Blood Bank Management System',
      description: 'Developed a comprehensive Blood Bank Management System website to manage donor, recipient, and blood inventory records efficiently. Designed and implemented a secure backend using Oracle Database for reliable data storage and retrieval. Added key features such as donor registration, blood request handling, and admin monitoring to streamline operations and improve blood availability management.',
      tech: 'HTML, CSS, JavaScript, Oracle Database, SQL, PHP (or your backend language), VS Code',
    },
    {
      title: 'Cartify – Front-end E-Commerce Website',
      description: 'Cartify is a responsive, front-end e-commerce website designed to showcase products, promotions, and seasonal collections. The homepage highlights super-value deals, featured products, and a modern design layout. The site also includes navigation links for “Shop”, “About Us”, and “Contact”, along with sections for free shipping, customer support, and promotional offers. The design emphasizes visual appeal and user-friendly browsing, making it ideal for a fashion or retail storefront.',
      tech: 'HTML5, CSS3, JavaScript',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            console.log('Rendering project:', project.title, 'Index:', index)
            return (
            <div
              key={index}
              className="bg-slate-900/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="text-sm text-purple-300">{project.tech}</div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects

