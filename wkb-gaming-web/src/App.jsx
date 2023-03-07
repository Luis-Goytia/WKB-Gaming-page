import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { AppGames } from './Components/Services/AppGames';
import { EsportServices } from './Components/Services/EsportServices';
import { Marketing } from './Components/Services/Marketing';
import { ProductDesing } from './Components/Services/ProductDesing';
import World from './Components/Experience/World';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Experience" element={<World />} />
        <Route path="/" element={<Home />} />
        <Route path="/Services/AppGames" element={<AppGames />} />
        <Route path="/Services/EsportServices" element={<EsportServices />} />
        <Route path="/Services/Marketing" element={<Marketing />} />
        <Route path="/Services/ProductDesing" element={<ProductDesing />} />
      </Routes>
    </div>
  );
}

export default App;

/*

*/
