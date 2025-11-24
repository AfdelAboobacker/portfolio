function Skills() {
  const skills = [
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express.js', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'HTML/CSS', icon: '🎨' },
    { name: 'Git', icon: '🔀' },
    { name: 'REST APIs', icon: '🌐' },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition text-center"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <div className="text-white font-semibold">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills



