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

    let slide = pptx.addSlide();
    slide.addText(message)


    pptx.writeFile()
}
  return (
    <div>
        <div className="img-fluid">
            <img src={image} alt='imagem' />
      </div>
    <div className="area-texto">
        <textarea value={message} onChange={handleMessageChange} rows={30} cols={150} />
    </div>
    <div className="area-buttons">
        <button onClick={generate}>Gerar VSL</button> 
    </div>
    <footer className="footter-content">Crisgay.inc@2022</footer>
    </div>
  );
}

export default App;
