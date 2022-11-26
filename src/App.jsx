import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Trash from './pages/Trash';
import AuxContext from './context/AppContext';

function App() {
  return (
    <div className="App">
    <AuxContext>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trash" element={<Trash/>}/>
      </Routes>
    </AuxContext>
    </div>
  );
}

export default App;
