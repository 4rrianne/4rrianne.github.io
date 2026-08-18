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

  const handleLinkClick = (e) => {
    const canvas = document.querySelector('.pixel-blast-container canvas');
    if (canvas) {
      const rippleEvent = new PointerEvent('pointerdown', {
        clientX: e.clientX,
        clientY: e.clientY,
        bubbles: true
      });
      canvas.dispatchEvent(rippleEvent);
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', paddingTop: '3rem', pointerEvents: 'none' }}>

      <h1>Contact</h1>

      <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
        Connect with me!
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '2rem',
        margin: '2rem auto',
        pointerEvents: 'none'
      }}>

        <a
          href="https://linkedin.com/in/arriannes"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="nav-square"
          style={{ pointerEvents: 'auto', textDecoration: 'none' }}
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/4rrianne"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="nav-square"
          style={{ pointerEvents: 'auto', textDecoration: 'none' }}
        >
          GitHub
        </a>
      </div>

      <div style={{ margin: '2rem auto', pointerEvents: 'auto', color: 'inherit' }}>
        <p style={{ margin: 0, fontSize: '1rem', opacity: 0.8 }}>Or drop me an email at:</p>
        <a 
          href="mailto:arriannesims12@gmail.com" 
          style={{ color: 'inherit', fontWeight: 'bold', textDecoration: 'underline' }}
        >
          arriannesims12@gmail.com
        </a>
      </div>


      <div className="nav-square nav-square-back" onClick={handleBackClick} style={{ margin: '2rem auto', pointerEvents: 'auto' }}>
        Back
      </div>

    </div>
  );
}

export default Contact;