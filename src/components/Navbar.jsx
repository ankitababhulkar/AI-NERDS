import React from 'react'
import ChatIcon from '../assets/chat-icon.svg'

const Navbar = () => {
  return (
    <nav className="w-full bg-white px-12 py-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-4xl font-bold text-black tracking-wide">
        LOGO
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-12">
        <a href="/" className="text-black text-lg font-medium hover:text-gray-600 transition-colors">
          Home
        </a>
        <a href="/upload" className="text-black text-lg font-medium hover:text-gray-600 transition-colors">
          Upload Resume
        </a>
        <a href="/dashboard" className="text-black text-lg font-medium hover:text-gray-600 transition-colors">
          Dashboard
        </a>
        <a href="/news" className="text-black text-lg font-medium hover:text-gray-600 transition-colors">
          AI News
        </a>
        
        {/* WeChat Style Icon */}
        <button className="p-2 hover:bg-gray-100 rounded-full transition-all">
          <img 
            src={ChatIcon} 
            alt="Chat" 
            className="w-10 h-10"
            style={{ imageRendering: 'crisp-edges' }}
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
