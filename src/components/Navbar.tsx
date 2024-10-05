import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">Sushi Delight</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/about">About us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="social-icons">
          <a className="icon" href="https://facebook.com" target="_blank">
            <i className="fa-brands fa facebook"></i>
          </a>
          <a className="icon" href="https://instagram.com" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//I am writing this so that i don't lose my streak on Github tihi.
