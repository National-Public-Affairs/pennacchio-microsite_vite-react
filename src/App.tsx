import { useState } from 'react';
import NavButton from './components/NavButton/NavButton';
import Footer from './components/Footer/Footer';
import SlideOne from './components/SlideOne/SlideOne';
import SlideTwo from './components/SlideTwo/SlideTwo';
import SlideThree from './components/SlideThree/SlideThree';
import SlideFour from './components/SlideFour/SlideFour';
import './App.css';

export default function App() {
  const [currentSlide, setSlide] = useState<number>(1);

  return (
    <div className="App">
      <Footer />
      {
        currentSlide != 1
          ? (
            <NavButton
              currentSlide={currentSlide}
              setSlide={setSlide}
            />
          )
          : null
      }
      <div className="slide">
        <SlideOne
          currentSlide={currentSlide}
          setSlide={setSlide}
        />
        <SlideTwo
          currentSlide={currentSlide}
        />
        <SlideThree
          currentSlide={currentSlide}
        />
        <SlideFour
          currentSlide={currentSlide}
        />
      </div>
    </div>
  );
}
