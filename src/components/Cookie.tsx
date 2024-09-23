import Link from "next/link";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const CookieConsent = () => {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    console.log("CookieConsent component mounted");
    if (!cookies.cookieConsent) {
      console.log("No cookieConsent cookie found, showing banner");
      setShowCookieConsent(true);
    }
  }, [cookies]);

  const giveConsent = () => {
    setCookies("cookieConsent", true, { path: "/" });
    console.log("CookieConsent set to true");
    setShowCookieConsent(false);
  };

  if (!showCookieConsent) {
    return null;
  }

  return (
    <div
      className="cookie-container"
      style={{
        backgroundColor: "yellow",
        position: "fixed",
        bottom: "0",
        width: "100%",
        padding: "20px",
        border: "2px solid black",
        zIndex: "1000",
      }}
    >
      <p>
        We use cookies to enhance your user experience. By using our website,
        you agree to the use of cookies. {""}
        <Link href={"/privacy-policy"}> Learn more</Link>
      </p>
      <button
        className="cookie-btn"
        onClick={giveConsent}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
        }}
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
