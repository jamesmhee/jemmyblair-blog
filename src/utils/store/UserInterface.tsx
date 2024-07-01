import { SetStateAction } from 'react'

export interface IUserStoreProps {
    username: string,
    role: string,    
}

export interface IStoreProps {
    userDetails: IUserStoreProps
    setUserDetails: React.Dispatch<SetStateAction<IUserStoreProps>>    
    isLogin: boolean
    setIsLogin: React.Dispatch<SetStateAction<boolean>>
}

export interface IPasswordProps {
    oldPassword: string
    newPassword: string
    confirmNewPassword: string
}