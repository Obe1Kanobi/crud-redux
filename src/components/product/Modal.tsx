import React, { ReactNode } from "react";
import { EscBut, ModTitle, ModalCont } from "../../style/Modal.style";

interface ModalProps {
  visible: boolean;
  title: string;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, title, onClose, children }) => {
  if (!visible) {
    return null; // не рендерить модальное окно, если оно скрыто
  }

  const closeModal = () => {
    onClose();
  };

  return (
    <ModalCont className="as" onClick={closeModal}>
      <div>
        <ModTitle>
          {title}
          <EscBut onClick={closeModal}>&times;</EscBut>
        </ModTitle>
      </div>
      <div>{children}</div>
    </ModalCont>
  );
};

export default Modal;
