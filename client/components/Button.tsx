import React from "react";

interface Props {
  buttonText: string;
  type?: "button" | "submit";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ buttonText, type, onClick }: Props) => {
  return (
    <button
      type={type || "submit"}
      onClick={onClick}
      className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-50"
    >
      {buttonText}
    </button>
  );
};

export default Button;
