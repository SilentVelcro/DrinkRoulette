import React from "react";
import App from "../../App";


type CustomBaseButtonProps = {};

type BaseButtonProps = CustomBaseButtonProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;

export const Button: React.FC<BaseButtonProps> = ({
  children,
  onClick,
  style,
  title,
}) => {
  const baseButtonStyles: React.CSSProperties = {
    borderTopWidth: "1px solid #5e5e5e",
    backgroundColor: "#00d9ff",
    padding: "10px 20px",
    borderRadius: "14px",
    boxShadow: "rgba(0,0,0,1) 0 1px 0",
    textShadow: "rgba(0,0,0,.4) 0 1px 0",
    color: "#000000",
    fontSize: "24px",
    fontFamily: "Georgia, serif",
    textDecoration: "none",
    verticalAlign: "middle",
    borderTopColor: "#ff00f7",
  };

  return (
    <button
      onClick={onClick}
      style={{ ...baseButtonStyles, ...style }}
      title={title}
    >
      {title ?? children}
    </button>
  );
};

export default App;