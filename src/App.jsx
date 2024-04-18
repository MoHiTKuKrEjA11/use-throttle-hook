import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useThrottle from './hooks/use-throttle';

function App() {
  const [windowSize, setWindowSize] = useState({
    width:window.innerWidth,
    height:window.innerHeight,
  });

const hresize=()=>{
setWindowSize({
  width:window.innerWidth,
  height:window.innerHeight,
})
};

const throttleResize=useThrottle(hresize,5000);

  useEffect(()=>{
    window.addEventListener("resize",throttleResize);

    return ()=>{
      window.removeEventListener("resize",throttleResize);
    }

  },[])

  return (
    <>
      Window Size:{windowSize.width} x {windowSize.height}
    </>
  )
}

export default App
