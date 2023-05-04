import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="main--container">
      <ul className="ordered--list--links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
