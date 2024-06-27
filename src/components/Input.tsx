import React from "react";

interface IInputProps {
  type: string;
  placeholder: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, placeholder, onInput }: IInputProps) => {
  return (
    <div className="flex items-center justify-center w-full">
      <input
        onInput={onInput}
        type={type}
        autoComplete={type === 'password' ? 'current-password' : 'username'}
        placeholder={placeholder}
        className="input input-bordered w-[calc(100vh_-_200px)] px-5 mx-5 sm:mx-0"
      />
    </div>
  );
};

export default Input;
