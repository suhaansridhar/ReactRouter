import {Routes, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
