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

// escolher outros tamanhos 9:16 e 4:3 (muito provavel que tenha que configurar outras variaveis de x,y,w e h)

    format.forEach(element => {
      pptx.defineLayout({ name:'A3', width: 16, height: 9 });
      pptx.layout = 'A3'
      let slide = pptx.addSlide();

      slide.background = { color: "#ffffff" }; // cor do fundo do slide
      
      // separar igual ao phyton, uma config para a caixa e outra para o texto, tenta criar a caixa e dps add o texto
      
     
  slide.addText(element,
    { x: 1.6, // esquerda para direite
      y: 4, // de cima pra baixo
      w: "80%",
    h: 1,
    fontSize: 36,
    align: "center",
    color: "#000000",
    fontFace:'Open Sans' 
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
    <footer className="footter-content">Gerador de VSL @Copyright 2022</footer>
    </div>
  );
}

export default App;
