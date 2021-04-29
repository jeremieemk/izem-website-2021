import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
import Modal from "react-modal";
import { useState } from "react";


export default function Nav() {
  const linkClasses = "mr-7 text-black";

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <div
        className="text-blackw-full mt-8 my-3 grid grid-cols-3 md:flex md:justify-center md:items-center
    "
      >
        <Link shallow passHref href="/work">
          <a className={linkClasses}> Work </a>
        </Link>
        <Link shallow passHref href="/about">
          <a className={linkClasses}> Bio </a>
        </Link>
        <Link shallow passHref href="/contact">
          <a className={linkClasses}> Contact </a>
        </Link>
        <a
          href="http://www.elis-records.com/"
          target="_blank"
          className={linkClasses}
        >
          Elis Records
        </a>

        <a
          href="https://www.instagram.com/izem__music/"
          target="_blank"
          className={linkClasses}
        >
          Instagram
        </a>
        <a
          href="https://open.spotify.com/artist/2dJpwMtmOBr9ad4D7vRf2r"
          target="_blank"
          className={linkClasses}
        >
          Spotify
        </a>
        <a
          href="https://www.deezer.com/en/artist/6272676"
          target="_blank"
          className={linkClasses}
        >
          Deezer
        </a>
        <a
          href="https://izemsounds.bandcamp.com/album/l-ba"
          target="_blank"
          className={linkClasses}
        >
          Bandcamp
        </a>
        <a
          href="https://twitter.com/izem"
          target="_blank"
          className={linkClasses}
        >
          Twitter
        </a>
        <span
          onClick={openModal}
          className="cursor-pointer highlight--secondary text-xl"
        >
          Subscribe
        </span>
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        
        <SubscribeForm />
      </Modal>
    </div>
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
