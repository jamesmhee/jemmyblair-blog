let dev = 'host'
// const endpoint = dev === 'dev' ? process.env.ENDPOINT_LOCAL : process.env.ENDPOINT_HOST
const endpoint = dev === 'dev' ? 'http://127.0.0.1:3333/blog/' : 'https://api.carmanrider.autos/blog/'

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