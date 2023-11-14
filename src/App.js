import Car from './components/Car';
import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Aibol Bissenkul</h1> 
        <Car name="BMW" count="5" year="2023" mark={true} />
        <Car name="Mercedes" count="1" year="2022" mark={false} />
      </div>
  );
}

export default App;
