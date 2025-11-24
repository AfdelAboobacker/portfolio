import { useState } from 'react'
import profileImage from './profile.jpg'

function Hero({ onResumeClick, scrollToSection }) {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-500/50 overflow-hidden shadow-2xl shadow-purple-500/20">
              {!imageError ? (
                <img 
                  src={profileImage} 
                  alt="Afdel Aboobacker" 
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white text-4xl font-bold">
                  AA
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full border-4 border-slate-900"></div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-purple-400">Afdel Aboobacker</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-8">
          MERN Stack Developer
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Passionate about building scalable web applications with modern technologies
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition"
          >
            View My Work
          </button>
          <button 
            onClick={onResumeClick}
            className="px-8 py-3 border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white rounded-lg font-semibold transition"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero


