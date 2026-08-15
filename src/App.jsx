import PixelBlast from './components/PixelBlast';
import './App.css';

function App() {
  return (
    <main className="content-container">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#B497CF"
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
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1>Pixel Blast</h1>
          <p>A retro-modern digital background.</p>
          <button className="cta-btn">Explore Studio</button>
        </div>
      </div>
    </main>
  );
}

export default App;