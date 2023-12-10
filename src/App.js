
import './App.css';
import Footer from './containers/Footer';
import Projects from './containers/Projects';
import myimage from'./static/photo.jpg'
import './static/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  

  return (
    <div className="App">
      
      <div className='header bg-cadetblue text-white p-1'>
      <img className='myPhoto rounded-circle' src={myimage} alt='myphoto' />
      <div className='name'>
        <h3>Anugrah P</h3>
        <span>@anugrahprathap</span>
      </div>
    </div>
      <Projects/>
      <Footer/>


    </div>
  );
}

export default App;

