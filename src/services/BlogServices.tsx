import Cookies from "js-cookie"
const endpoint = import.meta.env.VITE_ENV === 'PROD' ? import.meta.env.VITE_ENDPOINT_HOST : import.meta.env.VITE_ENDPOINT_LOCAL;

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