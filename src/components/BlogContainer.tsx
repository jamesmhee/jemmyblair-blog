import { useEffect, useState } from "react"
import { IBlogListProps } from "../utils/store/BlogInterface"
import { getBlogList } from "../services/BlogServices"

const BlogContainer = () => {
  const [blogList, setBlogList] = useState<IBlogListProps | null>(null)

  const getBlogData = async () =>{
    const getData = await getBlogList()
      if(getData){
        setBlogList(getData)
    }

  }

  useEffect(()=>{
    if(!blogList){
      getBlogData()
    }
  }, [blogList])

  return (        

    <>
    {
      blogList?.data ? 
      (
        blogList?.data?.map((elm:any, index:number)=>{
          return(
            <div key={index} className="mockup-browser bg-base-300 mb-5">
              <div onClick={()=>console.log(blogList?.data[index])} className="mockup-browser-toolbar cursor-pointer">
                <div className="input font-bold">{elm?.topic}...</div>
              </div>
              <div className="bg-base-200 flex justify-start px-4 py-5 min-h-[200px] max-h-[350px]">{elm?.text}</div>

            </div>            
          )
        })
      ) :
      (<>Loading...</>)
    }    
    </>
  )
}

export default BlogContainer