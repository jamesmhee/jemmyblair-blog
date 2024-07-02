import React from "react";

interface IInputProps {
  type: string;
  placeholder: string;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean
}

const Input = ({ type, placeholder, onInput, required }: IInputProps) => {  
  return (
    <div className="flex items-center justify-center w-full">
      <input
        required={required}
        onInput={onInput}
        type={type}
        autoComplete={type === 'password' ? 'current-password' : 'username'}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-[500px] file:px-5 mx-5 sm:mx-0"
      />
    </div>
  );
};

export default Input;
