import { IPasswordProps } from '../utils/store/UserInterface'
const endpoint = import.meta.env.VITE_ENV === 'PROD' ? import.meta.env.VITE_ENDPOINT_HOST : import.meta.env.VITE_ENDPOINT_LOCAL;

export const SignIn = async ({username, password}:{username:string, password:string}) =>{
    let config:object = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",            
        },
        body: JSON.stringify({username, password})
    }
    try{
        const signIn = await fetch(endpoint + 'signin', config)
        if(signIn.ok){        
            return await signIn.json()
        }else{
            return 'Failed'
        }
    }catch(error){
        console.error(error)
    }
}

export const SignUp = async ({username, password}:{username:string, password:string}) =>{
    let config:object = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",            
        },
        body: JSON.stringify({username, password})
    }
    try{
        const signUp = await fetch(endpoint + 'signup', config)
        if(signUp.ok){
            return await signUp.json()
        }else{
            return 'Failed'
        }
    }catch(error){
        console.error(error)
    }    
}

export const ChangePassword = async (passwordObj:IPasswordProps) =>{
    let config:object = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",            
        },
        body: JSON.stringify({})
    }
    console.log({passwordObj}, config)
    return true
}