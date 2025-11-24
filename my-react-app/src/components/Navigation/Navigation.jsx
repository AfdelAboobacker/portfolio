function Navigation({ onResumeClick, scrollToSection }) {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-purple-400">Afdel Aboobacker</div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-purple-400 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-purple-400 transition">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-purple-400 transition">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-purple-400 transition">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-purple-400 transition">
              Contact
            </button>
          </div>
          <button 
            onClick={onResumeClick}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition"
          >
            View Resume
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation



