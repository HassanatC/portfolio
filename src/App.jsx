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

  const fbImages = ['src/images/fb1.jpeg', 'src/images/fb2.jpeg', 'src/images/fb3.jpeg', 'src/images/fb4.jpeg'];
  const fnImages = ['src/images/filenexus.png', 'src/images/filenexus2.png', 'src/images/filenexus4.png']

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
