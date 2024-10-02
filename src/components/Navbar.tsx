const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>{/* <a href="/privacy">Privacy Policy</a> */}</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
