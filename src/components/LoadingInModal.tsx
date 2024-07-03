import { ReactNode } from "react"

const LoadingInModal = ({word, isOpen, style}:{word:string,isOpen:boolean,style?:string}):ReactNode => {              
    if(!style) style = 'success'
    return(
        isOpen ?
        (   
            <div className="flex flex-col gap-5 items-center w-full justify-center absolute top-0 left-0 bg-zinc-800 bg-opacity-80 h-full">
                <span className={`loading loading-spinner w-32 ` + 'text-'+style}></span>
                <span className="text-[16px] font-bold">{word}...</span>
            </div>
        )
        :    
        (<>        
        </>)   
    )
}

export default LoadingInModal