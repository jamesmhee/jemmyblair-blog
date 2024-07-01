import { SetStateAction, useEffect, useMemo } from "react"

interface IModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
    headerText: string
    size?: string
    text?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ModalResponsive = ({isOpen, setIsOpen, headerText, size, text, onClick}:IModalProps) => {       
    const onClickModal = () =>{
        const buttonClick:HTMLElement | HTMLButtonElement | null = document.getElementById('my_modal_4')
        if(buttonClick instanceof HTMLDialogElement){
            buttonClick.showModal()
        }
    }

    const handleEsc = (event:any) =>{                     
        event.preventDefault()        
        setIsOpen(false)
    }

    useEffect(()=>{
        if(isOpen){
            const btn_modal:HTMLElement | HTMLButtonElement | null = document.querySelector("#btn_modal")            
            if(btn_modal){
                btn_modal.click()
            }                
        }        
    }, [isOpen])

    const mediaScreen = () =>{
        if(size === 'xs'){
            return 'max-w-xs'
        }else if(size === 'sm'){
            return 'max-w-sm'
        }else if(size === 'md'){
            return 'max-w-md'
        }else if(size === 'lg'){
            return 'max-w-lg'
        }else if(size === 'xl'){
            return 'max-w-xl'
        }else if(size === '2xl'){
            return 'max-w-2xl'
        }else if(size === '3xl'){
            return 'max-w-3xl'
        }else if(size === '4xl'){
            return 'max-w-4xl'
        }else if(size === '5xl'){
            return 'max-w-5xl'
        }else if(size === '6xl'){
            return 'max-w-6xl'
        }else if(size === '7xl'){
            return 'max-w-7xl'
        }else if(size === 'max'){
            return 'max-w-full'
        }else if(size === 'min'){
            return 'max-w-min'
        }else if(size === 'max'){
            return 'max-w-max'
        }else if(size === 'fit'){
            return 'max-w-fit'
        }else{
            return 'max-w-max'
        }
    }

  return (
    <>
        {
        isOpen ?
            (
            <>
                <button className="hidden" id="btn_modal" onClick={onClickModal}>open modal</button>
                <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle" onCancel={handleEsc}>
                <div className={'modal-box w-full ' + mediaScreen()}>
                    <h3 className="font-bold text-lg">{headerText}</h3>
                    <p>{text}</p>
                    <div className="modal-action">                        
                    <form method="dialog" className="flex gap-5">
                        <button onClick={()=>setIsOpen(false)} className="btn btn-success btn-outline">Nope</button>
                        <button onClick={onClick} className="btn btn-error btn-outline">Yes</button>
                    </form>
                    </div>
                </div>
                </dialog>       
            </>
            )
            :
            (
                <></>
            )
        }
    </>
  )
}

export default ModalResponsive