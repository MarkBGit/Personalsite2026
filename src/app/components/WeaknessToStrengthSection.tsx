import { useState } from 'react';

interface Transformation {
  weakness: string;
  strength: string;
}

// Placeholder transformations - user will customize
const transformations: Transformation[] = [
  { weakness: 'Resistance to "Good Enough" Solutions', strength: 'Strategic System Optimization' },
  { weakness: 'Analysis-to-Action Lag', strength: 'First-Principles Problem Solving' },
  { weakness: 'Low Tolerance for Routine', strength: 'High-Precision Execution' },
];

export function WeaknessToStrengthSection() {
  const [sliderPosition, setSliderPosition] = useState(0); // 0 to 100

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="min-h-screen py-[10px] relative overflow-hidden px-[0px]">
      <div className="max-w-6xl mx-auto px-8">
        <h2 
          className="mb-16 text-center text-[#CC5500]" 
          style={{ fontFamily: 'var(--font-serif)', fontSize: '150%' }}
        >
          Accidents into Improv
        </h2>

        <p 
          className="text-center text-white/60 -mt-12 mb-16"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Weaknesses and Strengths
        </p>

        <div className="space-y-12">
          {transformations.map((item, index) => (
            <div 
              key={index}
              className="relative h-64 bg-[#1a1a1a] rounded-lg overflow-hidden cursor-ew-resize"
              onMouseMove={handleMouseMove}
            >
              {/* Weakness Side (Left) */}
              <div className="absolute inset-0 flex items-center justify-start px-12">
                <p 
                  className="text-4xl transition-all duration-300"
                  style={{ 
                    fontFamily: 'var(--font-serif)',
                    color: 'rgba(160, 160, 160, 0.6)',
                    opacity: Math.max(0, 1 - (sliderPosition / 70)),
                  }}
                >
                  {item.weakness}
                </p>
              </div>

              {/* Strength Side (Right) */}
              <div 
                className="absolute inset-0 flex items-center justify-end px-12 transition-opacity duration-300"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              >
                <p 
                  className="text-4xl"
                  style={{ 
                    fontFamily: 'var(--font-serif)',
                    color: '#CC5500',
                    textShadow: '0 0 20px rgba(204, 85, 0, 0.6)',
                  }}
                >
                  {item.strength}
                </p>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-[#CC5500] shadow-[0_0_20px_rgba(204,85,0,0.8)] transition-all duration-100"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#CC5500] rounded-full shadow-[0_0_20px_rgba(204,85,0,0.8)]" />
              </div>

              {/* Instruction Text */}
              {sliderPosition < 10 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                  Drag to reveal transformation →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}