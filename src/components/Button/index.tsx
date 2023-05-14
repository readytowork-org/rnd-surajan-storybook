import React from "react";

interface Props {
  name: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  bgColor?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({
  name,
  type = "button",
  variant = "primary",
  bgColor,
  handleClick,
}: Props) => {
  const style: React.CSSProperties | undefined = {
    // 💡 NOTE: If "bgColor" exists then use that, otherwise use variants to set color.
    backgroundColor: bgColor
      ? bgColor
      : variant === "primary"
      ? "#0d6efd"
      : "#6c757d",
    border: `1px solid ${
      bgColor ? bgColor : variant === "primary" ? "#0d6efd" : "#6c757d"
    }`,
    borderRadius: "5px",
    padding: "8px 16px",
    color: "white",
    cursor: "pointer",
  };
  return (
    <button type={type} style={style} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
