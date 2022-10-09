import './App.css';
import image from './images/GERADOR_DE.png'
import pptxgen from "pptxgenjs";
import React, { useState } from 'react';

function App() {

  const [message, setMessage] = useState('');

  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const generate = () => {
    let pptx = new pptxgen()

    const format = message.split('\n')

    format.forEach(element => {
      let slide = pptx.addSlide();

      slide.addText(element, {
        x: 3,
        y: 3,
        color: "363636",
        fill: { color: "F1F1F1" },
    });
    })

    pptx.writeFile()
}
  return (
    <div>
        <div className="img-fluid">
            <img src={image} alt='imagem' />
      </div>
    <div className="area-texto">
        <textarea onChange={handleMessageChange} rows={30} cols={150}>
          {`${message}`}
        </textarea>
    </div>
    <div className="area-buttons">
        <button onClick={generate}>Gerar VSL</button> 
    </div>
    <footer className="footter-content">Gerador de VSL@2022</footer>
    </div>
  );
}

export default App;
