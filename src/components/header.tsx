import './header.css';
import img from './Logo.png';

function Header() {
 
    return (
      <div className="main">
        <img src={img} alt="logo" />
      </div>
    )
  }
  
  export default Header;