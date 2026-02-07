import { useState } from 'react'

function App() {
  const [photoRevealed, setPhotoRevealed] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noScale, setNoScale] = useState(1);

  const yesScale = Math.min(1 + noClickCount * 0.2, 2.5);
  const yesWidth = Math.min(100, 65 + noClickCount * 6);

  const moveNoButton = () => {
    setNoPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    });
    setNoScale(prev => prev * 0.7);
    setNoClickCount(prev => prev + 1);
  };

  const datePlan = {
    date: "February 11, 2026",
    colorTheme: "Black",
    dresscode: "Anything elegant and aesthetically pleasing",
    schedule: [
      { 
        activity: "Ocean Park (Walk-in)", 
        details: "Time: To be decided, depending on our schedule",
        icon: "🐠"
      },
      { 
        activity: "Busan Korean Restaurant", 
        details: "Time: Depending on our schedule",
        icon: "🍜"
      },
      { 
        activity: "Dark Rose Coffee House", 
        details: "Time: Depending on our schedule",
        icon: "☕"
      }
    ]
  };

  // ─── ITINERARY SCREEN ───────────────────────────────────
  if (yesClicked) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#f5e6e8' }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
          @keyframes popIn {
            from { opacity: 0; transform: scale(0.9) rotate(-2deg); }
            to { opacity: 1; transform: scale(1) rotate(0deg); }
          }
        `}</style>

        <div 
          className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-2xl w-full"
          style={{ 
            animation: 'popIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            border: '3px solid #8b1538'
          }}
        >
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-2">💌</div>
            <h1 
              className="text-4xl font-bold mb-2"
              style={{ 
                fontFamily: "'Libre Baskerville', serif",
                color: '#6b1729'
              }}
            >
              She Said Yes!
            </h1>
            <p 
              className="text-base"
              style={{ 
                fontFamily: "'Montserrat', sans-serif", 
                fontWeight: 300,
                color: '#78716c'
              }}
            >
              Here's our date plan, Hannah...
            </p>
          </div>

          {/* Date info */}
          <div 
            className="rounded-xl p-5 mb-6"
            style={{ background: '#fef3f4', border: '2px solid #ec8895' }}
          >
            <h2 
              className="text-2xl text-center font-bold mb-3"
              style={{ 
                fontFamily: "'Libre Baskerville', serif",
                color: '#8b1538'
              }}
            >
              {datePlan.date}
            </h2>

            <div className="text-center mb-4">
              <p 
                className="text-sm"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif",
                  color: '#57534e',
                  fontWeight: 500
                }}
              >
                <span style={{ color: '#6b1729', fontWeight: 600 }}>Theme:</span> {datePlan.colorTheme}
              </p>
              <p 
                className="text-xs mt-1 italic"
                style={{ 
                  fontFamily: "'Montserrat', sans-serif", 
                  fontWeight: 300,
                  color: '#a8a29e'
                }}
              >
                {datePlan.dresscode}
              </p>
            </div>

            {/* Schedule cards */}
            <div className="space-y-3">
              {datePlan.schedule.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 shadow-sm border hover:shadow-md transition-all"
                  style={{ 
                    borderColor: '#fbbec8',
                    animation: `popIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) ${index * 0.1}s both`
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <h3 
                        className="font-semibold text-sm mb-1"
                        style={{ 
                          fontFamily: "'Montserrat', sans-serif",
                          color: '#8b1538'
                        }}
                      >
                        {item.activity}
                      </h3>
                      <p 
                        className="text-xs"
                        style={{ 
                          fontFamily: "'Montserrat', sans-serif", 
                          fontWeight: 300,
                          color: '#78716c'
                        }}
                      >
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p 
              className="text-xs italic mb-3"
              style={{ 
                fontFamily: "'Montserrat', sans-serif",
                color: '#a8a29e'
              }}
            >
              Can't wait to spend this day with you
            </p>
            <div className="text-2xl">✨💝✨</div>
          </div>
        </div>
      </div>
    );
  }

  // ─── INVITATION SCREEN (after photo revealed) ──────────
  if (photoRevealed) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center p-4 overflow-hidden"
        style={{ background: '#f5e6e8' }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
          @keyframes confettiFall {
            0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
          }
          @keyframes slideFromRight {
            from { opacity: 0; transform: translateX(50px) rotate(3deg); }
            to { opacity: 1; transform: translateX(0) rotate(0deg); }
          }
        `}</style>

        {/* Confetti */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-50px',
                animation: `confettiFall ${4 + Math.random() * 4}s linear ${Math.random() * 2}s infinite`,
                fontSize: `${12 + Math.random() * 10}px`,
                opacity: 0
              }}
            >
              {['💕', '💖', '✨', '🌸'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>

        {/* Question card */}
        <div 
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-md w-full relative z-10"
          style={{ 
            animation: 'slideFromRight 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            border: '3px solid #8b1538'
          }}
        >
          {/* Decorative corner stamps */}
          <div className="absolute top-3 right-3 text-xl opacity-40" style={{ transform: 'rotate(12deg)' }}>📮</div>
          <div className="absolute bottom-3 left-3 text-xl opacity-40" style={{ transform: 'rotate(-12deg)' }}>💌</div>

          <div className="text-center mb-5">
            <div className="text-5xl mb-3">💝</div>
            <h1 
              className="text-3xl font-bold mb-3"
              style={{ 
                fontFamily: "'Libre Baskerville', serif",
                color: '#6b1729'
              }}
            >
              Hannah,
            </h1>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ 
                fontFamily: "'Libre Baskerville', serif",
                color: '#8b1538'
              }}
            >
              Will you be my Valentine?
            </h2>
          </div>

          <div 
            className="mb-6 text-center space-y-2"
            style={{ 
              fontFamily: "'Montserrat', sans-serif", 
              fontWeight: 300,
              color: '#57534e',
              lineHeight: '1.6'
            }}
          >
            <p className="text-sm">
              To the most beautiful person I have ever known,
            </p>
            <p className="text-base font-medium" style={{ color: '#8b1538' }}>
              Would you go on a date with me?
            </p>
          </div>

          <div className="w-16 h-px mx-auto mb-6" style={{ background: '#ec8895' }}></div>

          {/* Buttons */}
          <div className="relative flex flex-col items-center gap-4">
            
            <button
              onClick={() => setYesClicked(true)}
              style={{
                transform: `scale(${yesScale})`,
                width: `${yesWidth}%`,
                transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55), width 0.4s ease',
                fontFamily: "'Montserrat', sans-serif",
                background: '#8b1538',
                fontWeight: 600
              }}
              className="text-white py-3 px-8 rounded-lg text-base shadow-lg hover:shadow-xl transition-shadow"
            >
              Yes, I'd love to! 💕
            </button>

            <div className="relative h-14 w-full flex justify-center">
              <button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={(e) => { e.preventDefault(); moveNoButton(); }}
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px) scale(${noScale})`,
                  transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  fontFamily: "'Montserrat', sans-serif",
                  borderColor: '#ec8895',
                  color: '#78716c'
                }}
                className="bg-white font-medium py-2 px-6 rounded-lg text-sm border-2 shadow-md cursor-pointer touch-none"
              >
                Maybe not...
              </button>
            </div>
          </div>

          <div className="text-center mt-6 text-xl">💐</div>
        </div>
      </div>
    );
  }

  // ─── POLAROID SCREEN (initial) ──────────────────────────
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{ background: '#f5e6e8' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg) translateY(0); }
          50% { transform: rotate(2deg) translateY(-8px); }
        }
        @keyframes fadeFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-15px) scale(1.1); opacity: 0.8; }
          100% { transform: translateY(0) scale(1); opacity: 0.6; }
        }
      `}</style>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-4xl opacity-30" style={{ animation: 'fadeFloat 4s ease-in-out infinite' }}>🌹</div>
        <div className="absolute top-32 right-16 text-3xl opacity-20" style={{ animation: 'fadeFloat 5s ease-in-out 0.5s infinite' }}>💌</div>
        <div className="absolute bottom-24 left-20 text-3xl opacity-25" style={{ animation: 'fadeFloat 4.5s ease-in-out 1s infinite' }}>✨</div>
        <div className="absolute bottom-32 right-12 text-4xl opacity-30" style={{ animation: 'fadeFloat 5.5s ease-in-out 1.5s infinite' }}>💐</div>
      </div>

      {/* Main polaroid */}
      <div className="relative z-10 flex flex-col items-center">
        
        <p 
          className="text-xs mb-5 tracking-widest"
          style={{ 
            fontFamily: "'Montserrat', sans-serif", 
            fontWeight: 500,
            color: '#8b1538',
            letterSpacing: '0.15em'
          }}
        >
          CLICK TO REVEAL ↓
        </p>

        <button
          onClick={() => setPhotoRevealed(true)}
          className="relative cursor-pointer focus:outline-none group"
          style={{ animation: 'sway 3s ease-in-out infinite' }}
        >
          {/* Polaroid frame */}
          <div 
            className="bg-white p-4 pb-16 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            style={{ 
              width: '280px',
              border: '1px solid #e5e5e5'
            }}
          >
            {/* Photo area with question mark */}
            <div 
              className="w-full aspect-square flex items-center justify-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #fef3f4 0%, #fbbec8 100%)' }}
            >
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 text-6xl">💕</div>
                <div className="absolute bottom-4 right-4 text-6xl">💕</div>
                <div className="absolute top-4 right-4 text-4xl">✨</div>
                <div className="absolute bottom-4 left-4 text-4xl">✨</div>
              </div>
              
              {/* Question mark */}
              <div 
                className="text-8xl group-hover:scale-110 transition-transform duration-300"
                style={{ color: '#8b1538' }}
              >
                ?
              </div>
            </div>

            {/* Polaroid caption */}
            <div 
              className="absolute bottom-4 left-4 right-4 text-center"
              style={{ 
                fontFamily: "'Libre Baskerville', serif",
                fontSize: '18px',
                color: '#6b1729',
                fontStyle: 'italic'
              }}
            >
              For Hannah
            </div>
          </div>

          {/* Vintage stamp in corner */}
          <div 
            className="absolute -top-2 -right-2 bg-white p-2 rounded-full shadow-lg border-2 text-xl"
            style={{ 
              borderColor: '#8b1538',
              borderStyle: 'dashed'
            }}
          >
            💌
          </div>

          {/* Paper clip decoration */}
          <div 
            className="absolute -top-3 left-8 text-3xl"
            style={{ 
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
              transform: 'rotate(-45deg)'
            }}
          >
            📎
          </div>
        </button>

        <p 
          className="text-base mt-6 text-center px-4"
          style={{ 
            fontFamily: "'Libre Baskerville', serif",
            fontStyle: 'italic',
            color: '#6b1729'
          }}
        >
          A special question awaits...
        </p>
      </div>
    </div>
  );
}

export default App