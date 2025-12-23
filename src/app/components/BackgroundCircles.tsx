export function BackgroundCircles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large faint moss green circles scattered across the background */}
      
      {/* Top left circle */}
      <div 
        className="absolute rounded-full blur-3xl"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(74, 93, 78, 0.18) 0%, rgba(74, 93, 78, 0) 70%)',
          top: '-200px',
          left: '-200px',
        }}
      />
      
      {/* Top right circle */}
      <div 
        className="absolute rounded-full blur-3xl"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(74, 93, 78, 0.144) 0%, rgba(74, 93, 78, 0) 70%)',
          top: '100px',
          right: '-150px',
        }}
      />
      
      {/* Middle left circle */}
      <div 
        className="absolute rounded-full blur-3xl"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(74, 93, 78, 0.12) 0%, rgba(74, 93, 78, 0) 70%)',
          top: '40%',
          left: '-250px',
        }}
      />
      
      {/* Center circle */}
      <div 
        className="absolute rounded-full blur-3xl"
        style={{
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(74, 93, 78, 0.096) 0%, rgba(74, 93, 78, 0) 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Bottom right circle */}
      <div 
        className="absolute rounded-full blur-3xl"
        style={{
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(74, 93, 78, 0.144) 0%, rgba(74, 93, 78, 0) 70%)',
          bottom: '10%',
          right: '-200px',
        }}
      />
      
      {/* Bottom left circle */}
      <div 
        className="absolute rounded-full blur-3xl"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(74, 93, 78, 0.12) 0%, rgba(74, 93, 78, 0) 70%)',
          bottom: '-150px',
          left: '20%',
        }}
      />
    </div>
  );
}