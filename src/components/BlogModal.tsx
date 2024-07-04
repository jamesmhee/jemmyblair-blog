import { SetStateAction, useEffect } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io";

interface IBlogModalProps {
  data: any
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const BlogModal = ({data, isOpen, setIsOpen, onClick}:IBlogModalProps) => {  
  useEffect(()=>{
    document.body.addEventListener('keydown', (event:any)=>{      
      if(event.code === 'Escape' || event.key === 'Escape' || event.keyCode === 27 ){                
        setIsOpen(false)
      }
    })
  }, [])  

  return (    
    <div className={(isOpen ? 'flex' : 'hidden' )+ ' w-screen h-screen bg-zinc-900 bg-opacity-80 items-center fixed top-0 left-0 z-[11]'}>
      <div className="bg-base-200 w-[90%] h-full max-h-[600px] mx-auto rounded-box ">
        <div className="flex justify-end mt-5 mx-3">
          <button className="text-rose-500" onClick={()=>setIsOpen(false)}>
            <IoIosCloseCircleOutline/>
          </button>
          <button className="hidden" onClick={onClick}></button>
        </div>
        <div className="overflow-y-auto h-full px-5 flex flex-col w-full">            
            <div className="divider h-max">{data?.topic}</div>
            <div className="text-base text-wrap h-full overflow-x-hidden overflow-y-auto py-5 mb-20">
              <pre className="text-2xl">{data?.text}</pre>              
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate modi architecto quis sapiente. Voluptate dolorem minima ullam. Repudiandae mollitia culpa, adipisci doloremque tempora eveniet modi laudantium repellat nihil itaque voluptates autem assumenda voluptate eligendi consectetur iure in facilis at. Architecto eius deleniti veniam ut. Veniam vero fugiat magni illo enim. Quam, molestiae distinctio ut nostrum voluptatum est unde, ea, obcaecati quibusdam rerum nemo! Sint aperiam quam sed placeat est accusamus hic voluptates soluta, temporibus dolorem totam fuga alias, porro a, magni ratione asperiores aspernatur eveniet cumque eaque fugit nihil fugiat? Molestias ipsum illo quis, libero facere nam, saepe laboriosam distinctio aliquam rem nostrum laborum repellendus. Explicabo, tempora dolores a repudiandae quo quibusdam temporibus dicta nulla doloremque minima natus, sunt laudantium quidem itaque cupiditate sapiente nam quis et repellat quaerat, nesciunt nisi magnam tempore. Vel nobis, molestias praesentium officia ad minima ullam earum nemo distinctio magnam quam neque placeat quo nisi voluptate, rem eius eos laudantium dignissimos quisquam illo. Qui ullam incidunt ex earum debitis suscipit, beatae sequi, voluptas inventore soluta labore aliquam. At alias impedit, numquam ad reiciendis labore eius. Praesentium unde doloribus eos dicta, ea nesciunt necessitatibus quis, obcaecati corporis ex aliquam rerum asperiores ratione, sapiente culpa architecto dolor?
              </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BlogModal