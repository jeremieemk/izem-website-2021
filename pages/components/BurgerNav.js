import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { navItems } from "../utilities/navItems";
import SubscribeModal from "./SubscribeModal";
import React, { useState } from "react";

export default function BurgerNav() {
  const [menuOpenState, setMenuOpenState] = useState(false);
  function toggleMenuState() {
    setMenuOpenState(!menuOpenState);
  }
  function closeModal() {
    console.log("function");
    menuOpenState && setMenuOpenState(false);
  }
  console.log("menu state", menuOpenState);
  return (
    <div className="md:hidden">
      <Menu
        styles={styles}
        onStateChange={toggleMenuState}
        right
        disableAutoFocus
        isOpen={false}
      >
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
    right: "0px",
    top: "0px",
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
