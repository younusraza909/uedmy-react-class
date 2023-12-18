import styled from "styled-components";

import { HiXMark } from "react-icons/hi2";
import { createPortal } from "react-dom";
import { createContext, useRef, useState } from "react";
import { useContext } from "react";
import { cloneElement } from "react";
import { useEffect } from "react";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

const ModalContext = createContext();
function Modal({ children }) {
  const [openModal, setOpenModal] = useState("");

  const onClose = () => setOpenModal("");
  const onOpen = setOpenModal;

  return (
    <ModalContext.Provider value={{ openModal, onClose, onOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { onOpen } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => onOpen(opens) });
}

function Window({ children, opens }) {
  const { openModal, onClose } = useContext(ModalContext);

  const modalRef = useRef();

  useEffect(() => {
    function handleOnClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }

    document.addEventListener("click", handleOnClick, true);

    return () => document.removeEventListener("click", handleOnClick);
  }, [onClose]);

  if (openModal !== opens) return null;
  // Everything is working fine but sometime if we use this modal in a place where parent component
  //  has a css property set to overflow then this modal will be cutt of in order to prevent that we use REACT-PORTAL
  return createPortal(
    <Overlay>
      <StyledModal ref={modalRef}>
        <Button onClick={() => onClose()}>
          <HiXMark />
        </Button>
        {cloneElement(children, { onCloseModal: () => onClose })}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
