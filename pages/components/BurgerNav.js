import Link from "next/link";
import Menu from "react-burger-menu/lib/menus/slide";
import { navItems } from "../../utilities/navItems";
import React, { useState, useContext } from "react";
import SubscribeModal from "./SubscribeModal";

// create a context control the open state
const MyContext = React.createContext();

function MyProvider(props) {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(false),
        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

function BurgerMenu() {
  const ctx = useContext(MyContext);
  console.log("context", ctx);
  return (
    <Menu
      styles={styles}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
      right
      disableAutoFocus
    >
      {navItems.map(function (item) {
        return (
          <Link key={item.name} shallow passHref href={item.link}>
            <a
              className="text-black mb-2"
              id={item.name}
              onClick={ctx.toggleMenu}
            >
              {item.name}
            </a>
          </Link>
        );
      })}
      <a onClick={ctx.toggleMenu}>
        <SubscribeModal />
      </a>
    </Menu>
  );
}

export default function BurgerNav() {
  return (
    <MyProvider>
      <div className="md:hidden">
        <BurgerMenu />
      </div>
    </MyProvider>
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
