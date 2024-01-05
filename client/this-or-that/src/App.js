import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.component';
import YesOrNo from './components/yes-or-no.component';
import Restaurants from './components/restaurants.component';
import Navbar from './components/navbar.component';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';




function App() {
  return (

    <Router>
      <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yesorno" element={<YesOrNo />} />
        <Route path="/restaurants" element={<Restaurants />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
