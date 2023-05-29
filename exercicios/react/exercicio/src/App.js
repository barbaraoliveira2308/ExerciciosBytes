import logo from './logo.svg';
import './App.css';
import Checkbox from './Checkbox';
import Contador from './Contador';
import HelloWorld from './HelloWorld';
      /** usado para escrever cod em js (( <Checkbox initialState = {}/> )) */
function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Checkbox />
      <Contador/>
    </div>
  );
}

export default App;
