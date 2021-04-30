import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
import Modal from "react-modal";
import { useState } from "react";
import { navItems } from "../utilities/navItems";

export default function Nav() {
  const linkClasses = "mr-7 text-black menu-item-name";

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

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
        <span
          onClick={openModal}
          className=" transform duration-200 hover:scale-105 cursor-pointer highlight--secondary text-xl"
        >
          Subscribe
        </span>
        <Modal
          isOpen={modalIsOpen}
          style={ModalCustomStyles}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <SubscribeForm />
        </Modal>
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
