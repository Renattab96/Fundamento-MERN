import React from 'react';
import './App.css';
import FelizCumple from './componentes/FelizCumple.js'
function App() {
  return (
    <div className="App">
      <FelizCumple nombre={'Renatta'} apellido={'Benitez'} edad={26} colorPelo={'castano claro'} />
      <FelizCumple nombre={'Miguel'} apellido={'Benitez'} edad={20} colorPelo={'castano oscuro'} />
      <FelizCumple nombre={'Gilbert'} apellido={'Benitez'} edad={11} colorPelo={'rubio'} />
    </div>
  )
}

export default App;
