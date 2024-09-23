import Link from "next/link";
import { useCookies } from "react-cookie";

const CookieConsent = () => {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);
  const giveConsent = () => {
    setCookies("cookieConsent", true, { path: "/" });
  };
  return (
    <div className="cookie-container">
      <p>
        We use cokies to enhance your user expereince. By using our website, you
        agree ti iyr use of cookies. {""}
        <Link href={"/privacy-policy"}> Learn more</Link>
      </p>
      <button className="cookie-btn" onClick={giveConsent}>
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
