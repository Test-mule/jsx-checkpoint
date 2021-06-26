import './App.css';
import './style.css';
function App() {
  return (
    <div className="App">
      <div>
       <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
         <h1 className="title-red">Zeineb Moalla</h1>
         <br/>
         <img src="./imageInSrc.jpg" alt='dog'/>
         <br/>
         <img src="/imageInPublic.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="C:\Users\CLIENT\Desktop\Checkpoints\jsx-checkpoint\src\video-1610193075.mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
