export const SignIn = async ({username, password}:{username:string, password:string}) =>{
    let config:object = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",            
        },
        body: JSON.stringify({username, password})
    }
    const signIn = await fetch('https://api.carmanrider.autos/blog/signin', config)
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
    const signUp = await fetch('https://api.carmanrider.autos/blog/signup', config)
    if(signUp.ok){
        return await signUp.json()
    }else{
        return 'Failed'
    }
}