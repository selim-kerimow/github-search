import { Routes, Route} from 'react-router-dom'

// pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App: React.FC = () => {



  return (
    <div className="">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
