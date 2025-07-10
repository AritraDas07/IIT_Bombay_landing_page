import React, { useState, useEffect, Suspense } from 'react';
import { Zap, Code, Cpu, Globe } from 'lucide-react';
import Spline from '@splinetool/react-spline';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [showSpline, setShowSpline] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  const loadingStages = [
    { progress: 15, text: 'Loading Techfest...' },
    { progress: 30, text: 'Preparing 3D Environment...' },
    { progress: 50, text: 'Setting up Animations...' },
    { progress: 70, text: 'Configuring Interface...' },
    { progress: 85, text: 'Finalizing Experience...' },
    { progress: 100, text: 'Welcome to Techfest!' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.2;
        
        // Show Spline animation at 25% progress
        if (newProgress >= 25 && !showSpline) {
          setShowSpline(true);
        }
        
        // Update loading text based on progress
        const currentStage = loadingStages.find(stage => newProgress <= stage.progress);
        if (currentStage) {
          setLoadingText(currentStage.text);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setLoadingText('Welcome to Techfest!');
          // Delay before transitioning to main site
          setTimeout(() => {
            onLoadingComplete();
          }, 1500);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [showSpline, onLoadingComplete]);

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Spline 3D Background Animation */}
      {showSpline && (
        <div className={`absolute inset-0 transition-opacity duration-2000 ${splineLoaded ? 'opacity-60' : 'opacity-0'}`}>
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-gradient-x"></div>
            </div>
          }>
            <Spline
              scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
              onLoad={handleSplineLoad}
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
              }}
            />
          </Suspense>
        </div>
      )}

      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-float"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 10 + 's',
              animationDuration: Math.random() * 20 + 10 + 's'
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 max-w-lg mx-auto px-6 relative">
        {/* Main logo with complex animation */}
        <div className="mb-12 relative">
          <div className="relative inline-block">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 w-32 h-32 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin-slow"></div>
            
            {/* Middle rotating ring */}
            <div className="absolute inset-2 w-28 h-28 border-4 border-transparent border-b-purple-500 border-l-pink-500 rounded-full animate-spin-reverse"></div>
            
            {/* Inner pulsing core */}
            <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse-scale">
              <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center">
                <Zap className="w-10 h-10 text-white animate-pulse" />
              </div>
            </div>
            
            {/* Orbiting icons */}
            <div className="absolute inset-0 w-32 h-32 animate-spin-slow">
              <Code className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-6 h-6 text-blue-400" />
              <Cpu className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-6 h-6 text-purple-400" />
              <Globe className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-6 h-6 text-pink-400" />
            </div>
          </div>
        </div>

        {/* Title with typewriter effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
          TECHFEST
        </h1>
        <p className="text-2xl md:text-3xl text-slate-300 mb-2 animate-fade-in-up">IIT Bombay</p>
        <p className="text-lg text-slate-400 mb-12 animate-fade-in-up delay-300">Asia's Largest Science & Technology Festival</p>
        
        {/* Enhanced progress bar */}
        <div className="w-80 max-w-full mx-auto mb-8">
          <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden shadow-inner">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-slate-400">
            <span>0%</span>
            <span className="font-semibold text-white">{Math.round(progress)}%</span>
            <span>100%</span>
          </div>
        </div>
        
        {/* Loading text with fade animation */}
        <p className="text-xl text-slate-300 font-medium animate-pulse">
          {loadingText}
        </p>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Spline loading indicator */}
        {showSpline && !splineLoaded && (
          <div className="mt-8 text-sm text-slate-400 animate-pulse">
            Loading 3D Environment...
          </div>
        )}
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-br-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-full animate-pulse-slow delay-1000"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full animate-pulse-slow delay-500"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full animate-pulse-slow delay-1500"></div>
    </div>
  );
};

export default LoadingScreen;