import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Objetivos from './pages/Objetivos';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/objetivos' element={<Objetivos />} />
    </Routes>
  );
}

export default App;
