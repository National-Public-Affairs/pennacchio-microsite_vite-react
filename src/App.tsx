import { useState } from 'react';
import NavButton from './components/NavButton/NavButton';
import Footer from './components/Footer/Footer';
import SlideOne from './components/SlideOne/SlideOne';
import SlideTwo from './components/SlideTwo/SlideTwo';
import SlideTwoPointFive from './components/SlideTwoPointFive/SlideTwoPointFive';
import SlideThree from './components/SlideThree/SlideThree';
import SlideFour from './components/SlideFour/SlideFour';
import './App.css';

export default function App() {
  const [currentSlide, setSlide] = useState<number>(1);

  const handleCurrentSlide = (desiredSlide: number): void => {
    // this will receive input and will perform logic before setting
    // value to avoid the current slide number going beyond the number
    // of existing slides
    const min = 1;
    const max = 7;

    // next slide
    if (desiredSlide > currentSlide) {
      // next button last slide goes back to first
      if (desiredSlide > max) {
        setSlide(min);
      } else {
        setSlide(desiredSlide);
      }
    // previous slide
    } else if (desiredSlide < currentSlide) {
      // back button on first slide stays at first
      if (desiredSlide < min) {
        setSlide(currentSlide);
      } else {
        setSlide(desiredSlide);
      }
    }
  };

  return (
    <div className="App">
      <Footer />
      {
        currentSlide != 1
          ? (
            <NavButton
              currentSlide={currentSlide}
              setSlide={handleCurrentSlide}
            />
          )
          : null
      }
      <div className="slide">
        <SlideOne
          currentSlide={currentSlide}
          setSlide={handleCurrentSlide}
        />
        <SlideTwo
          currentSlide={currentSlide}
        />
        <SlideTwoPointFive
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
