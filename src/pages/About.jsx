import { useNavigate } from 'react-router-dom';
import profilePhoto from '../assets/airy.png';

function About() {
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

      <h1>About Me</h1>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '2rem auto',
        textAlign: 'left'
       }}>

        <img
          src={profilePhoto}
          alt="Arrianne"
          style={{ width: '15vw', 
                  height: '15vw', 
                   maxWidth: '80vw', 
                   maxHeight: '80vw', 
                   aspectRatio: '1/1', 
                   borderRadius: '50%', 
                   objectFit: 'cover', 
                   margin: '1rem 0', 
                   minWidth: '100px', 
                   minHeight: '100px', 
                   flexShrink:0,
                   alignItems: 'center' }}
        />

        <p style={{ maxWidth: '800px', margin: '0 auto'}}>
          My Name is Arrianne Simsuangco. I am part of the Class of 2028 at the University of Virginia. 
          As a first-generation student from Norfolk, Virginia, my current focus is on quantum computing, 
          where I aim to contribute to research and advance future technology. At the same time, I am open 
          to exploring other areas of computer science such as artificial intelligence, robotics, web development, 
          and more.
        </p>

        </div>

      <div className="nav-square nav-square-back" onClick={handleBackClick} style={{ margin: '2rem auto', pointerEvents: 'auto' }}>
        Back
      </div>

    </div>
  );
}

export default About;