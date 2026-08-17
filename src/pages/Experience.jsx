import { useNavigate } from 'react-router-dom';

function Experience() {
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
    
  );
}

export default Experience;