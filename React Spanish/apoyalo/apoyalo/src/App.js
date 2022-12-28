import PersonaCard from './components/Cards/PersonaCard'

function App() {
  return (
    <div >
      <h1>Apoyalo </h1>
      <PersonaCard nombre ='Ana'apellido='Lopez'edad='30'colorCabello='negro'></PersonaCard>
      <PersonaCard nombre ='Renatta'apellido='Benitez'edad='26'colorCabello='Marron Claro '></PersonaCard>
      <PersonaCard nombre ='David'apellido='Paniagua'edad='27'colorCabello='negro'></PersonaCard>
      <PersonaCard nombre ='Camila'apellido='Morales'edad='10'colorCabello='negro'></PersonaCard>
    </div>
    
  );
}

export default App;
