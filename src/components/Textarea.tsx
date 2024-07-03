import React, {forwardRef} from "react";

interface IInputProps {
  rows: number
  cols: number
  placeholder: string;
  onInput?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  resize?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, IInputProps>((props, ref)=>{
  const { rows, cols, placeholder, onInput, resize } = props
  return (
    <div className="flex items-center justify-center w-full">
      <textarea
        ref={ref}
        style={resize === 'no' ? {resize:'none'} : {}}
        onInput={onInput}                
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        className="input input-bordered w-full py-2 h-full px-5 sm:mx-0"
      >      
      </textarea>
    </div>
  );
})


export default Textarea;
