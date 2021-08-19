import './App.css';

import Converter from "./components/Converter"

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="linha">
        <Converter moedaA="USD" moedaB="BRL"></Converter>
        <Converter moedaA="BRL" moedaB="USD"></Converter>
      </div>
      <div className="linha">
        <Converter moedaA="CAD" moedaB="BRL"></Converter>
        <Converter moedaA="BRL" moedaB="CAD"></Converter>
      </div>
      <div className="linha">
        <Converter moedaA="EUR" moedaB="BRL"></Converter>
        <Converter moedaA="BRL" moedaB="EUR"></Converter>
      </div>
    </div>
  );
}

export default App;
