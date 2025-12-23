import aboutImage from "figma:asset/995eb3b46ddcf44519e53abf29f63f4856e2207e.png";

export function AboutSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 via-[#121212]/60 to-[#121212]/80" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
              About The Man
            </h2>
            <div className="text-white/90 space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
              
              <p>Born and raised in the vibrant city of Orlando, Florida, to parents rooted in the rich traditions of the Caribbean, this artist brings a unique blend of cultural influences to their music. With a mother from the Bahamas and a father from Jamaica, they grew up surrounded by a lively family filled with cousins, aunts, and uncles. As the eldest of three, their childhood was marked by a dual passion for music and basketball. Though their early years saw them on the courts, participating in AAU and high school basketball, they also found time to explore music through the school band, where they first picked up the drums.</p>
              <p>A move to Texas marked a turning point, steering them away from sports and music and towards an unexpected journey in sales and retail. After graduating high school in 2016, they ventured into door-to-door sales with Cutco knives, retail sales, explored entrepreneurship, and eventually discovered a new passion in digital marketing. By 2019, their interest in digital marketing, specifically paid media, led them to engage with digital marketing bootcamps and gain practical experience with non-profits. This path culminated in a position as a paid media specialist at Dentsu in 2021, where they honed their skills before venturing into freelance work and transitioning into digital project management work in 2024, driven by a desire to streamline operations and implement systematic change.</p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <h3 className="text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
              {/*header 3 blank */}
            </h3>
            <div className="text-white/90 space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
              <p>By 2022, their first love, music, came calling once more. Reigniting a passion for playing instruments, especially the drums, they embarked on a new musical journey. With an eclectic taste spanning hip-hop, jazz fusion, R&B, folk, rock, and country, their playlist is as diverse as their background. This artist is not only attuned to the rhythms of music but also to the pulse of emerging technologies, particularly AI, which they have integrated into personal projects. This is a testament to a life full of exploration, innovation, and the harmonious blending of past influences with future possibilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}