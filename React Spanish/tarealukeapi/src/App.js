import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LukeApi from "./components/LukeApi";
import './App.css'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Tarea LukeApi Renatta Benitez</h1>
        <Routes>
          <Route path="/" element={<LukeApi />} />
          <Route path="/:id" element={<LukeApi/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

