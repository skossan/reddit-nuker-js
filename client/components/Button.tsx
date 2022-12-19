import React from 'react'

interface Props {
  buttonText: string;
  type: "button";
}

const Button = ({buttonText, type}: Props) => {
  return (
    <button type={type} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{buttonText}</button>
  )
}

export default Button