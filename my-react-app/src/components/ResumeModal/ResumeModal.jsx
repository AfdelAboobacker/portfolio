function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-purple-500/20">
          <h3 className="text-xl font-bold text-white">Resume</h3>
          <div className="flex gap-4">
            <a 
              href="/AFDEL-ABOOBACKERMern_Stack.pdf" 
              download
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white text-sm transition"
            >
              Download
            </a>
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition"
            >
              Close
            </button>
          </div>
        </div>
        <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
          <iframe 
            src="/AFDEL-ABOOBACKERMern_Stack.pdf" 
            className="w-full h-[80vh] border-0 rounded"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  )
}

export default ResumeModal



