import React from "react";
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="bg-light modalContent">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
