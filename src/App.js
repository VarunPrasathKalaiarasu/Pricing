
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Topbar from './Topbar';
import Layer2 from './Layer2';
import Home from './Home';
import Pricing from './components/Pricing';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="text-center">
      
      <BrowserRouter>
      <Routes>
        <Route path="/Form" element={<form/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
