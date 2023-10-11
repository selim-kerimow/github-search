import { Routes, Route} from 'react-router-dom'

// pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";



const App: React.FC = () => {



  return (
    <div className="">


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

    </div>
  );
}

export default App;
