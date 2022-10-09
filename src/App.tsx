import './App.css';
import image from './images/GERADOR_DE.png'
import pptxgen from "pptxgenjs";
import React, { useState } from 'react';

function App() {

  const [message, setMessage] = useState('');

  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
  };

  const generate = () => {
    let pptx = new pptxgen()

    const format = message.split('\n')

    format.forEach(element => {
      pptx.defineLayout({ name:'A3', width: 16, height: 9 });
      pptx.layout = 'A3'
      let slide = pptx.addSlide();

      slide.addText(element, {
        x: 0.5,
        y: 3.5,
        w: 1,
        h: 2,
        align: 'center',
        color: "363636",
        fill: {
          type: 'solid', 
          color: "#FFFFFF",
          transparency: 100,
       },
       shape: 'cloud'
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
