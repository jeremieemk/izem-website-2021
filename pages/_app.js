import "../styles/globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-4" id="outer-container">
      <Nav pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <Component {...pageProps} id="page-wrap" />
      <Footer />
    </div>
  );
}

export default MyApp;
