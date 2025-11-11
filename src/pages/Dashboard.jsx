import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('job-fetch')
  const [apiKey, setApiKey] = useState('')
  const [fulltime, setFulltime] = useState('Fulltime')
  const [experience, setExperience] = useState('No_experience')
  const [timeframe, setTimeframe] = useState('Today')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Set page title
  useEffect(() => {
    document.title = 'Dashboard - AI NERDS'
  }, [])

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Hamburger Menu Button - Repositions based on sidebar state */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`fixed z-50 p-3 bg-[#c9a8f5] text-white rounded-lg shadow-lg hover:bg-[#b896e8] transition-all duration-500 hover:scale-110 ${
          sidebarOpen 
            ? 'top-4 left-4' // Inside sidebar at top when open
            : 'top-4 left-4' // Top-left corner beside logo when sidebar is closed
        }`}
        aria-label="Toggle Sidebar"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Left Sidebar - Purple Background */}
      <div className={`bg-[#c9a8f5] text-white flex flex-col transition-all duration-500 ease-in-out relative ${
        sidebarOpen ? 'w-72' : 'w-0'
      } overflow-hidden`}>
        {/* Spacer for hamburger menu when sidebar is open */}
        {sidebarOpen && <div className="h-16"></div>}
        
        {/* User Profile Section */}
        <div className="p-6 border-b border-purple-400">
          <div className="flex items-center gap-4 group cursor-pointer hover:bg-purple-300 hover:bg-opacity-30 p-2 rounded-lg transition-all duration-300">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 animate-pulse">
              G
            </div>
            <div>
              <h3 className="text-lg font-bold group-hover:text-white transition-colors">Guest</h3>
              <p className="text-sm text-purple-200 group-hover:text-white transition-colors">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6">
          {/* Job Fetch - Active */}
          <button
            onClick={() => setActiveTab('job-fetch')}
            className={`group w-full px-6 py-4 flex items-center gap-3 transition-all duration-300 relative ${
              activeTab === 'job-fetch' 
                ? 'bg-pink-400 text-white shadow-lg scale-105' 
                : 'text-white hover:bg-purple-300 hover:pl-8 hover:shadow-md'
            }`}
          >
            {activeTab === 'job-fetch' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
            )}
            <svg className={`w-6 h-6 transition-transform duration-300 ${activeTab === 'job-fetch' ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-lg font-semibold">Job Fetch</span>
          </button>

          {/* ATS Review */}
          <button
            onClick={() => setActiveTab('ats-review')}
            className={`group w-full px-6 py-4 flex items-center gap-3 transition-all duration-300 relative ${
              activeTab === 'ats-review' 
                ? 'bg-pink-400 text-white shadow-lg scale-105' 
                : 'text-white hover:bg-purple-300 hover:pl-8 hover:shadow-md'
            }`}
          >
            {activeTab === 'ats-review' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
            )}
            <svg className={`w-6 h-6 transition-transform duration-300 ${activeTab === 'ats-review' ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
            <span className="text-lg font-semibold">ATS Review</span>
          </button>

          {/* AI Mock Quiz */}
          <button
            onClick={() => setActiveTab('mock-quiz')}
            className={`group w-full px-6 py-4 flex items-center gap-3 transition-all duration-300 relative ${
              activeTab === 'mock-quiz' 
                ? 'bg-pink-400 text-white shadow-lg scale-105' 
                : 'text-white hover:bg-purple-300 hover:pl-8 hover:shadow-md'
            }`}
          >
            {activeTab === 'mock-quiz' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
            )}
            <svg className={`w-6 h-6 transition-transform duration-300 ${activeTab === 'mock-quiz' ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z"/>
            </svg>
            <span className="text-lg font-semibold">AI Mock Quiz</span>
          </button>

          {/* AI HR Interview */}
          <button
            onClick={() => setActiveTab('hr-interview')}
            className={`group w-full px-6 py-4 flex items-center gap-3 transition-all duration-300 relative ${
              activeTab === 'hr-interview' 
                ? 'bg-pink-400 text-white shadow-lg scale-105' 
                : 'text-white hover:bg-purple-300 hover:pl-8 hover:shadow-md'
            }`}
          >
            {activeTab === 'hr-interview' && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white animate-pulse"></div>
            )}
            <svg className={`w-6 h-6 transition-transform duration-300 ${activeTab === 'hr-interview' ? 'scale-110' : 'group-hover:scale-110 group-hover:rotate-12'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2A3 3 0 0 1 15 5v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5 5 5 0 0 0 5-5h2z"/>
            </svg>
            <span className="text-lg font-semibold">AI HR Interview</span>
          </button>
        </nav>

        {/* Collapse Button at Bottom of Sidebar */}
        <div className="p-4 border-t border-purple-400">
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-full py-3 px-4 bg-purple-300 hover:bg-purple-400 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-white font-semibold hover:scale-105 shadow-md hover:shadow-lg"
            aria-label="Collapse Sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Collapse</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 p-12 transition-all duration-500 ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-black mb-3">Welcome, Guest !</h1>
          <p className="text-lg text-gray-700">
            Find personalized job recommendations tailored to your skills. Upload your <span className="font-semibold">resume</span> and watch our AI do it's magic.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
          {/* API Key Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter your Gemini API Key..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-6 py-4 bg-gray-700 text-white rounded-lg text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <p className="text-sm text-gray-400 mt-2">
              Create your own Gemini API key from <span className="font-semibold">Google AI Studio</span>. <span className="underline cursor-pointer">Watch Video</span> to learn more.
            </p>
          </div>

          {/* Filter Dropdowns and Search Button */}
          <div className="flex gap-4 items-center">
            {/* Fulltime Dropdown */}
            <select
              value={fulltime}
              onChange={(e) => setFulltime(e.target.value)}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
            >
              <option value="Fulltime">Fulltime</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>

            {/* Timeframe Dropdown */}
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
            >
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="All Time">All Time</option>
            </select>

            {/* Experience Dropdown */}
            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="px-6 py-3 bg-gray-700 text-white rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-400 cursor-pointer"
            >
              <option value="No_experience">No_experience</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>

            {/* Search Button */}
            <button className="px-10 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-lg font-bold hover:from-pink-500 hover:to-pink-600 transition-all flex items-center gap-2 ml-auto">
              SEARCH
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Job Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fadeInUp" style={{animationDelay: '0.1s', animationFillMode: 'backwards'}}>
            <h3 className="text-2xl font-bold text-black mb-2">Job Role Title</h3>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Company Name</h4>
            <p className="text-sm text-gray-600 mb-4">Bengaluru, In</p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              This company specializes in abcd products, providing great benefits to their employees and growing at a massive scale.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold text-gray-800">Read More</p>
                <p className="text-xs text-gray-500">Full Time · 2025-11-10</p>
              </div>
              <button className="group px-6 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-bold hover:from-pink-500 hover:to-pink-600 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
                Apply Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fadeInUp" style={{animationDelay: '0.2s', animationFillMode: 'backwards'}}>
            <h3 className="text-2xl font-bold text-black mb-2">Job Role Title</h3>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Company Name</h4>
            <p className="text-sm text-gray-600 mb-4">Bengaluru, In</p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              This company specializes in abcd products, providing great benefits to their employees and growing at a massive scale.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold text-gray-800">Read More</p>
                <p className="text-xs text-gray-500">Full Time · 2025-11-10</p>
              </div>
              <button className="group px-6 py-2 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-sm font-bold hover:from-pink-500 hover:to-pink-600 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
                Apply Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fadeInUp" style={{animationDelay: '0.3s', animationFillMode: 'backwards'}}>
            <h3 className="text-2xl font-bold text-black mb-2">Job Role Title</h3>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Company Name</h4>
            <p className="text-sm text-gray-600 mb-4">Bengaluru, In</p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              This company specializes in abcd products, providing great benefits to their employees and growing at a massive scale.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold text-gray-800">Read More</p>
                <p className="text-xs text-gray-500">Full Time · 2025-11-10</p>
              </div>
              <button className="group px-6 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
                Apply Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Job Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-fadeInUp" style={{animationDelay: '0.4s', animationFillMode: 'backwards'}}>
            <h3 className="text-2xl font-bold text-black mb-2">Job Role Title</h3>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Company Name</h4>
            <p className="text-sm text-gray-600 mb-4">Bengaluru, In</p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              This company specializes in abcd products, providing great benefits to their employees and growing at a massive scale.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-semibold text-gray-800">Read More</p>
                <p className="text-xs text-gray-500">Full Time · 2025-11-10</p>
              </div>
              <button className="group px-6 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 hover:scale-105 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
                Apply Now
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
