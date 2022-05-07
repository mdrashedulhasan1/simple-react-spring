import logo from './logo.svg';
import './App.css';
import { useSpring, animated, config } from 'react-spring'
import { useState } from 'react';
function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })
  return (
    <div className="App">
      <animated.h1 style={props}>Myself Rashedul Hasan</animated.h1>
    </div>
  );
}

export default App;
