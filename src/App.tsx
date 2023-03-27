import { useState, useEffect } from 'react';
import NavButton from './components/NavButton/NavButton';
import SlideOne from './components/SlideOne/SlideOne';
import SlideTwo from './components/SlideTwo/SlideTwo';
import './App.css';

export default function App() {
  const [display, setDisplay] = useState<boolean>(false);
  const [currentSlide, setSlide] = useState<number>(1);

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="App">
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
      <SlideOne
        display={display}
        setDisplay={setDisplay}
        currentSlide={currentSlide}
        setSlide={setSlide}
      />
      <SlideTwo display={display} />
    </div>
  );
}
