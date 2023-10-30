import Hero from './Hero';
import './index.css';
import { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import FBModal from './FBModal';
import FNModal from './FNModal';

function App() {
  const [isFBShowing, setIsFBShowing] = useState(false);
  const [isFNShowing, setIsFNShowing] = useState(false);

  const fbImages = ['/images/fb1.jpeg', '/images/fb2.jpeg', '/images/fb3.jpeg', '/images/fb4.jpeg'];
  const fnImages = ['/images/filenexus.png', '/images/filenexus2.png', '/images/filenexus4.png']

  const toggleFB = () => {
    setIsFBShowing(!isFBShowing);
  }

  const toggleFN = () => {
    setIsFNShowing(!isFNShowing);
  }
  
  return (
    <div>
      <Hero />
      <Navbar />
      <About toggleFB={toggleFB} toggleFN={toggleFN} isFBShowing={isFBShowing} isFNShowing={isFNShowing} />
      <FBModal isShowing={isFBShowing} toggle={toggleFB} images={fbImages} />
      <FNModal isShowing={isFNShowing} toggle={toggleFN} images={fnImages} />

      {/* other components can go here */}
    </div>
  );
}

export default App
