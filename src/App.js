import RoutePath from './routers/RoutePath';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slide';
import Home from './pages/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="flex flex-col overflow-hidden w-full">
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <RoutePath />
    <br/>
    {/* <Home/> */}
    {/* <br/> */}
    <Footer/>
    </div>
  );
}

export default App;
