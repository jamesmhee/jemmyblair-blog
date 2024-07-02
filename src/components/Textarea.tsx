import React from "react";

interface IInputProps {
  rows: number
  cols: number
  placeholder: string;
  onInput?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  resize?: string
}

const Textarea = ({ rows, cols, placeholder, onInput, resize }: IInputProps) => {  
  return (
    <div className="flex items-center justify-center w-full">
      <textarea
        style={resize === 'no' ? {resize:'none'} : {}}
        onInput={onInput}                
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="input input-bordered w-full max-w-[500px] py-2 h-full file:px-5 mx-5 sm:mx-0"
      >      
      </textarea>
    </div>
  );
};

export default Textarea;
