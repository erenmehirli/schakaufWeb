import RoutePath from './routers/RoutePath';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slide';
import Home from './pages/Home';

function App() {
  return (
    <div className="flex  flex-col">
    <Navbar/>
    <br/>
    <br/>
    <RoutePath />
    <br/>
    <Home/>
    <br/>
    <Footer/>
    </div>
  );
}

export default App;
