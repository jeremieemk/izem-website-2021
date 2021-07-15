import "../styles/globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import BurgerNav from "./components/BurgerNav";
import FacebookPixel from "../lib/FacebookPixel";

function MyApp({ Component, pageProps }) {
  return (
    <FacebookPixel>
      <div className=" p-4 w-screen" id="outer-container">
        <BurgerNav />
        <Header />
        <Nav pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <MainContainer>
          <Component {...pageProps} id="page-wrap" />
        </MainContainer>
        <Footer className="absolute bottom-0" />
      </div>
    </FacebookPixel>
  );
}

export default MyApp;
