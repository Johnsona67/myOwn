import React, { useState } from 'react'
import "./Header.css"
import About from '../pages/About'



export default function Header() {
    const [goToAbout, setGoToAbout] = React.useState(false);
    const [elements, setElements] = useState([])

    if (goToAbout) {
        return <Navigate to={About}/>
    }

    const createArr = () => {
      const minNumber = parseInt(prompt('enter your minimum number'));
      const maxNumber = parseInt(prompt('enter your maximum number'));

      const generatedElements = Array.from({ length: 1000000 }, (_, index) => ({
        id: index + 1,
        value: Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber, // Random value between min and max
      }));

      setElements(generatedElements);

    }

  return (
<header>
	<div class="overlay">
        <h1>Your million elements</h1>
        <h3>Qurdebs sicocxle</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
        <button onClick={() => {setGoToAbout(true)}} className='button'>READ MORE</button>
    </div>
    <button onClick={{createArr}} style={{marginTop: '200px'}}>
        <span aria-hidden="true">Paste Link</span>
        <span></span>
        <span>Paste Link</span>
    </button>
</header>
  )
}
