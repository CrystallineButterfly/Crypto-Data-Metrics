import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { microphone } from 'react-icons-kit/fa/microphone';
import { gear } from 'react-icons-kit/fa/gear';
import logo from '../images/rocket.webp';

const Header = () => (
  <>
    <header>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="Crypto World logo" />
          <span>Crypto World</span>
        </div>
      </Link>
      <div className="feature">
        <i>
          <Icon size={25} icon={microphone} />
        </i>
        <i>
          <Icon size={25} icon={gear} />
        </i>
      </div>
    </header>
  </>
);

export default Header;
