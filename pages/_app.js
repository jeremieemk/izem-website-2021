import "../styles/globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" p-4 w-screen" id="outer-container">
      <Header />
      <Nav pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <Component {...pageProps} id="page-wrap" />
      <Footer className="absolute bottom-0" />
    </div>
  );
}

export default MyApp;
