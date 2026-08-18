import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccordionGallery from '../components/AccordionGallery';
import frcPhoto from '../assets/frc.png';
import oofPhoto from '../assets/oliveOilFlights.png';
import csPhoto from '../assets/cs.png';

function Experience() {
  const navigate = useNavigate();
  const [popupItem, setPopupItem] = useState(null);

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

  const handleResumeClick = (e) => {
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
      <h1>Experience</h1>
      <p style={{ maxWidth: '700px', margin: '1rem auto' }}>
        Check out my resume and click the squares to learn about my experiences!
      </p>

      <a
        href="/ArrianneSimsuangco_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleResumeClick}
        className="nav-square"
        style={{ margin: '2rem auto', pointerEvents: 'auto', textDecoration: 'none' }}
      >
        View Resume
      </a>

      <div style={{ pointerEvents: 'auto', margin: '2rem auto', maxWidth: '900px' }}>
        <AccordionGallery
          items={[
            { image: frcPhoto, label: 'FRC Robotics', description: "FIRST Robotics Competition (FRC) is an international high school robotics competition where teams design and build a robot to compete in a new game challenge each year. I was a member of FRC Team 1793 for three years, working across a team split into mechanical, electrical, and programming sub-teams. In my final year, I became Programming Captain, leading a group of five programmers. We coded the robot's software in Java, including autonomous routines and tank drive controls, while also contributing to the robot's overall design and functionality. Our team earned the Creativity and Sustainability Awards that season.", link: '#' },
            { image: oofPhoto, label: 'Internship at Olive Oil Flights', description: "I worked as a CS/Web Development Intern at Olive Oil Flights, a 2026 CBIC Best New Company award winner, dedicating 10+ hours per week over the course of a semester. In this role, I implemented front-end updates using CSS to improve the site's layout, functionality, and visual design, while also gaining hands-on experience with e-commerce features. Most notably, I successfully implemented a partner-exclusive wholesale ordering feature, giving approved partners a dedicated way to purchase in bulk directly through the site. I worked cross-functionally with the marketing team to ensure technical updates aligned with the company's branding and content goals, and picked up practical UI/UX skills along the way.", link: '#' },
            { image: csPhoto, label: 'Personal Projects', 
                description: (
                    <>
                        Visit my  {' '}
                        <a href="https://github.com/4rrianne" target="_blank" rel="noopener noreferrer" style={{ color: '#8fd694' }}>
                        Github
                        </a>
                        <br></br>
                        <br></br>
                        <a href="https://github.com/4rrianne/airydoro" target="_blank" rel="noopener noreferrer" style={{ color: '#fefefe' }}>
                        Pomodoro App
                        </a>    
                        <br></br>
                        For my first project, I built a desktop application for my boyfriend after he mentioned struggling to stay focused on tasks. The app is a Pomodoro-style focus timer built with Tauri. Beyond the core timer functionality, I implemented my own custom design from scratch.
                        <br></br>
                        <br></br>
                        <a href="https://github.com/4rrianne/EyeFocus" target="_blank" rel="noopener noreferrer" style={{ color: '#fefefe' }}>
                        EyeFocus
                        </a>    
                        <br></br>
                         A desktop application that uses your webcam to keep you focused. It tracks where you're looking, and if your gaze drifts away for too long, a cat image pops up on screen to pull your attention back to work.
                    </>    
            )}
            
                    
            ]}
          accentColor="#036916"
          height={400}
          onItemClick={(item) => setPopupItem(item)}
        />
      </div>

      <div className="nav-square nav-square-back" onClick={handleBackClick} style={{ margin: '2rem auto', pointerEvents: 'auto' }}>
        Back
      </div>

      {popupItem && (
        <div
          onClick={() => setPopupItem(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            pointerEvents: 'auto'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#16171d',
              color: 'white',
              padding: '2rem',
              borderRadius: '16px',
              maxWidth: '500px',
              width: '90%',
              position: 'relative',
              textAlign: 'left'
            }}
          >
            <button
              onClick={() => setPopupItem(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
            <h2>{popupItem.label}</h2>
            <p>{popupItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;