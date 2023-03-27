import { useState } from 'react';
import NavButton from './components/NavButton/NavButton';
import SlideOne from './components/SlideOne/SlideOne';
import SlideTwo from './components/SlideTwo/SlideTwo';
import './App.css';

export default function App() {
  const [currentSlide, setSlide] = useState<number>(1);

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
        currentSlide={currentSlide}
        setSlide={setSlide}
      />
      <SlideTwo
        currentSlide={currentSlide}
      />
    </div>
  );
}
