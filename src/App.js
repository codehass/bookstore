import { Link, Route, Routes } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import Booklists from './components/booklists';
import Categories from './components/categories';

function App() {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-list">
          <h1 className="logo">Bookstore CMS</h1>
          <ul>
            <li>
              {' '}
              <Link className="nav-link" to="/">
                BOOKS
              </Link>
              {' '}
            </li>
            <li>
              <Link className="nav-link" to="/categories">
                CATEGORIES
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <FaUserCircle className="user" />
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
