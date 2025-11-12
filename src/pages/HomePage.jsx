import React from 'react'
import Footer from '../components/Footer'
import { motion, useInView } from 'framer-motion'

const HomePage = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Section - Pixel Perfect Match */}
      <div className="relative max-w-7xl mx-auto px-16 py-20">
        <div className="grid grid-cols-2 gap-24 items-center">
          {/* Left Side - Text Content with Blobs */}
          <div className="relative">
            {/* Large Purple/Lavender Blob - Exact from Figma */}
            <div 
              className="absolute -left-72 -top-56 w-[1100px] h-[600px] bg-[#c9a8f5]"
              style={{
                borderRadius: '48% 52% 45% 55% / 52% 48% 52% 48%',
                transform: 'rotate(-3deg)',
                zIndex: -2
              }}
            ></div>
            
            {/* Red/Pink Blob - Bottom Left - Exact from Figma */}
            <div 
              className="absolute -left-64 top-[280px] w-96 h-96 bg-gradient-to-br from-[#e85d75] via-[#df6078] to-[#d94967]"
              style={{
                borderRadius: '58% 42% 60% 40% / 48% 55% 45% 52%',
                transform: 'rotate(20deg)',
                zIndex: -1
              }}
            ></div>
            
            {/* Content - Exact Typography */}
            <div className="relative z-10 space-y-2">
              <h1 className="text-[3.75rem] font-black text-black leading-[1.05] tracking-tight">
                Find Your Perfect Job
              </h1>
              <h2 className="text-[3.25rem] font-semibold text-[#e85d75] leading-[1.05] tracking-tight">
                Instantly with AI..
              </h2>
              <p className="text-[1.3rem] text-black italic font-bold pt-3 leading-tight tracking-tight">
                One Stop Solution To All Your Job Related Needs !
              </p>
              
              {/* Buttons - Exact Styling */}
              <div className="flex gap-5 pt-10">
                <button className="bg-black text-white px-12 py-4 text-[1.1rem] font-bold hover:bg-gray-800 transition-all">
                  Upload Resume
                </button>
                <button className="border-2 border-[#c9a8f5] bg-[#e8d9f9] text-black px-12 py-4 text-[1.1rem] font-semibold hover:bg-[#d4b5f7] transition-all rounded-xl">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Hexagon - Pixel Perfect from Screenshot */}
          <div className="relative h-[500px] flex items-center justify-center">
            <svg viewBox="0 0 900 900" className="w-full h-full" style={{filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'}}>
              <defs>
                {/* Exact gradients matching the screenshot */}
                <linearGradient id="blackFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a1a" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                <linearGradient id="darkGrayFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4a4a4a" />
                  <stop offset="100%" stopColor="#3a3a3a" />
                </linearGradient>
                <linearGradient id="mediumGrayFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6a6a6a" />
                  <stop offset="100%" stopColor="#5a5a5a" />
                </linearGradient>
                <linearGradient id="lightGrayFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7a7a7a" />
                  <stop offset="100%" stopColor="#6a6a6a" />
                </linearGradient>
                {/* Text shadow effect */}
                <filter id="textShadow">
                  <feDropShadow dx="2" dy="2" stdDeviation="2" floodOpacity="0.5"/>
                </filter>
              </defs>
              
              {/* Back bottom faces (barely visible) */}
              <path 
                d="M 350 620 L 450 560 L 600 640 L 500 700 Z" 
                fill="#0a0a0a" 
                stroke="#000000" 
                strokeWidth="3"
              />
              
              {/* Left Face - ATS (Black/Darkest) */}
              <path 
                d="M 200 350 L 350 250 L 350 620 L 200 720 Z" 
                fill="url(#blackFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
              <text 
                x="275" 
                y="520" 
                fill="#e0e0e0" 
                fontSize="72" 
                fontWeight="700"
                fontFamily="Arial, sans-serif"
                textAnchor="middle"
                filter="url(#textShadow)"
              >
                ATS
              </text>
              
              {/* Top Face - Easy Job Fetch (Dark Gray) */}
              <path 
                d="M 350 250 L 600 350 L 600 520 L 350 420 Z" 
                fill="url(#darkGrayFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
              <text 
                x="450" 
                y="360" 
                fill="#e0e0e0" 
                fontSize="42" 
                fontWeight="700"
                fontFamily="Arial, sans-serif"
                textAnchor="middle"
                transform="rotate(-15 450 360)"
                filter="url(#textShadow)"
              >
                Easy
              </text>
              <text 
                x="450" 
                y="410" 
                fill="#e0e0e0" 
                fontSize="42" 
                fontWeight="700"
                fontFamily="Arial, sans-serif"
                textAnchor="middle"
                transform="rotate(-15 450 410)"
                filter="url(#textShadow)"
              >
                Job Fetch
              </text>
              
              {/* Right Face - Mock Quiz (Light Gray) */}
              <path 
                d="M 600 350 L 720 450 L 720 650 L 600 550 Z" 
                fill="url(#lightGrayFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
              <text 
                x="650" 
                y="480" 
                fill="#e0e0e0" 
                fontSize="46" 
                fontWeight="700"
                fontFamily="Arial, sans-serif"
                textAnchor="middle"
                transform="rotate(20 650 480)"
                filter="url(#textShadow)"
              >
                Mock
              </text>
              <text 
                x="650" 
                y="540" 
                fill="#e0e0e0" 
                fontSize="46" 
                fontWeight="700"
                fontFamily="Arial, sans-serif"
                textAnchor="middle"
                transform="rotate(20 650 540)"
                filter="url(#textShadow)"
              >
                Quiz
              </text>
              
              {/* Bottom Front Face - Interview Practice (Medium Gray) */}
              <path 
                d="M 350 620 L 600 520 L 720 650 L 600 720 L 350 720 Z" 
                fill="url(#mediumGrayFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
              <text 
                x="520" 
                y="630" 
                fill="#e0e0e0" 
                fontSize="40" 
                fontWeight="700"
                fontFamily="Arial, sans-serif"
                textAnchor="middle"
                transform="rotate(5 520 630)"
                filter="url(#textShadow)"
              >
                Interview
              </text>
              <text 
                x="520" 
                y="680" 
                fill="#e0e0e0" 
                fontSize="40" 
                fontWeight="700"
                fontFamily="Arial, sans-serif"
                textAnchor="middle"
                transform="rotate(5 520 680)"
                filter="url(#textShadow)"
              >
                Practice
              </text>
              
              {/* Bottom Left Face (Dark) */}
              <path 
                d="M 200 720 L 350 620 L 350 720 Z" 
                fill="#1a1a1a" 
                stroke="#000000" 
                strokeWidth="3"
              />
              
              {/* Bottom Right connecting face */}
              <path 
                d="M 600 720 L 720 650 L 720 720 Z" 
                fill="#2a2a2a" 
                stroke="#000000" 
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Video Demo Section with Purple Background and Wave */}
      <div className="relative bg-[#c9a8f5] py-20">
        {/* Wave Divider at Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,80 350,80 600,50 C850,20 1050,20 1200,50 L1200,0 L0,0 Z" fill="#ffffff"></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-12 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              See AIONERDS in Action
            </h2>
            <p className="text-xl text-white/90">
              Watch how our AI-powered platform transforms your job search experience in seconds
            </p>
          </div>

          {/* Browser Mockup */}
          <div className="relative max-w-5xl mx-auto">
            {/* Browser Window */}
            <div className="bg-white rounded-t-2xl shadow-2xl overflow-hidden">
              {/* Browser Controls */}
              <div className="bg-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded px-3 py-1 text-sm text-gray-600">
                    https://aionerds.co
                  </div>
                </div>
              </div>

              {/* Browser Content - Video Player */}
              <div className="bg-black aspect-video relative">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="https://via.placeholder.com/1200x675/1f2937/ffffff?text=AI+NERDS+Demo+Video"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider at Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,80 350,80 600,50 C850,20 1050,20 1200,50 L1200,0 L0,0 Z" fill="#c9a8f5"></path>
          </svg>
        </div>
      </div>

      {/* New Section - Job Seekers Quote with Interactive Effects */}
      <div className="relative bg-[#c9a8f5] py-24">
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-12 text-center">
          {/* Quote Text with Hover Effect */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight group">
              <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-white/90">
                " Job seekers spend countless hours
              </span>
              <br />
              <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-white/90">
                searching for roles that{" "}
              </span>
              <span className="inline-block text-red-500 transition-all duration-300 hover:scale-110 hover:text-red-400 font-extrabold">
                don't fit
              </span>
              <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-white/90">
                {" "}"
              </span>
            </h2>

            {/* Down Arrow Icon with Animation */}
            <div className="flex justify-center py-6">
              <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center animate-bounce hover:scale-110 transition-transform duration-300 cursor-pointer">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Main Heading with Reveal Effect */}
            <div className="pt-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-black leading-tight">
                <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-gray-800">
                  Here's how{" "}
                </span>
                <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-gray-800">
                  ' AI NERDS '
                </span>
                <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-gray-800">
                  {" "}changes
                </span>
                <br />
                <span className="inline-block transition-all duration-300 hover:scale-105 hover:text-gray-800">
                  that with AI
                </span>
              </h3>
            </div>
          </div>
        </div>

        {/* Wave Divider at Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,80 350,80 600,50 C850,20 1050,20 1200,50 L1200,0 L0,0 Z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>

      {/* AI Flow Steps Section - Animated */}
      <AIFlowStepsAnimated />

      {/* Feature Cards Section - Horizontal Scrolling */}
      <div className="relative bg-white py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-12">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-black mb-4">
              Everything you need to land your dream job
            </h2>
            <p className="text-xl text-gray-700">
              Powered by AI to make your job search smarter and faster
            </p>
          </div>
        </div>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll-left">
            {/* Card 1 - AI Resume Job Match */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-orange-400 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                AI Resume Job Match
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Upload your resume and find featured job roles that cater to your skill set.
              </p>
            </div>

            {/* Card 2 - ATS Resume Score */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                ATS Resume Score
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Get score and improvement suggestions to make your resume ATS friendly.
              </p>
            </div>

            {/* Card 3 - Mock Interview Practice */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2A3 3 0 0 1 15 5v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5 5 5 0 0 0 5-5h2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Mock Interview Practice
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Get score and improvement suggestions to make your resume ATS friendly.
              </p>
            </div>

            {/* Duplicate Cards for Seamless Loop */}
            {/* Card 1 - Duplicate */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-orange-400 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                AI Resume Job Match
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Upload your resume and find featured job roles that cater to your skill set.
              </p>
            </div>

            {/* Card 2 - Duplicate */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                ATS Resume Score
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Get score and improvement suggestions to make your resume ATS friendly.
              </p>
            </div>

            {/* Card 3 - Duplicate */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2A3 3 0 0 1 15 5v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5 5 5 0 0 0 5-5h2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Mock Interview Practice
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Get score and improvement suggestions to make your resume ATS friendly.
              </p>
            </div>

            {/* Card 4 - Job Alerts & Notifications */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Job Alerts & Notifications
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Instantly get notified about new matching jobs and important deadlines.
              </p>
            </div>

            {/* Card 5 - Application Tracker */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Application Tracker
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Track all your job submissions, see statuses, and follow up from one dashboard.
              </p>
            </div>

            {/* Card 6 - Company Insights */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Company Insights
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Explore company culture, salaries, and reviews for informed applications.
              </p>
            </div>

            {/* Duplicate New Cards for Seamless Loop */}
            {/* Card 4 - Duplicate */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Job Alerts & Notifications
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Instantly get notified about new matching jobs and important deadlines.
              </p>
            </div>

            {/* Card 5 - Duplicate */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-pink-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Application Tracker
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Track all your job submissions, see statuses, and follow up from one dashboard.
              </p>
            </div>

            {/* Card 6 - Duplicate */}
            <div className="flex-shrink-0 w-96 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Company Insights
              </h3>
              <p className="text-base text-gray-800 leading-relaxed">
                Explore company culture, salaries, and reviews for informed applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section - Animated */}
      <BottomCTASection />

      {/* Peer Reviews Section with Purple Wave Background */}
      <div className="relative bg-[#c9a8f5] py-24">
        {/* Wave Divider at Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,80 350,80 600,50 C850,20 1050,20 1200,50 L1200,0 L0,0 Z" fill="#ffffff"></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-12 pt-16">
          {/* Upload Resume Button */}
          <div className="flex justify-center mb-16">
            <button className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-12 py-5 rounded-full text-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Upload Resume
            </button>
          </div>

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white">
              Our Peer Reviews
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Review Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fadeInUp" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
                  MG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Martin Goutry</h3>
                  <p className="text-sm text-gray-600">Back-end developer at MyDonow</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising! &gt;&gt;"
              </p>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fadeInUp" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
                  SK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Sarah Kim</h3>
                  <p className="text-sm text-gray-600">Product Manager at TechCorp</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "AI NERDS transformed my job search completely. I found my dream role in just 2 weeks! The AI matching is incredibly accurate."
              </p>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fadeInUp" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
                  RP
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Raj Patel</h3>
                  <p className="text-sm text-gray-600">Software Engineer at StartupXYZ</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "The ATS score feature helped me optimize my resume. I started getting 3x more interview calls. Highly recommend!"
              </p>
            </div>

            {/* Review Card 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fadeInUp" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
                  EJ
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Emily Johnson</h3>
                  <p className="text-sm text-gray-600">UX Designer at CreativeHub</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Mock interview practice was a game changer. I felt so prepared and confident during my actual interviews!"
              </p>
            </div>

            {/* Review Card 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fadeInUp" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
                  DL
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">David Lee</h3>
                  <p className="text-sm text-gray-600">Data Analyst at DataCo</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "The job alerts kept me updated on perfect matches. I never missed an opportunity. Best job search tool ever!"
              </p>
            </div>

            {/* Review Card 6 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fadeInUp" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 shadow-lg">
                  AL
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">Anna Lopez</h3>
                  <p className="text-sm text-gray-600">Marketing Lead at BrandWorks</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "Company insights helped me make informed decisions. I knew exactly what to expect before applying. Amazing!"
              </p>
            </div>
          </div>
        </div>

        {/* Wave Divider at Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,80 350,80 600,50 C850,20 1050,20 1200,50 L1200,0 L0,0 Z" fill="#c9a8f5"></path>
          </svg>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Bottom CTA Section with Bounce Animation
const BottomCTASection = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.8 })

  const line1Words = ["Take", "your", "next", "career", "step"]
  const line2Words = ["faster,", "smarter,", "and", "easier"]

  return (
    <div className="relative bg-white py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-12 text-center">
        <h2 className="text-5xl font-bold text-black leading-tight">
          {/* First Line */}
          <div className="inline-block">
            {line1Words.map((word, index) => (
              <motion.span
                key={`line1-${index}`}
                className="inline-block mr-4"
                initial={{ y: 0 }}
                animate={isInView ? {
                  y: [0, -20, 0],
                } : { y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1], // Spring easing
                  times: [0, 0.5, 1]
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <br />
          {/* Second Line */}
          <div className="inline-block">
            {line2Words.map((word, index) => (
              <motion.span
                key={`line2-${index}`}
                className="inline-block mr-4"
                initial={{ y: 0 }}
                animate={isInView ? {
                  y: [0, -20, 0],
                } : { y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: (line1Words.length * 0.1) + (index * 0.1),
                  ease: [0.34, 1.56, 0.64, 1], // Spring easing
                  times: [0, 0.5, 1]
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h2>
      </div>
    </div>
  )
}

// FAQ Section Component - Animated
const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null)
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: "What is Laboro?",
      answer: "Laboro is an AI-powered job search platform that helps you find your perfect job match. We analyze your resume, skills, and preferences to connect you with the best opportunities from LinkedIn, Naukri, and other major job boards."
    },
    {
      question: "How can I find my next job on Laboro?",
      answer: "Simply upload your resume, and our AI will analyze your skills and experience. You'll instantly receive personalized job recommendations that match your profile. You can also set up job alerts to get notified about new opportunities."
    },
    {
      question: "How accurate is Laboro's job-matching system?",
      answer: "Our AI-powered matching system has a 95% accuracy rate. We use advanced algorithms to analyze your skills, experience, and preferences, then match them with job requirements to ensure you only see the most relevant opportunities."
    },
    {
      question: "Can I customize my resume and cover letter for specific applications?",
      answer: "Yes! Laboro provides AI-powered resume optimization and cover letter generation. You can customize both for each application, and our ATS score feature helps ensure your resume passes applicant tracking systems."
    },
    {
      question: "Can I track which jobs I've applied to through Laboro?",
      answer: "Absolutely! Our Application Tracker feature lets you monitor all your job submissions in one dashboard. You can see application statuses, set follow-up reminders, and track your entire job search journey."
    },
    {
      question: "Is there a limit to how many jobs Laboro can apply for on my behalf?",
      answer: "No limits! You can apply to as many jobs as you want. Our AI will help you identify the best matches and can even auto-apply to jobs that fit your criteria, saving you countless hours of manual applications."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="relative bg-[#c9a8f5] pt-12 pb-24" ref={ref}>
      <div className="max-w-5xl mx-auto px-12">
        {/* FAQ Icon and Heading - Animated */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="flex justify-center mb-6">
            <motion.div 
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.8, ease: 'backOut', delay: 0.2 }}
            >
              <div className="text-8xl font-black text-gray-800">?</div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
            </motion.div>
          </div>
          <h2 className="text-5xl font-bold text-white">F.A.Q</h2>
        </motion.div>

        {/* FAQ Accordion - Staggered Animation */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.4 + (index * 0.15),
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
                animate={{
                  scale: openIndex === index ? 1.02 : 1,
                  boxShadow: openIndex === index 
                    ? '0 20px 40px rgba(0,0,0,0.15)' 
                    : '0 10px 25px rgba(0,0,0,0.1)'
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                whileHover={{ 
                  boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                  y: -2
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/95 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {index + 1}. {faq.question}
                  </span>
                  <motion.svg
                    className="w-6 h-6 text-gray-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </motion.svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ 
                    height: { duration: 0.3, ease: 'easeInOut' },
                    opacity: { duration: 0.2, delay: openIndex === index ? 0.1 : 0 }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6 pt-2">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  )
}

// Animated AI Flow Steps Component
const AIFlowStepsAnimated = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const steps = [
    {
      id: 1,
      gradient: 'from-green-400 to-green-500',
      icon: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
      text: 'Upload your resume once — let AI analyze your skills and experience.',
      align: 'left', // First box on left
      delay: 0.2
    },
    {
      id: 2,
      gradient: 'from-blue-500 to-purple-600',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      text: 'Get AI-filtered job recommendations from LinkedIn, Naukri & more.',
      align: 'right', // Second box on right
      delay: 0.4
    },
    {
      id: 3,
      gradient: 'from-purple-500 to-pink-600',
      icon: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
      text: 'Improve your resume with ATS score insights and tailored suggestions.',
      align: 'left', // Third box on left
      delay: 0.6
    },
    {
      id: 4,
      gradient: 'from-red-500 to-orange-500',
      icon: 'M12 2A3 3 0 0 1 15 5v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5 5 5 0 0 0 5-5h2z',
      text: 'Prepare with AI — practice interviews and enhance communication.',
      align: 'right', // Fourth box on right
      delay: 0.8
    }
  ]

  return (
    <div className="relative bg-white py-12" ref={ref}>
      <div className="max-w-5xl mx-auto px-12">
        <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl overflow-hidden">
          
          {/* Animated Connecting Line - Ends at AI orb */}
          <motion.div 
            className="absolute left-1/2 top-20 w-0.5 bg-gradient-to-b from-green-400 via-blue-500 via-purple-500 to-red-500 transform -translate-x-1/2"
            style={{ height: 'calc(100% - 320px)' }}
            initial={{ scaleY: 0, transformOrigin: 'top' }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
          />

          {/* Animated Steps - Zigzag Pattern with Horizontal Connectors */}
          <div className="relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative mb-16">
                {/* Horizontal Connector Line from box to center */}
                <motion.div
                  className={`absolute top-1/2 ${step.align === 'right' ? 'right-1/2 left-0' : 'left-1/2 right-0'} h-0.5 bg-gray-600 transform -translate-y-1/2 z-0`}
                  initial={{ scaleX: 0, transformOrigin: step.align === 'right' ? 'right' : 'left' }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5, delay: step.delay + 0.3, ease: 'easeOut' }}
                />
                
                {/* Container for zigzag layout */}
                <div className={`flex items-center ${step.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <motion.div
                    className={`w-1/2 ${step.align === 'right' ? 'pl-8' : 'pr-8'}`}
                    initial={{ 
                      opacity: 0,
                      x: step.align === 'right' ? 100 : -100,
                      y: 20
                    }}
                    animate={isInView ? {
                      opacity: 1,
                      x: 0,
                      y: 0
                    } : {
                      opacity: 0,
                      x: step.align === 'right' ? 100 : -100,
                      y: 20
                    }}
                    transition={{
                      duration: 0.6,
                      delay: step.delay,
                      ease: [0.25, 0.1, 0.25, 1],
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    <motion.div 
                      className={`relative z-10 bg-gradient-to-r ${step.gradient} text-white px-8 py-4 rounded-2xl shadow-lg`}
                      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d={step.icon}/>
                        </svg>
                        <p className="text-base font-semibold leading-snug">
                          {step.text}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Icon at Bottom - Animated */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 1.2, ease: 'backOut' }}
          >
            <motion.div 
              className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl"
              animate={{ 
                boxShadow: [
                  '0 0 20px rgba(74, 222, 128, 0.5)',
                  '0 0 40px rgba(59, 130, 246, 0.8)',
                  '0 0 20px rgba(74, 222, 128, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </motion.div>
          </motion.div>

          {/* Bottom Description Text - Animated */}
          <motion.div 
            className="text-center border-t border-gray-700 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <p className="text-gray-300 text-base leading-relaxed max-w-3xl mx-auto">
              Fully AI-powered job-matching and preparation platform — from resume upload to personalized job search and interview readiness. So you can focus on growing your career while AI NERDS finds the right job for you.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
