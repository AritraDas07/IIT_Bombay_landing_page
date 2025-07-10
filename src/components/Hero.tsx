import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Users, Trophy, Star, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToEvents = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic mouse-following gradient */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 40%)`
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30"
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 20 + 's',
            }}
          >
            <Sparkles 
              className="w-4 h-4 text-blue-400 animate-pulse"
              style={{
                animationDuration: Math.random() * 3 + 2 + 's'
              }}
            />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Announcement badge */}
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-300">
              Registrations Now Open for Techfest 2025
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main title with enhanced animations */}
          <h1 className={`hero-title font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block animate-bounce-slow">T</span>
            <span className="inline-block animate-bounce-slow animation-delay-100">E</span>
            <span className="inline-block animate-bounce-slow animation-delay-200">C</span>
            <span className="inline-block animate-bounce-slow animation-delay-300">H</span>
            <span className="inline-block animate-bounce-slow animation-delay-400">F</span>
            <span className="inline-block animate-bounce-slow animation-delay-500">E</span>
            <span className="inline-block animate-bounce-slow animation-delay-600">S</span>
            <span className="inline-block animate-bounce-slow animation-delay-700">T</span>
            <span className="inline-block ml-2 md:ml-4 animate-bounce-slow animation-delay-800">2</span>
            <span className="inline-block animate-bounce-slow animation-delay-900">0</span>
            <span className="inline-block animate-bounce-slow animation-delay-1000">2</span>
            <span className="inline-block animate-bounce-slow animation-delay-1100">5</span>
          </h1>
          
          <p className={`hero-subtitle text-slate-300 mb-3 md:mb-4 font-light transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            IIT Bombay
          </p>
          
          <p className={`text-base md:text-lg lg:text-xl text-slate-400 mb-8 md:mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Asia's Largest Science & Technology Festival
          </p>

          {/* Enhanced statistics with hover effects */}
          <div className={`stats-grid gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group p-8 bg-slate-800/30 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-blue-500 transition-all duration-500 hover:scale-110 hover:rotate-1">
              <div className="relative">
                <Users className="w-12 h-12 md:w-16 md:h-16 text-blue-400 mx-auto mb-4 md:mb-6 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping opacity-30"></div>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors">200,000+</h3>
              <p className="text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors">Participants Worldwide</p>
            </div>
            
            <div className="group p-8 bg-slate-800/30 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-purple-500 transition-all duration-500 hover:scale-110 hover:-rotate-1">
              <div className="relative">
                <Calendar className="w-12 h-12 md:w-16 md:h-16 text-purple-400 mx-auto mb-4 md:mb-6 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-30"></div>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 group-hover:text-purple-400 transition-colors">100+</h3>
              <p className="text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors">Exciting Events</p>
            </div>
            
            <div className="group p-8 bg-slate-800/30 rounded-2xl backdrop-blur-sm border border-slate-700 hover:border-pink-500 transition-all duration-500 hover:scale-110 hover:rotate-1">
              <div className="relative">
                <Trophy className="w-12 h-12 md:w-16 md:h-16 text-pink-400 mx-auto mb-4 md:mb-6 group-hover:scale-125 transition-transform duration-300" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-ping opacity-30"></div>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 group-hover:text-pink-400 transition-colors">₹2Cr+</h3>
              <p className="text-sm md:text-base text-slate-400 group-hover:text-slate-300 transition-colors">Prize Money</p>
            </div>
          </div>

          {/* Enhanced call to action buttons */}
          <div className={`button-group gap-4 md:gap-6 justify-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 overflow-hidden touch-target">
              <span className="relative z-10 flex items-center justify-center">
                Register Now
                <ArrowRight className="inline-block ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <button 
              onClick={scrollToEvents}
              className="group relative border-2 border-slate-500 text-slate-300 px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm overflow-hidden touch-target"
            >
              <span className="relative z-10">View Events</span>
              <div className="absolute inset-0 bg-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>

          {/* Additional info banner */}
          <div className={`mt-12 md:mt-16 p-4 md:p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600 backdrop-blur-sm transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-slate-300 text-sm md:text-base lg:text-lg text-center">
              <span className="font-semibold text-blue-400">February 15-18, 2025</span> • 
              <span className="mx-2">📍</span>
              <span className="font-semibold text-purple-400">IIT Bombay Campus</span> • 
              <span className="mx-2">🎯</span>
              <span className="font-semibold text-pink-400">Innovation • Competition • Excellence</span>
            </p>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce mobile-hidden">
        <div className="w-8 h-12 border-2 border-slate-500 rounded-full p-1">
          <div className="w-2 h-4 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mx-auto animate-pulse"></div>
        </div>
        <p className="text-slate-500 text-xs md:text-sm mt-2 text-center">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;