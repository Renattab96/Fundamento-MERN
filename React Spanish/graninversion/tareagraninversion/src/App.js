import './App.css';
import Personcard from './components/PersonCard';

function App() {
  return (
    <div className='App'>
      <Personcard
        lastName={'Doe'}
        firstName={'Jane'}
        age={45}
        hairColor={'Brown'}
      />

      <Personcard
        lastName={'Smith'}
        firstName={'Jhon'}
        age={88}
        hairColor={'Brown'}
      />

      <Personcard
        lastName={'Fillmore'}
        firstName={'Millard'}
        age={62}
        hairColor={'Brown'}
      />

      <Personcard
        lastName={'Fillmore'}
        firstName={'Millard'}
        age={62}
        hairColor={'Brown'}
      />
    </div>
  );
}

export default App;
