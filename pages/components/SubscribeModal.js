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
          className="px-2 py-2 transform duration-200 hover:scale-105 cursor-pointer bg-primary text-xl text-white"
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
