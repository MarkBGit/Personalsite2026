export function Footer() {
  return (
    <footer className="border-t border-[#CC5500]/30 py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Concert Program Style */}
        <div className="text-center space-y-8">
          {/* Program Header */}
          <div className="border-b border-white/20 pb-6">
            <h3 
              className="text-[#CC5500] uppercase tracking-widest mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Feel Free To Reach Out
            </h3>
            <p 
              className="text-white/60 italic"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Always Open
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div>
              <p className="text-white/40 text-sm mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                LinkedIn
              </p>
              <a 
                href="#" 
                className="text-white/80 hover:text-[#CC5500] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                /in/itsmarkbenjamin
              </a>
            </div>
            <div>
              <p className="text-white/40 text-sm mb-2" style={{ fontFamily: 'var(--font-sans)' }}>
                GitHub
              </p>
              <a 
                href="#" 
                className="text-white/80 hover:text-[#CC5500] transition-colors"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                @markbgit
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="mailto:markbenjaminbiz@gmail.com"
              className="px-8 py-4 bg-[#CC5500] text-white uppercase tracking-wider transition-all duration-300 hover:bg-[#A52A2A] hover:shadow-[0_0_30px_rgba(204,85,0,0.5)] inline-block"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Let's Meet
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-6">
            <p 
              className="text-white/40 text-sm"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              © 2025 Mark Benjamin. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}