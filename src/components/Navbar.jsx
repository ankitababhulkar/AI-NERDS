import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ChatIcon from '../assets/chat-icon.svg'

const Navbar = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('/')

  // Update active tab based on current route
  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location])

  return (
    <nav className="w-full bg-white px-12 py-6 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <div className="text-4xl font-bold text-black tracking-wide">
        LOGO
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-12">
        <a 
          href="/" 
          className={`relative text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === '/' 
              ? 'bg-[#e8d9f9] text-black' 
              : 'text-black hover:bg-[#e8d9f9] hover:text-black'
          }`}
        >
          Home
          {activeTab === '/' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a8f5] rounded-full"></span>
          )}
        </a>
        <a 
          href="/upload" 
          className={`relative text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === '/upload' 
              ? 'bg-[#e8d9f9] text-black' 
              : 'text-black hover:bg-[#e8d9f9] hover:text-black'
          }`}
        >
          Upload Resume
          {activeTab === '/upload' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a8f5] rounded-full"></span>
          )}
        </a>
        <a 
          href="/dashboard" 
          className={`relative text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === '/dashboard' 
              ? 'bg-[#e8d9f9] text-black' 
              : 'text-black hover:bg-[#e8d9f9] hover:text-black'
          }`}
        >
          Dashboard
          {activeTab === '/dashboard' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a8f5] rounded-full"></span>
          )}
        </a>
        <a 
          href="/news" 
          className={`relative text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
            activeTab === '/news' 
              ? 'bg-[#e8d9f9] text-black' 
              : 'text-black hover:bg-[#e8d9f9] hover:text-black'
          }`}
        >
          AI News
          {activeTab === '/news' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a8f5] rounded-full"></span>
          )}
        </a>
        
        {/* WeChat Style Icon */}
        <button className="p-2 hover:bg-[#e8d9f9] rounded-full transition-all duration-300 hover:scale-110">
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
