import { geomanist, gallery } from "../styles/fonts";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${geomanist.variable} ${gallery.variable}`}>
      <Header activePage={pageProps.page.uid} pageType={pageProps.page.type} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
