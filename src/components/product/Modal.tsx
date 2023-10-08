import React, { ReactNode } from "react";

const modalStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "white",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
};

interface ModalProps {
  visible: boolean;
  title: string;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ visible, title, onClose, children }) => {
  if (!visible) {
    return null; // Не рендерить модальное окно, если оно скрыто
  }

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={closeModal} style={modalStyle}>
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
