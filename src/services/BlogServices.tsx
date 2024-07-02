import Cookies from "js-cookie"
const endpoint = import.meta.env.VITE_ENV === 'PROD' ? import.meta.env.VITE_ENDPOINT_HOST : import.meta.env.VITE_ENDPOINT_LOCAL;
import { IBlogListProps } from "../utils/store/BlogInterface";  

export const postBlog = async (blogDetails:{topic: string, text:string}) =>{
    const token = Cookies.get("Authorization")    
    let config:object = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(blogDetails)
    }
    try{
        const create = await fetch(endpoint + 'createblog', config)
        if(create.ok){
            return await create.json()
        }else{            
            throw new Error(create.statusText)
        }
    }catch(error){        
        console.error(error)
    }    
}

export const getBlogList = async (): Promise<IBlogListProps | undefined> => {
    let config:object = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }   
    try{
        const getBlog = await fetch(endpoint + 'bloglist', config)
        if(getBlog.ok){
            const data:IBlogListProps =  await getBlog.json()
            return data
        }else{
            throw new Error(getBlog.statusText)
        }
    }catch(error){
        console.error(error)
    }
}