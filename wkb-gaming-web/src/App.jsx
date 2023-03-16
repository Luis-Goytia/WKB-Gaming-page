import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./Components/Home";
import { AppGames } from "./Components/Services/AppGames";
import { EsportServices } from "./Components/Services/EsportServices";
import { Marketing } from "./Components/Services/Marketing";
import { ProductDesing } from "./Components/Services/ProductDesing";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services/AppGames" element={<AppGames />} />
          <Route path="/Services/EsportServices" element={<EsportServices />} />
          <Route path="/Services/Marketing" element={<Marketing />} />
          <Route path="/Services/ProductDesing" element={<ProductDesing />} />
        </Routes>
      </Router>
    </div>
  );
}
/* Luis */
export default App;
