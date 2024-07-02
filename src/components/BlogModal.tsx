import { SetStateAction } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io";

interface IBlogModalProps {
  data: any
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const BlogModal = ({data, isOpen, setIsOpen, onClick}:IBlogModalProps) => {
  return (    
    <div className={(isOpen ? 'flex' : 'hidden' )+ ' w-screen h-screen bg-zinc-900 bg-opacity-80 items-center fixed top-0 left-0 z-[11]'}>
      <div className="bg-base-200 w-[90%] h-[80%] mx-auto rounded-box ">
        <div className="flex justify-end mt-5 mx-3">
          <button className="text-rose-500" onClick={()=>setIsOpen(false)}>
            <IoIosCloseCircleOutline/>
          </button>
          <button className="hidden" onClick={onClick}></button>
        </div>
        <div className="overflow-y-auto h-full px-5 flex flex-col w-full">            
            <div className="divider">{data?.topic}</div>
            <p className="text-base text-wrap">
              <pre className="text-2xl">{data?.text}</pre>              
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus ratione, distinctio minima incidunt sed iure vitae assumenda quos rem explicabo.
              </p>
            </p>
        </div>
      </div>
    </div>
  )
}

export default BlogModal