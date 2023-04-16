import React, { ButtonHTMLAttributes } from "react";

type DefaultButtonHTMLAttributes = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "id" | "className" | "children" | "type" | "onClick"
> & { color: "red" | "blue" | "green" };

function Button({
  children,
  type,
  color,
  onClick,
}: DefaultButtonHTMLAttributes) {
  return (
    <button
      className="general-button"
      type={type}
      style={{ backgroundColor: color }}
      onClick={(e) => onClick && onClick(e)}
    >
      {children}
    </button>
  );
}
export default Button;
