import './App.css';
import Home from './components/Home';
 function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <div  className='test'> 
      <Home/>
      <img src={require ("./img/background.png")} className='imgbck' alt="logo" />
      
      </div>
    </div>
  );
}

export default App;
