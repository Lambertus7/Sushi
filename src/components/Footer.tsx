import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact">
          <h3>Contact Us</h3>
          <p>Email: info@sushi-restaurant.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <Link href="https://facebook.com" target="_blank">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" target="_blank">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} Sushi Restaurant. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
