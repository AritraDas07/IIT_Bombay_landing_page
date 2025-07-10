import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import SplineBackground from './components/SplineBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoadingComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Smooth fade out transition
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'events', 'gallery', 'contact'];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollY >= offsetTop - windowHeight / 2) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    if (!loading) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className={`transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <SplineBackground />
      <Navigation activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Events />
        <Gallery />
        <Contact />
      </main>
      
      <footer className="relative z-10 bg-slate-800/80 backdrop-blur-sm py-12 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Footer brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                TECHFEST
              </h3>
              <p className="text-slate-400 mb-4 max-w-md">
                Asia's largest science and technology festival, fostering innovation and technological advancement since 1998.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  🐦
                </a>
                <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷
                </a>
                <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <ul className="space-y-2 text-slate-400">
                <li>📧 techfest@iitb.ac.in</li>
                <li>📞 +91 22 2576 7854</li>
                <li>📍 IIT Bombay, Powai<br />Mumbai 400076</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 Techfest IIT Bombay. All rights reserved. | Designed with ❤️ for innovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;