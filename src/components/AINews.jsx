import { useState, useEffect, useRef } from 'react'

const AINews = () => {
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [visibleNewsBoxes, setVisibleNewsBoxes] = useState([])
  const [visibleTopics, setVisibleTopics] = useState([])
  const [newsletterVisible, setNewsletterVisible] = useState(false)

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const newsRefs = useRef([]);
  const topicRefs = useRef([]);
  const newsletterRef = useRef(null);

  const API_KEY = "fae339e545184d04940612ef5c47c993"; // 
  const URL = `https://newsapi.org/v2/everything?q=artificial+intelligence&language=en&sortBy=publishedAt&pageSize=8&apiKey=${API_KEY}`;


  useEffect(() => {
    setIsVisible(true)
    const fetchNews = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching AI news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [])

  useEffect(() => {
    const observers = [];
    
    // Observe news boxes - reset on scroll
    newsRefs.current.forEach((box, index) => {
      if (box) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleNewsBoxes((prev) => [...new Set([...prev, index])]);
              } else {
                setVisibleNewsBoxes((prev) => prev.filter(i => i !== index));
              }
            });
          },
          { threshold: 0.2 }
        );
        
        observer.observe(box);
        observers.push(observer);
      }
    });

    // Observe trending topics - reset on scroll
    topicRefs.current.forEach((topic, index) => {
      if (topic) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleTopics((prev) => [...new Set([...prev, index])]);
              } else {
                setVisibleTopics((prev) => prev.filter(i => i !== index));
              }
            });
          },
          { threshold: 0.3 }
        );
        
        observer.observe(topic);
        observers.push(observer);
      }
    });

    // Observe newsletter section - reset on scroll
    if (newsletterRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setNewsletterVisible(true);
            } else {
              setNewsletterVisible(false);
            }
          });
        },
        { threshold: 0.3 }
      );
      
      observer.observe(newsletterRef.current);
      observers.push(observer);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [news])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Subscribed with email: ${email}`)
      setEmail('')
    }
  }

  const trendingTopics = [
    '#Remote Work',
    '#Machine Learning',
    '#React 18',
    '#Cybersecurity',
    '#Typescript',
    '#Data Analyst',
    '#AI Engineer'
  ]

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <style jsx>{`
        @keyframes slideInFromLeftMobile {
          from {
            opacity: 0;
            transform: translateX(-100px) rotate(-3deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }
        @keyframes slideInFromRightMobile {
          from {
            opacity: 0;
            transform: translateX(100px) rotate(3deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0deg);
          }
        }
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          70% {
            transform: scale(1.1) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8);
          }
          60% {
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* Background Blobs with Floating Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Purple Blob - Center */}
        <div 
          className="absolute left-1/2 top-[200px] -translate-x-1/2 w-[800px] h-[600px] bg-[#c9a8f5] opacity-40 animate-float"
          style={{
            borderRadius: '48% 52% 45% 55% / 52% 48% 52% 48%',
            transform: 'translateX(-50%) rotate(-5deg)',
            animation: 'float 6s ease-in-out infinite',
          }}
        ></div>
        
        {/* Pink/Red Blob - Bottom Left */}
        <div 
          className="absolute -left-20 bottom-[100px] w-[400px] h-[400px] bg-[#e85d75] opacity-50 animate-float-reverse"
          style={{
            borderRadius: '58% 42% 60% 40% / 48% 55% 45% 52%',
            transform: 'rotate(20deg)',
            animation: 'float-reverse 8s ease-in-out infinite',
          }}
        ></div>

        {/* Purple Blob - Bottom Right */}
        <div 
          className="absolute -right-20 bottom-[50px] w-[450px] h-[450px] bg-[#c9a8f5] opacity-35 animate-float-slow"
          style={{
            borderRadius: '45% 55% 50% 50% / 55% 45% 55% 45%',
            transform: 'rotate(35deg)',
            animation: 'float-slow 10s ease-in-out infinite',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
        {/* Header with Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl font-black text-black mb-6 tracking-tight hover:scale-105 transition-transform duration-300 cursor-default">
            AI & Tech News
          </h1>
          <p className="text-2xl text-[#e85d75] font-bold hover:text-[#d94967] transition-colors duration-300">
            "Stay ahead with updates on latest AI trends, live updated for you daily !"
          </p>
        </div>

        {/* News Cards Grid with Scroll-Triggered Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        {news.map((article, index) => {
          // Pattern: left, right, left, right, left, right, left, right...
          const isFromRight = index % 2 === 1;
          
          return (
          <div 
              key={index}
              ref={(el) => (newsRefs.current[index] = el)}
              className={`bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] group cursor-pointer border border-transparent hover:border-[#e85d75]/20`}
              style={{
                animation: visibleNewsBoxes.includes(index)
                  ? `${isFromRight ? 'slideInFromRightMobile' : 'slideInFromLeftMobile'} 0.8s ease-out forwards`
                  : 'none',
                opacity: visibleNewsBoxes.includes(index) ? 1 : 0
              }}
            >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-32 md:h-48 object-cover rounded-xl"
              />
            )}
            <div className="p-2 md:p-4 flex flex-col justify-between h-48 md:h-60">
              <h3 className="text-base md:text-xl font-bold text-black mb-2 md:mb-4 leading-tight group-hover:text-[#e85d75] transition-colors duration-300 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2 line-clamp-2 md:line-clamp-3">
                {article.description || "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 md:mt-4 inline-block text-indigo-600 text-sm md:text-base font-medium hover:text-indigo-800"
              >
                Read more →
              </a>
            </div>
          </div>
        )})}
      </div>

        {/* Newsletter Section with Scroll Animation */}
        <div 
          ref={newsletterRef}
          className="pt-10 text-center mb-20 px-4"
        >
          <h2 
            className="text-2xl md:text-4xl font-black text-black mb-3 md:mb-4 hover:scale-105 transition-transform duration-300"
            style={{
              animation: newsletterVisible ? 'fadeInScale 0.8s ease-out forwards' : 'none',
              opacity: newsletterVisible ? 1 : 0
            }}
          >
            Never Miss an Update
          </h2>
          <p 
            className="text-sm md:text-lg text-gray-700 mb-6 md:mb-8 hover:text-gray-800 transition-colors duration-300 px-4"
            style={{
              animation: newsletterVisible ? 'slideInFromBottom 0.8s ease-out 0.2s forwards' : 'none',
              opacity: newsletterVisible ? 1 : 0
            }}
          >
            Get the latest AI news, job market insights, and developer tools delivered to your inbox weekly.
          </p>
          <form 
            onSubmit={handleSubscribe} 
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 max-w-2xl mx-auto"
            style={{
              animation: newsletterVisible ? 'slideInFromBottom 0.8s ease-out 0.4s forwards' : 'none',
              opacity: newsletterVisible ? 1 : 0
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full md:flex-1 px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-gray-300 text-base md:text-lg focus:outline-none focus:border-[#e85d75] focus:shadow-lg focus:scale-[1.02] transition-all duration-300 hover:border-[#e85d75]/50"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-[#e85d75] hover:bg-[#d94967] text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Trending Topics with Scroll Animation */}
        <div className="text-center">
          <h2 className={`text-3xl md:text-4xl font-black text-black mb-6 md:mb-8 hover:scale-105 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '1000ms'}}>
            Trending Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto px-4">
            {trendingTopics.map((topic, index) => (
              <button
                key={index}
                ref={(el) => (topicRefs.current[index] = el)}
                className={`px-4 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg active:scale-95 ${
                  index % 3 === 0
                    ? 'bg-[#e8d9f9] text-black hover:bg-[#d4b5f7] hover:shadow-purple-200'
                    : index % 3 === 1
                    ? 'bg-[#ffd4e0] text-black hover:bg-[#ffb8cc] hover:shadow-pink-200'
                    : 'bg-[#e0e0e0] text-black hover:bg-[#d0d0d0] hover:shadow-gray-300'
                }`}
                style={{
                  animation: visibleTopics.includes(index)
                    ? `${index % 2 === 0 ? 'popIn' : 'bounceIn'} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`
                    : 'none',
                  animationDelay: `${index * 100}ms`,
                  opacity: visibleTopics.includes(index) ? 1 : 0
                }}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AINews