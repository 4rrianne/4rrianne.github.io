import { useNavigate } from 'react-router-dom';
import PixelBlast from '../components/PixelBlast';

function Home() {
  const navigate = useNavigate();

  const handleNavClick = (path, e) => {
    // Find the canvas PixelBlast created
    const canvas = document.querySelector('.pixel-blast-container canvas');
    if (canvas) {
      const rippleEvent = new PointerEvent('pointerdown', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true
      });
      canvas.dispatchEvent(rippleEvent);
    }
    // Wait for the ripple to be visible before navigating
    setTimeout(() => navigate(path), 300);
  };

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#036916"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '1rem', pointerEvents: 'none' }}>
        <h1>Hi! I'm Arrianne.</h1>
        <p>Click around to learn more about me.</p>
        <div className="nav-squares">
          <div className="nav-square" onClick={(e) => handleNavClick('/about', e)}>About</div>
          <div className="nav-square" onClick={(e) => handleNavClick('/projects', e)}>Projects</div>
          <div className="nav-square" onClick={(e) => handleNavClick('/contact', e)}>Contact</div>
        </div>
      </div>
    </>
  );
}

export default Home;