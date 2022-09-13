import { Link } from 'react-router-dom';
import './navlinks.css';

const NavLinks = () => (
  <>
    <header className="header">
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Calculator">Calculator</Link></li>
          <li><Link to="/Quote">Quote</Link></li>
        </ul>
      </nav>
    </header>
  </>
);

export default NavLinks;
