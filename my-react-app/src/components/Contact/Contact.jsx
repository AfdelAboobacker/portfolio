function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-2xl">📧</div>
                <a href="mailto:afdelaboobacker7@gmail.com" className="text-purple-400 hover:text-purple-300">
                  afdelaboobacker7@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">📱</div>
                <a href="tel:8075187829" className="text-purple-400 hover:text-purple-300">
                  +91 8075187829
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">💼</div>
                <a 
                  href="https://www.linkedin.com/in/afdel-aboobacker-0a4244227/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl">💻</div>
                <a 
                  href="https://github.com/AfdelAboobacker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact



