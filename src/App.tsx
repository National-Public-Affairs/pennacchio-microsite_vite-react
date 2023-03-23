import { useState, useEffect } from 'react';
import SlideOne from './components/SlideOne/SlideOne';
import SlideTwo from './components/SlideTwo/SlideTwo';
import './App.css';

export default function App() {
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="App">
      <SlideOne display={display} setDisplay={setDisplay} />
      <SlideTwo display={display} />
    </div>
  );
}
