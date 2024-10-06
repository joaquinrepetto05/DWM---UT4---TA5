import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Cambiar el estado de visibilidad
  };

  return (
    <>
      <div className='transparent-div'>
        <Button onClickHandler={toggleVisibility}>Mostrar/Esconder</Button>
        {isVisible && <p>Texto que aparece y desaparece</p>}
      </div>
    </>
  )
}

export default App