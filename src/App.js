import logo from './logo.svg';
import './App.css';
import Carousal from './Components/Carousal';
import Home from './Screens/Home';
import Navbarnew from './Components/Navbar'
import Footer from './Components/Footer';
import Blog from './Screens/Blog';


function App() {
  return (
    <>
      <Navbarnew />
      <Blog/>
      {/* <Home /> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
