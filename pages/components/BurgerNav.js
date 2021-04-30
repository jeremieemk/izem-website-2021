import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

export default function BurgerNav() {
  return (
    <div className="md:hidden">
      <Menu styles={styles} right disableAutoFocus>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </div>
  );
}

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "1rem",
    top: "1rem",
  },
  bmBurgerBars: {
    background: "#373a47",
    height: "4px",
    background: "grey",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    width: "100vw",
    height: "100vh",
  },
  bmMenu: {
    background: "white",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
};
