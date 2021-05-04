import Link from "next/link";
import { navItems } from "../../utilities/navItems";
import SubscribeModal from "./SubscribeModal";

export default function Nav() {
  const linkClasses = "mr-7 text-black menu-item-name";
  return (
    <div>
      <div className="hidden md:block text-black-full mt-8 my-3 grid grid-cols-2 md:flex md:justify-center md:items-center">
        {navItems.map(function (item) {
          return (
            <Link key={item.name} shallow passHref href={item.link}>
              <div className="relative">
                <a className={linkClasses}> {item.name} </a>
                <div className="bottom-line"></div>
              </div>
            </Link>
          );
        })}
        <SubscribeModal />
      </div>
    </div>
  );
}

const ModalCustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
