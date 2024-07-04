import { useEffect, useState } from "react"
import { IBlogListProps, BlogListProps } from "../utils/store/BlogInterface"
import { getBlogList } from "../services/BlogServices"
import { IoHeartOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { doActivity } from "../services/BlogServices"
import BlogModal from "./BlogModal";
import ModalResponsive from "./ModalResponsive";
import CommentInput from "./CommentInput";
import SkeltonHome from "./SkeltonHome";

const BlogContainer = () => {
  const [blogList, setBlogList] = useState<IBlogListProps | null>(null)
  const [blog, setBlog] = useState<BlogListProps | undefined>(undefined)  
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isOpenComment, setIsOpenComment] = useState<boolean>(false)

  const getBlogData = async () =>{
    const getData = await getBlogList()
      if(getData){
        setBlogList(getData)
      }else{
        setTimeout(()=>{
          getBlogData()
        }, 2000)
      }
  }

  useEffect(()=>{
    if(!blogList){
      getBlogData()
    }
  }, [blogList])

  const formatDate = (date:Date) =>{    
    const format = new Date(date)    
    const time = format.toLocaleTimeString('th-TH').slice(0,5)
    return `${format.getDate() < 10 ? '0'+(format.getDate()) : format.getDate()}-${format.getMonth() + 1 < 10 ? '0' + (format.getMonth() + 1) : (format.getMonth() + 1)}-${format.getFullYear()} : ${time}`
  }

  const handleBlogModal = () =>{
    setIsOpenModal(!isOpenModal)
  }

  const handleClickBlog = (index:number) =>{        
    const data:BlogListProps | undefined = blogList?.data?.[index]
    setIsOpenModal(true)
    setBlog(data)
  }

  const handleActivity = async (id:number, type:string) =>{
    const do_activity = await doActivity(id, type)
    if(do_activity){
      await getBlogData()
    }
  }

  const handleComment = (index: number) =>{        
    const data:BlogListProps | undefined = blogList?.data?.[index]    
    setBlog(data)
    setIsOpenComment(!isOpenComment)
  }

  return (        
    <>    
    {
      blogList?.data ? 
      (
        blogList?.data?.map((elm:any, index:number)=>{
          return(
            <div key={index} className="mockup-browser bg-base-300 mb-3">
              <div onClick={()=>handleClickBlog(index)} className="mockup-browser-toolbar cursor-pointer">
                <div className="input font-bold">{elm?.topic}...</div>
              </div>
              <div className="bg-base-200 flex justify-start px-4 py-5 min-h-[200px] max-h-[350px]">{elm?.text}</div>              
              <div className="flex justify-center sm:justify-end">
                <div onClick={()=>handleActivity(elm.id, 'like')} className="cursor-pointer text-sm px-5 py-2 text-right flex items-center gap-2">
                  <IoHeartOutline/>
                  {elm?.total_likes ?? 0}
                </div>
                <div onClick={()=>handleComment(index)} className="cursor-pointer text-sm px-5 py-2 text-right flex items-center gap-2">
                  <FaRegComment/>
                  {elm?.total_comments ?? 0}
                </div>
                <div className="text-sm px-5 py-2 text-right flex items-center gap-2">
                  <GoPencil/>
                  {formatDate(elm.created_date)}
                </div>
              </div>
            </div>            
          )
        })
      ) :
      (
      <div className="mb-20">
        <SkeltonHome/>
        <SkeltonHome/>
        <SkeltonHome/>
      </div>
      )
    }
    <BlogModal data={blog} isOpen={isOpenModal} setIsOpen={setIsOpenModal} onClick={handleBlogModal}/>
    <ModalResponsive size={'full'} hideButton={true} isOpen={isOpenComment} setIsOpen={setIsOpenComment} headerText={'Comment Post'} confirmButton={'Comment'} element={<CommentInput data={blog} onClick={getBlogData} setIsOpenComment={setIsOpenComment}/>}/>
    </>
  )
}

export default BlogContainer