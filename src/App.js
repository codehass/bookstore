import { Link, Route, Routes } from 'react-router-dom';
import Booklists from './components/booklists';
import Categories from './components/categories';
import { FaUserCircle } from 'react-icons/fa';

function App() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-list">
          <h1 className="logo">Bookstore CMS</h1>
          <ul>
            <li>
              {' '}
              <Link to="/">BOOKS</Link>{' '}
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </div>

        <div>
          <FaUserCircle />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Booklists />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
