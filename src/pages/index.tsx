import { useEffect, useState } from "react";
import CookieConsent from "@/components/Cookie";
import { useCookies } from "react-cookie";

const Homepage = () => {
  const [cookies] = useCookies(["cookieConsent"]);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    if (!cookies.cookieConsent) {
      setShowCookieConsent(true);
    }
  }, [cookies]);

  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      {showCookieConsent && <CookieConsent />}
    </div>
  );
};
export default Homepage;
