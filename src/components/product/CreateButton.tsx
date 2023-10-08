import React from "react";

interface CreateButtonProps {
  onClick: () => void;
  buttonText: string;
}

const CreateButton: React.FC<CreateButtonProps> = ({ onClick, buttonText }) => {
  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "blue",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  return (
    <div style={buttonStyle} onClick={onClick}>
      <span style={{ fontSize: "24px" }}>{buttonText}</span>
    </div>
  );
};

export default CreateButton;
