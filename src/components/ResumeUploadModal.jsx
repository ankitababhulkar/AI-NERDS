import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ResumeUploadModal = ({ isOpen, onClose }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    
    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleFileSelect = (file) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    const maxSize = 10 * 1024 * 1024 // 10MB

    if (!validTypes.includes(file.type)) {
      alert('Please upload a PDF, DOC, or DOCX file')
      return
    }

    if (file.size > maxSize) {
      alert('File size must be less than 10MB')
      return
    }

    setSelectedFile(file)
    console.log('File selected:', file.name)
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileInputChange = (e) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[40px] shadow-2xl overflow-y-auto overflow-x-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Background Blobs - Exact from Reference */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Large Purple Blob - Top Right */}
              <div 
                className="absolute -right-40 -top-40 w-[650px] h-[650px] bg-[#c9a8f5] opacity-50"
                style={{
                  borderRadius: '48% 52% 45% 55% / 52% 48% 52% 48%',
                  transform: 'rotate(-10deg)',
                }}
              ></div>
              
              {/* Pink/Red Blob - Bottom Left */}
              <div 
                className="absolute -left-32 -bottom-32 w-[500px] h-[500px] bg-[#e85d75] opacity-60"
                style={{
                  borderRadius: '58% 42% 60% 40% / 48% 55% 45% 52%',
                  transform: 'rotate(20deg)',
                }}
              ></div>

              {/* Large Purple Blob - Bottom Right */}
              <div 
                className="absolute -right-24 -bottom-24 w-[550px] h-[550px] bg-[#c9a8f5] opacity-45"
                style={{
                  borderRadius: '45% 55% 50% 50% / 55% 45% 55% 45%',
                  transform: 'rotate(35deg)',
                }}
              ></div>

              {/* Small Purple Blob - Top Left */}
              <div 
                className="absolute -left-20 top-20 w-[300px] h-[300px] bg-[#c9a8f5] opacity-35"
                style={{
                  borderRadius: '50% 50% 45% 55% / 48% 52% 48% 52%',
                  transform: 'rotate(-25deg)',
                }}
              ></div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="relative z-10 px-16 py-20">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-6xl font-black text-black mb-6 tracking-tight">
                  Upload Your Resume
                </h1>
                <p className="text-3xl text-[#e85d75] italic font-bold">
                  Empower your job search-upload your resume and let AI find your perfect fit.
                </p>
              </div>

              {/* Upload Box */}
              <div className="max-w-4xl mx-auto mb-16">
                <div
                  className={`relative bg-white rounded-[32px] p-16 border-4 ${
                    isDragging ? 'border-[#e85d75] border-solid' : 'border-gray-300 border-dashed'
                  } transition-all duration-300 shadow-2xl`}
                  onDragEnter={handleDragEnter}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {/* Brain/AI Icon */}
                  <div className="flex justify-center mb-10">
                    <div className="w-28 h-28 bg-gradient-to-br from-pink-100 to-pink-50 rounded-[28px] flex items-center justify-center shadow-xl relative">
                      {/* Brain Icon SVG */}
                      <svg className="w-16 h-16 text-[#e85d75]" viewBox="0 0 64 64" fill="currentColor">
                        {/* Brain shape */}
                        <path d="M32 8 C20 8 12 16 12 28 C12 32 14 36 16 38 L16 48 C16 52 20 56 24 56 L40 56 C44 56 48 52 48 48 L48 38 C50 36 52 32 52 28 C52 16 44 8 32 8 Z" opacity="0.3"/>
                        {/* Left hemisphere */}
                        <path d="M20 20 Q16 24 16 28 Q16 32 18 36 L18 44 Q18 48 22 48 L28 48 L28 16 Q24 16 20 20 Z"/>
                        {/* Right hemisphere */}
                        <path d="M44 20 Q48 24 48 28 Q48 32 46 36 L46 44 Q46 48 42 48 L36 48 L36 16 Q40 16 44 20 Z"/>
                        {/* Neural connections */}
                        <circle cx="24" cy="24" r="2"/>
                        <circle cx="32" cy="20" r="2"/>
                        <circle cx="40" cy="24" r="2"/>
                        <circle cx="24" cy="32" r="2"/>
                        <circle cx="40" cy="32" r="2"/>
                        <circle cx="28" cy="38" r="2"/>
                        <circle cx="36" cy="38" r="2"/>
                        {/* Connection lines */}
                        <line x1="24" y1="24" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                        <line x1="32" y1="20" x2="40" y2="24" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                        <line x1="24" y1="32" x2="28" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                        <line x1="40" y1="32" x2="36" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                      </svg>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="text-center mb-10">
                    <h3 className="text-4xl font-bold text-black mb-5">
                      Drag & drop your resume
                    </h3>
                    <p className="text-xl text-gray-600 font-medium">
                      Supports PDF, DOC, and DOCX files up to 10MB
                    </p>
                  </div>

                  {/* Browse Button */}
                  <div className="flex flex-col items-center gap-5">
                    <button
                      onClick={handleBrowseClick}
                      className="bg-[#e85d75] hover:bg-[#d94967] text-white px-20 py-5 rounded-full text-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      Browse Files
                    </button>
                    <p className="text-gray-500 text-lg font-medium">
                      or drag and drop
                    </p>
                  </div>

                  {/* Hidden File Input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileInputChange}
                    className="hidden"
                  />

                  {/* Selected File Display */}
                  {selectedFile && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 p-5 bg-green-50 border-2 border-green-400 rounded-2xl"
                    >
                      <p className="text-green-700 font-bold text-center text-lg">
                        ✓ {selectedFile.name} selected
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Features Section */}
              <div className="grid grid-cols-3 gap-12 max-w-5xl mx-auto">
                {/* AI Analysis */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-[#e85d75] rounded-[24px] flex items-center justify-center shadow-xl">
                      {/* Circular arrow icon */}
                      <svg className="w-12 h-12 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4">
                        <path d="M32 12 A20 20 0 1 1 12 32" strokeLinecap="round"/>
                        <path d="M32 12 L32 4 M32 12 L40 12" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="32" cy="32" r="6" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-3">
                    AI Analysis
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We'll pull out your skills and experience
                  </p>
                </div>

                {/* Job Matching */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-[#8b7dd8] rounded-[24px] flex items-center justify-center shadow-xl">
                      {/* Target/bullseye icon */}
                      <svg className="w-12 h-12 text-white" viewBox="0 0 64 64" fill="currentColor">
                        <circle cx="32" cy="32" r="24" opacity="0.3"/>
                        <circle cx="32" cy="32" r="16" opacity="0.5"/>
                        <circle cx="32" cy="32" r="8"/>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-3">
                    Job Matching
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We'll Scout through millions of Jobs
                  </p>
                </div>

                {/* Instant Results */}
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-[#e85d75] rounded-[24px] flex items-center justify-center shadow-xl">
                      {/* Checkmark icon */}
                      <svg className="w-12 h-12 text-white" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 32 L26 46 L52 18"/>
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-black mb-3">
                    Instant Results
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    You'll get tailored recommendations fast
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResumeUploadModal
