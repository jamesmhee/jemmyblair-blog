import React from 'react'
import { RiLogoutBoxRLine,RiLoginBoxLine } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";


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
        }else if(style === 'signout'){
            return 'btn-error'
        }
    }

    const Icon = () =>{
        if(style === 'signin'){
            return <RiLoginBoxLine/>
        }else if(style === 'signout'){
            return <RiLogoutBoxRLine/>
        }else if(style === 'signup'){
            return <FaUserPlus/>
        }else{
            return
        }
    }

  return (    
    <button onClick={onClick} type={type} className={'btn flex gap-3 ' + findType()}>
        {Icon()}
        {text}
    </button>    
  )
}

export default Button