
import './App.css';
import Projects from './containers/Projects';
import myimage from'./static/photo.jpg'
import './static/style.css'

function App() {
  
  

  return (
    <div className="App">
      
      <div className='header'>
        <img  className='myPhoto' alt='myphoto'/>
        <div className='name'>
        <h3>Anugrah P</h3>
        <span>@anugrahprathap</span>
        </div>
      </div>
      <Projects/>


    </div>
  );
}

export default App;

