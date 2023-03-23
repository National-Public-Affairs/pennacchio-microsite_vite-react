import { useState, useEffect } from 'react';
import Intro from './components/Intro';
import Body from './components/Body';
import './App.css';

export default function App() {
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="App">
      <Intro display={display} setDisplay={setDisplay} />
      <Body display={display} />
    </div>
  );
}
