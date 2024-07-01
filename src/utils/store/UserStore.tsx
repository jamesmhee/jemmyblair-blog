import { createContext, useState, useMemo, useEffect } from "react"
import { IStoreProps, IUserStoreProps } from "./UserInterface"
import Cookies from 'js-cookie'

interface IChildrenProps {
    children: JSX.Element | JSX.Element[]
}

export const UserContext = createContext<IStoreProps>({} as IStoreProps)        

export const UserStore = ({children}:IChildrenProps) => {            
    const [userDetails, setUserDetails] = useState<IUserStoreProps>({
        username: '',
        role: ''
    })
    const [isLogin, setIsLogin] = useState<boolean>(false)
    
    const store = useMemo(()=> ({
        userDetails,
        setUserDetails,
        isLogin,
        setIsLogin
    }), [userDetails,
        setUserDetails,
        isLogin,
        setIsLogin
    ])

    useEffect(()=>{
        let getUser:any = Cookies.get('userDetails')
        if(getUser){            
            setUserDetails(JSON.parse(getUser))
        }
    }, [])

    useEffect(()=>{                
        const url:string = window.location.pathname        
        if(userDetails.username && userDetails.role && url.indexOf('signin') < 0){
            Cookies.set("userDetails", JSON.stringify(userDetails), { secure: true, sameSite: 'Strict' })
            setIsLogin(true)            
        }
        
    }, [userDetails])

  return (
    <UserContext.Provider value={store}>
        {children}
    </UserContext.Provider>
  )
}