import heroImage from "figma:asset/0b6eb3b15f5b194bb34c7ef7072aede6e0010845.png";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl w-full px-8 flex items-center justify-center">
        <img 
          src={heroImage} 
          alt="Mark Benjamin - Jazz Recording" 
          className="w-full max-w-xl h-auto shadow-2xl"
          style={{
            filter: 'drop-shadow(0 0 60px rgba(204, 85, 0, 0.6)) drop-shadow(0 0 100px rgba(204, 85, 0, 0.4))'
          }}
        />
      </div>
    </section>
  );
}