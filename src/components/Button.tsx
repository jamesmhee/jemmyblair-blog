import React from 'react'

type Props = {
    text: string
    style: string
    type?: "submit" | "reset" | "button"
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({text, style, type, onClick}: Props) => {
    const findType = () =>{
        if(style === 'signin'){
            return 'btn-success'
        }else if(style === 'signup'){
            return 'btn-warning'
        }else if(style === 'secondary'){
            return 'btn-secondary'
        }else if(style === 'accent'){
            return 'btn-accent'
        }
    }
  return (
    <button onClick={onClick} type={type} className={'btn ' + findType()}>
        {text}
    </button>
  )
}

export default Button