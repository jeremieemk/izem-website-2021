import Modal from "react-modal";
import { useState } from "react";
import SubscribeForm from "./SubscribeForm";

export default function SubscribeModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <>
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
      </>
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
