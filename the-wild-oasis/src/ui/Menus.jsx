import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import styled from "styled-components";
import { IoEllipsisVertical } from "react-icons/io5";
import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenuContext = createContext();

function Menus({ children }) {
  const [isOpenId, setIsOpenId] = useState("");
  const [position, setPosition] = useState({});

  const handleOpen = setIsOpenId;
  const handleClose = () => setIsOpenId("");

  return (
    <MenuContext.Provider
      value={{ isOpenId, handleOpen, handleClose, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function List({ id, children }) {
  const { isOpenId, position, handleClose } = useContext(MenuContext);
  const ref = useOutsideClick(handleClose);

  if (id !== isOpenId) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { handleClose } = useContext(MenuContext);
  function handleClick() {
    onClick?.();
    handleClose();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

function Toggle({ id }) {
  const { handleOpen, handleClose, isOpenId, setPosition } =
    useContext(MenuContext);

  function handler(e) {
    isOpenId === "" || isOpenId !== id ? handleOpen(id) : handleClose();

    // calculating positioning of click
    // click would happen on scg so we are making sure to get closet button
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.x - rect.width,
      y: rect.y + rect.height + 6,
    });
  }

  return (
    <StyledToggle onClick={handler}>
      <IoEllipsisVertical />
    </StyledToggle>
  );
}

Menus.Menu = StyledMenu;
Menus.List = List;
Menus.Button = Button;
Menus.Toggle = Toggle;

export default Menus;
