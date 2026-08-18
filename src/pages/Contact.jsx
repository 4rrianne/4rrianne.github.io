import { useNavigate } from 'react-router-dom';


function Contact() {
  const navigate = useNavigate();

  const handleBackClick = (e) => {
    const canvas = document.querySelector('.pixel-blast-container canvas');
    if (canvas) {
      const rippleEvent = new PointerEvent('pointerdown', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true
      });
      canvas.dispatchEvent(rippleEvent);
    }
    setTimeout(() => navigate('/'), 300);
  };

  return (
    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '3rem', pointerEvents: 'none' }}>

      <h1>Contact</h1>

      <div className="nav-square nav-square-back" onClick={handleBackClick} style={{ margin: '2rem auto', pointerEvents: 'auto' }}>
        Back
      </div>

    </div>
  );
}

export default Contact;