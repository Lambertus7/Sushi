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
        <div className="nav-icons">
          <a href="https://facebook.com" target="_blank">
            <img src="/icons/facebook-icon.svg" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img src="/icons/instagram-icon.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
