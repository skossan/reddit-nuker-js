import React from "react";

interface Props {
  labelText: string;
  type?: "text" | "password";
  placeholderText: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({labelText, value, onChange, name, placeholderText, required, type}: Props) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{labelText}</label>
      <input
        onChange={onChange}
        value={value}
        type={type || "text"}
        placeholder={placeholderText}
        name={name}
        required={required||false}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
      />
    </>
  );
};

export default InputField;
