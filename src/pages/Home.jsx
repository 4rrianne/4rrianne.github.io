import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleNavClick = (path, e) => {
    const canvas = document.querySelector('.pixel-blast-container canvas');
    if (canvas) {
      const rippleEvent = new PointerEvent('pointerdown', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true
      });
      canvas.dispatchEvent(rippleEvent);
    }
    setTimeout(() => navigate(path), 300);
  };

  return (
    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '1rem', pointerEvents: 'none' }}>
      <h1>Hi! I'm Arrianne.</h1>
      <p>Click around to learn more about me.</p>
      <div className="nav-squares">
        <div className="nav-square" onClick={(e) => handleNavClick('/about', e)}>About</div>
      </div>
    </div>
  );
}

export default Home;