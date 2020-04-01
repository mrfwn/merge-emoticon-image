import React,{useState} from 'react';
import mergeImages from 'merge-images';
import { FaArrowRight,FaArrowLeft,FaArrowDown,FaArrowUp } from 'react-icons/fa';
import { saveAs } from '@progress/kendo-file-saver';
import body from './body.png';
import eyes from './eyes.png';
import mouth from './mouth.png';
import './App.css';

function App() {
  const [xbody,setXbody] = useState(0);
  const [ybody,setYbody] = useState(0);
  const [xeyes,setXeyes] = useState(0);
  const [yeyes,setYeyes] = useState(0);
  const [xmouth,setXmouth] = useState(0);
  const [ymouth,setYmouth] = useState(0);
  const [image,setImage] = useState('');

  function saveFile(){
    saveAs(image, "imagejoin.png");
  }

  mergeImages([
    { src: body, x: xbody, y: ybody },
    { src: eyes, x: xeyes, y: yeyes },
    { src: mouth, x: xmouth, y: ymouth }
  ]).then(b64 => setImage(b64));

  return (
    <div class="App" >
        <div class="image">
          <img class="final" alt="figura" src={image} />
          
        </div>      
        
        <div class="buttonContainer">
            <div class="body">
              <div class="buttonbord">
                <button onClick={() => setYbody(ybody-1)}>
                  <FaArrowUp size={18} />
                </button>
              </div>
              
              <div class="buttonmid">
                <button onClick={() => setXbody(xbody-1)}>
                  <FaArrowLeft size={18} />
                </button>
                <img class="icon" src={body} alt="body" />
                <button onClick={() => setXbody(xbody+1)}>
                  <FaArrowRight size={18} />
                </button>
              </div>

              <div class="buttonbord">
                <button onClick={() => setYbody(ybody+1)}>
                  <FaArrowDown size={18} />
                </button>
              </div>            
            </div>

            <div class="eyes">
              <div class="buttonbord">
                <button onClick={() => setYeyes(yeyes-1)}>
                  <FaArrowUp size={18} />
                </button>
              </div>
              <div class="buttonmid">
                <button onClick={() => setXeyes(xeyes-1)}>
                  <FaArrowLeft size={18} />
                </button>
                <img class="icon" src={eyes} alt="eyes" />
                <button onClick={() => setXeyes(xeyes+1)}>
                  <FaArrowRight size={18} />
                </button>
              </div>
              <div class="buttonbord">
                <button onClick={() => setYeyes(yeyes+1)}>
                  <FaArrowDown size={18} />
                </button>
              </div> 
            </div>


          <div class="mouth">
              <div class="buttonbord">
                <button onClick={() => setYmouth(ymouth-1)}>
                  <FaArrowUp size={18} />
                </button>
              </div>
              <div class="buttonmid">
                <button onClick={() => setXmouth(xmouth-1)}>
                  <FaArrowLeft size={18} />
                </button>
                <img class="icon" src={mouth} alt="mouth"/>
                <button onClick={() => setXmouth(xmouth+1)}>
                  <FaArrowRight size={18} />
                </button>
              </div>
              <div class="buttonbord">
                <button onClick={() => setYmouth(ymouth+1)}>
                  <FaArrowDown size={18} />
                </button>
              </div> 
            </div>
        </div>
        <button class="saveButton"onClick={()=> saveFile()}>Download Image</button>
    </div>
  );
}

export default App;
