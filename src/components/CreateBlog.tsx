import Input from "./Input"
import Textarea from "./Textarea"
import { useCallback, useContext, useState } from 'react'
import { BlogContext } from "../utils/store/BlogStore"
import Button from "./Button"
import { postBlog } from "../services/BlogServices"

const CreateBlog = () => {
    const { blogDetails , setBlogDetails } = useContext(BlogContext)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const setTopic = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setBlogDetails({...blogDetails, topic: event.target.value})
    }

    const setTextBlog = (event:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setBlogDetails({...blogDetails, text: event.target.value})
    }
    
    const addBlog = useCallback(async (event:React.ChangeEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(blogDetails.topic.trim().length <= 0){
            alert("No Topic")
        }else if(blogDetails.text.trim().length <= 0){
            alert("No Text")
        }

        setIsLoading(true)
        const create = await postBlog(blogDetails)        
        setIsLoading(false)
        if(create){
            alert("Created Blog")
        }else{
            alert("Something error")
        }
        
        
    }, [blogDetails])

  return (
    <>        
        <form onSubmit={addBlog} className="flex flex-col gap-5 mt-3">
            <Input type={'text'} placeholder={'Topic'} required={true} onInput={setTopic}/>
            <Textarea resize={'no'} rows={12} cols={100} placeholder={'Subject'} onInput={setTextBlog}/>    
            <Button type={'submit'} text={'Create Post'} style={'success'} />
            {
                isLoading ? 
                (
                    <div className="flex flex-col gap-5 items-center w-full justify-center absolute top-0 left-0 bg-zinc-800 bg-opacity-80 h-full">
                        <span className="loading loading-spinner text-success w-32"></span>
                        <span className="font-bold">Creating Blog..</span>
                    </div>
                ) 
                : (<></>)
            }                    
        </form>
    </>
  )
}

export default CreateBlog