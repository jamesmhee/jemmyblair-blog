const endpoint = import.meta.env.VITE_ENV === 'dev' ? import.meta.env.VITE_ENDPOINT_LOCAL : import.meta.env.VITE_ENDPOINT_HOST

export const SignIn = async ({username, password}:{username:string, password:string}) =>{
    let config:object = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",            
        },
        body: JSON.stringify({username, password})
    }
    const signIn = await fetch(endpoint + 'signin', config)
    if(signIn.ok){
        return await signIn.json()
    }else{
        return 'Failed'
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
    const signUp = await fetch(endpoint + 'signup', config)
    if(signUp.ok){
        return await signUp.json()
    }else{
        return 'Failed'
    }
}