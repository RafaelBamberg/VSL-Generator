import './App.css';
import image from './images/GERADOR_DE.png'
import pptxgen from "pptxgenjs";

function App() {
  const generate = () => {
    let pptx = new pptxgen()

    let slide = pptx.addSlide();
    slide.addText("Primeiro slide")


    pptx.writeFile()

    console.log('Executou')
}
  return (
    <div>
        <div class="img-fluid">
            <img src={image} alt='imagem' />
      </div>
    <div class="area-texto">
        <textarea id="area-texto" name="area-vsl" rows="30" cols="150">
        apenas testes
        </textarea>
    </div>
    <div class="area-buttons">
        <button onClick={generate}>Gerar VSL</button> 
    </div>
    <footer class="footter-content">Crisgay.inc@2022</footer>
    </div>
  );
}

export default App;
