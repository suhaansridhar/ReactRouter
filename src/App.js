import './App.css';
import {Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import Home from './Home';
import Books from './Books';

function App() {
  return (
    <BrowserRouter>

    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Books">Books</Link></li>
    </ul>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Books' element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
