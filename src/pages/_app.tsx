import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import CookieConsent from "@/components/Cookie";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <CookieConsent />
      <Component {...pageProps} />
    </CookiesProvider>
  );
}
