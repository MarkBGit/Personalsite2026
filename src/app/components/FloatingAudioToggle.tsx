import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export function FloatingAudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const scratchAudioRef = useRef<HTMLAudioElement | null>(null);
  const jazzAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio elements
  useEffect(() => {
    // Use fetch to load audio files as blobs to avoid CORS issues
    const loadAudio = async () => {
      try {
        // Load record scratch
        const scratchResponse = await fetch(
          'https://raw.githubusercontent.com/MarkBGit/Personalsite2026/11f387c2f0cfe712ad66d9bf83a28db603b63f82/vinyl-noise-amp-needle-on-record-144154.mp3',
          { mode: 'cors' }
        );
        const scratchBlob = await scratchResponse.blob();
        const scratchUrl = URL.createObjectURL(scratchBlob);
        scratchAudioRef.current = new Audio(scratchUrl);

        // Load lo-fi jazz
        const jazzResponse = await fetch(
          'https://raw.githubusercontent.com/MarkBGit/Personalsite2026/11f387c2f0cfe712ad66d9bf83a28db603b63f82/fusion-nights-jazz-instrumental-411277.mp3',
          { mode: 'cors' }
        );
        const jazzBlob = await jazzResponse.blob();
        const jazzUrl = URL.createObjectURL(jazzBlob);
        jazzAudioRef.current = new Audio(jazzUrl);
        
        if (jazzAudioRef.current) {
          jazzAudioRef.current.loop = true;
          jazzAudioRef.current.volume = 0.3; // Low volume for background music
        }
      } catch (error) {
        console.error('Error loading audio files:', error);
        // Fallback to direct URLs if blob approach fails
        scratchAudioRef.current = new Audio('https://raw.githubusercontent.com/MarkBGit/Personalsite2026/11f387c2f0cfe712ad66d9bf83a28db603b63f82/vinyl-noise-amp-needle-on-record-144154.mp3');
        jazzAudioRef.current = new Audio('https://raw.githubusercontent.com/MarkBGit/Personalsite2026/11f387c2f0cfe712ad66d9bf83a28db603b63f82/fusion-nights-jazz-instrumental-411277.mp3');
        
        if (jazzAudioRef.current) {
          jazzAudioRef.current.loop = true;
          jazzAudioRef.current.volume = 0.3;
        }
      }
    };

    loadAudio();

    // Cleanup on unmount
    return () => {
      if (scratchAudioRef.current) {
        scratchAudioRef.current.pause();
        scratchAudioRef.current = null;
      }
      if (jazzAudioRef.current) {
        jazzAudioRef.current.pause();
        jazzAudioRef.current = null;
      }
    };
  }, []);

  const handleToggle = () => {
    if (!isPlaying) {
      // Starting playback
      if (!hasPlayedOnce && scratchAudioRef.current) {
        // First time - play scratch sound
        scratchAudioRef.current.play().catch(err => console.log('Scratch audio error:', err));
        setHasPlayedOnce(true);
        
        // Start jazz after 10 seconds
        setTimeout(() => {
          if (jazzAudioRef.current) {
            jazzAudioRef.current.play().catch(err => console.log('Jazz audio error:', err));
          }
        }, 10000);
      } else {
        // Resume jazz
        if (jazzAudioRef.current) {
          jazzAudioRef.current.play().catch(err => console.log('Jazz audio error:', err));
        }
      }
      setIsPlaying(true);
    } else {
      // Pause jazz
      if (jazzAudioRef.current) {
        jazzAudioRef.current.pause();
      }
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#CC5500] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#A52A2A] hover:shadow-[0_0_30px_rgba(204,85,0,0.6)] group"
      aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
    >
      {isPlaying ? (
        <Pause className="w-6 h-6" />
      ) : (
        <Play className="w-6 h-6 ml-1" />
      )}
      
      {/* Vinyl record visual */}
      <div 
        className="absolute inset-0 rounded-full border-4 border-white/20 transition-transform duration-300 group-hover:scale-110"
        style={{
          animation: isPlaying ? 'spin 3s linear infinite' : 'none',
        }}
      />
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  );
}