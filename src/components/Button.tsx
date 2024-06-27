import React from 'react'

type Props = {
    text: string
    type: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({text, type, onClick}: Props) => {
    const findType = () =>{
        if(type === 'signin'){
            return 'btn-success'
        }else if(type === 'signup'){
            return 'btn-warning'
        }else if(type === 'secondary'){
            return 'btn-secondary'
        }else if(type === 'accent'){
            return 'btn-accent'
        }
    }
  return (
    <button onClick={onClick} type="button" className={'btn ' + findType()}>
        {text}
    </button>
  )
}

export default Button