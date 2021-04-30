import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { navItems } from "../utilities/navItems";

export default function BurgerNav() {
  return (
    <div className="md:hidden">
      <Menu styles={styles} right disableAutoFocus>
        {navItems.map(function (item) {
          return (
            <Link key={item.name} shallow passHref href={item.link}>
              <a className="text-black mb-2" id={item.name}>
                {item.name}
              </a>
            </Link>
          );
        })}
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  bmItem: {
    color: "black",
    marginBottom: "1rem",
  },
};
