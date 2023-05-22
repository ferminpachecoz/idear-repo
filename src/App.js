import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Objetivos from './pages/Objetivos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/objetivos' element={<Objetivos />} />
      <Route path='/contacto' element={<Contacto />} />
    </Routes>
  );
}

export default App;
