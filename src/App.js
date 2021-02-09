import { useRef } from 'react'
import Onglet from './components/Onglet/Onglet'
import "./App.css"

function App() {

  let pointerRef = useRef();

  const pointerMove = e => {
    pointerRef.current.setAttribute('style', `top:${e.pageY - 20}px; left:${e.pageX - 20}px;`)
  }

  return (
    <div onMouseMove={pointerMove} className="App">
      <div ref={pointerRef} className="cursor-custom"></div>
      <Onglet />
    </div>
  );
}

export default App;
