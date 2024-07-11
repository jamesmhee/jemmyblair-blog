import { SetStateAction, useEffect, useState, useCallback} from "react"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { getBlogComment } from "../services/BlogServices";
import { FaUserAstronaut } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";



interface IBlogModalProps {
  data: any
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface Comment {
  id: number
  text: string
  by_user: number
  date: string
}

const formatDate = (date:Date) =>{    
  const format = new Date(date)    
  const time = format.toLocaleTimeString('th-TH').slice(0,5)
  return `${format.getDate() < 10 ? '0'+(format.getDate()) : format.getDate()}-${format.getMonth() + 1 < 10 ? '0' + (format.getMonth() + 1) : (format.getMonth() + 1)}-${format.getFullYear()} : ${time}`
}

const BlogModal = ({data, isOpen, setIsOpen, onClick}:IBlogModalProps) => {  

  const [ blogComments, setBlogComments ] = useState<Comment[]>([])

  useEffect(()=>{
    document.body.addEventListener('keydown', (event:any)=>{      
      if(event.code === 'Escape' || event.key === 'Escape' || event.keyCode === 27 ){                
        setIsOpen(false)
      }
    })
  }, [])

  const getComment = useCallback(async ()=>{    
    if(data){
      const getData = await getBlogComment(data.id)      
      if(getData){
        setBlogComments(getData.message.comments)
      }      
    }
  }, [setBlogComments])

  useEffect(()=>{    
    if(isOpen){
      getComment()
    }        
  }, [isOpen])

  return (    
    <div className={(isOpen ? 'flex' : 'hidden' )+ ' w-screen h-screen bg-zinc-900 bg-opacity-80 items-center fixed top-0 left-0 z-[11]'}>
      <div className="bg-base-200 w-[90%] h-full max-h-[600px] mx-auto rounded-box ">
        <div className="flex justify-end mt-5 mx-3">
          <button className="text-rose-500" onClick={()=>setIsOpen(false)}>
            <IoIosCloseCircleOutline/>
          </button>
          <button className="hidden" onClick={onClick}></button>
        </div>
        <div className="overflow-y-hidden px-5 flex flex-col w-full max-h-[520px]">            
            <div className="divider h-max">{data?.topic}</div>
            <div className="text-base h-full text-wrap overflow-x-hidden py-5">
              <div className="text-xl w-full overflow-y-auto h-max border rounded-md border-zinc-400 p-5">
                {data?.text}
              </div>                            
              <div className="w-full my-5 rounded-md flex flex-col items-center">
                <h3 className="text-lg bg-slate-500 p-5 rounded w-full">Comments</h3>
                <div className="w-[98%] overflow-y-auto flex flex-col gap-2 border-b border-l border-r rounded-b p-3">
                  {
                    blogComments.length > 0 ?
                    blogComments.map((elm, index)=>{
                      return(
                        <div key={index} className="chat chat-start">
                          <div className="chat-image avatar">
                            <div className="w-max text-3xl rounded-full m-auto">
                              <FaUserAstronaut />
                            </div>
                          </div>
                          <div className="flex w-full justify-between">
                            <div className="chat-bubble">{elm.text}</div>
                            <div className="flex flex-col max-w-56 w-max min-w-36">
                              <span className="flex justify-end">
                                BY : {elm.by_user}  
                              </span>
                              <span className="text-sm flex gap-2 items-center">
                                <IoIosTime/> : &nbsp;
                                {formatDate(new Date(elm.date))}                              
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    }) : (<div className="text-center my-5">No Comments..</div>)
                  }                
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogModal