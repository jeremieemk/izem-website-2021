import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
import Modal from "react-modal";
import { useState } from "react";

export default function Nav() {
  const linkClasses = "mr-7 text-black menu-item-name";

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const items = [
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Bio",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Elis Records",
      link: "http://www.elis-records.com/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/izem__music/",
    },
    {
      name: "Spotify",
      link: "https://open.spotify.com/artist/2dJpwMtmOBr9ad4D7vRf2r",
    },
    {
      name: "Deezer",
      link: "https://www.deezer.com/en/artist/6272676",
    },
    {
      name: "Bandcamp",
      link: "https://izemsounds.bandcamp.com/",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/izem",
    },
  ];

  function renderNavItems() {
    items.map(function (item) {
      return (
        <Link shallow passHref href={item.link}>
          <div className="relative">
            <a className={linkClasses}> {item.name} </a>
            <div className="bottom-line"></div>
          </div>
        </Link>
      );
    });
  }

  return (
    <div>
      <div className="hidden md:block text-black-full mt-8 my-3 grid grid-cols-2 md:flex md:justify-center md:items-center">
        {items.map(function (item) {
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
