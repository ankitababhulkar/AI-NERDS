import React from 'react'

const HomePageHero = () => {
  return (
    <div className="relative bg-white overflow-hidden min-h-screen">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-12 py-24">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content with Blobs */}
          <div className="relative">
            {/* Large Purple Blob */}
            <div 
              className="absolute -left-48 -top-40 w-[850px] h-[550px] bg-[#c9a8f5] opacity-90"
              style={{
                borderRadius: '40% 60% 45% 55% / 50% 45% 55% 50%',
                transform: 'rotate(-5deg)'
              }}
            ></div>
            
            {/* Red/Pink Accent Blob */}
            <div 
              className="absolute -left-40 top-[340px] w-64 h-64 bg-gradient-to-br from-[#e85d75] to-[#d94967]"
              style={{
                borderRadius: '55% 45% 60% 40% / 45% 55% 45% 55%',
                transform: 'rotate(15deg)'
              }}
            ></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-3">
              <h1 className="text-[3.5rem] font-black text-black leading-[1.1] tracking-tight">
                Find Your Perfect Job
              </h1>
              <h2 className="text-[3rem] font-semibold text-[#e85d75] leading-[1.1]">
                Instantly with AI..
              </h2>
              <p className="text-[1.25rem] text-black italic font-semibold pt-2 leading-tight">
                One Stop Solution To All Your Job Related Needs !
              </p>
              
              {/* Buttons */}
              <div className="flex gap-4 pt-8">
                <button className="bg-black text-white px-11 py-3.5 text-[1.05rem] font-bold hover:bg-gray-800 transition-all shadow-lg">
                  Upload Resume
                </button>
                <button className="border-2 border-[#c9a8f5] bg-[#e8d9f9] text-black px-11 py-3.5 text-[1.05rem] font-semibold hover:bg-[#d4b5f7] transition-all rounded-xl shadow-md">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Hexagon */}
          <div className="relative h-[500px] flex items-center justify-center">
            <svg viewBox="0 0 700 700" className="w-full h-full drop-shadow-2xl">
              <defs>
                <linearGradient id="blackFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0a0a0a" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                <linearGradient id="darkGrayFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3a3a3a" />
                  <stop offset="100%" stopColor="#2a2a2a" />
                </linearGradient>
                <linearGradient id="mediumGrayFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5a5a5a" />
                  <stop offset="100%" stopColor="#4a4a4a" />
                </linearGradient>
                <linearGradient id="lightGrayFace" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#707070" />
                  <stop offset="100%" stopColor="#5a5a5a" />
                </linearGradient>
              </defs>
              
              {/* Back Bottom Face */}
              <path 
                d="M 250 520 L 350 460 L 500 540 L 400 600 Z" 
                fill="url(#blackFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
              
              {/* Left Face - ATS */}
              <path 
                d="M 200 280 L 350 200 L 350 460 L 200 540 Z" 
                fill="url(#blackFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
              <text 
                x="250" 
                y="390" 
                fill="white" 
                fontSize="48" 
                fontWeight="700"
                fontFamily="Arial, sans-serif"
                textAnchor="middle"
              >
                ATS
              </text>
              
              {/* Top Left Face - Easy Job Fetch */}
              <path 
                d="M 350 200 L 500 280 L 500 410 L 350 330 Z" 
                fill="url(#mediumGrayFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
              <text 
                x="405" 
                y="290" 
                fill="white" 
                fontSize="24" 
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                transform="rotate(-12 405 290)"
              >
                Easy
              </text>
              <text 
                x="395" 
                y="320" 
                fill="white" 
                fontSize="24" 
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                transform="rotate(-12 395 320)"
              >
                Job Fetch
              </text>
              
              {/* Top Right Face - Mock Quiz */}
              <path 
                d="M 500 280 L 580 350 L 580 500 L 500 430 Z" 
                fill="url(#lightGrayFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
              <text 
                x="525" 
                y="380" 
                fill="white" 
                fontSize="26" 
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                transform="rotate(18 525 380)"
              >
                Mock
              </text>
              <text 
                x="525" 
                y="415" 
                fill="white" 
                fontSize="26" 
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                transform="rotate(18 525 415)"
              >
                Quiz
              </text>
              
              {/* Bottom Left Face - Interview Practice */}
              <path 
                d="M 200 540 L 350 460 L 350 590 L 200 670 Z" 
                fill="url(#mediumGrayFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
              <text 
                x="255" 
                y="540" 
                fill="white" 
                fontSize="22" 
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                transform="rotate(-5 255 540)"
              >
                Interview
              </text>
              <text 
                x="255" 
                y="570" 
                fill="white" 
                fontSize="22" 
                fontWeight="600"
                fontFamily="Arial, sans-serif"
                transform="rotate(-5 255 570)"
              >
                Practice
              </text>
              
              {/* Bottom Right Face */}
              <path 
                d="M 350 590 L 500 540 L 580 600 L 430 650 Z" 
                fill="url(#darkGrayFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
              
              {/* Right Bottom Face */}
              <path 
                d="M 350 460 L 500 410 L 580 500 L 500 540 L 350 590 Z" 
                fill="url(#mediumGrayFace)" 
                stroke="#000000" 
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageHero
