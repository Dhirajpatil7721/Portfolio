import './App.css';
import './componants/Navbar.jsx';
import Navbar from './componants/Navbar.jsx';
import Footer from './componants/Footer.jsx'; 
import Home from './componants/Home.jsx'; 

function App() {
  return (
    <div className="App">
     

      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>

    </div>
  );
}

export default App;
