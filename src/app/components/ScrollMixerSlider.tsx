import { useEffect, useState } from 'react';

export function ScrollMixerSlider() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-12 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4">
      {/* Mixer Label */}
      <div 
        className="text-white/40 text-xs uppercase tracking-widest -rotate-90 origin-center mb-8"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        Volume
      </div>

      {/* Mixer Track */}
      <div className="relative w-2 h-64 bg-[#1a1a1a] rounded-full border border-white/10">
        {/* Progress Fill */}
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#CC5500] to-[#5A7D9A] rounded-full transition-all duration-100"
          style={{ height: `${scrollProgress}%` }}
        />
        
        {/* Slider Knob */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#CC5500] rounded-full border-2 border-white shadow-lg transition-all duration-100"
          style={{ 
            bottom: `calc(${scrollProgress}% - 12px)`,
          }}
        >
          {/* Inner circle */}
          <div className="absolute inset-1 bg-[#1a1a1a] rounded-full" />
        </div>
      </div>

      {/* Percentage Display */}
      <div 
        className="text-white/60 text-xs mt-2"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
}
