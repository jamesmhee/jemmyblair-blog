import React, {useContext, useEffect, useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { SignIn } from '../services/UserServices'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading'
import Cookies from 'js-cookie';
import { UserContext } from '../utils/store/UserStore'

interface ILoginProps {
  username: string
  password: string  
}

const Signin = () => {
  const navigate = useNavigate()
  const [userForm, setUserForm] = useState<ILoginProps>({
    username: '',
    password: ''
  })  
  const { userDetails, setUserDetails, isLogin, setIsLogin } = useContext(UserContext)

  const setUserName = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setUserForm({ ...userForm, username: event.target.value });    
  }

  const setPassWord = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setUserForm({ ...userForm, password: event.target.value });
  }

  const setToken = (token: string) =>{
    if(!token){
      return false
    }
    Cookies.set('Authorization', token, { secure: true, sameSite: 'Strict' })
    return true
  }

  const signIn = async (event:React.ChangeEvent<HTMLFormElement>) =>{
    event.preventDefault()    
    if(userForm.username.trim().length <= 0){
      return
    }else if(userForm.password.trim().length <= 0){
      return
    }
    setIsLogin(true)
    const signIn = await SignIn(userForm)
    if(signIn !== 'Failed'){
      const login = setToken(signIn.data.token)              
      if(login){
        setUserDetails({...userDetails, username: signIn.data.username, role: signIn.data.role})        
        Cookies.set("userDetails", JSON.stringify(userDetails), { secure: true, sameSite: 'Strict' })        
        navigate('/')
      }
    }else{
      alert("Does not have this user")
    }    
    setIsLogin(false)
  }

  useEffect(()=>{
    setIsLogin(false)    
    if(userDetails.username && userDetails.role){
      navigate('/')
    }
  }, [])
  
  return (    
    <div className='flex flex-col gap-2 items-center w-screen h-full justify-center'>      
      <b className='text-2xl'>SIGN IN</b>
      {isLogin && <Loading word={'Sign In..'}/>}
      <form onSubmit={signIn} className='flex justify-center gap-5 flex-col items-center w-full px-5'>
        <Input required={true} onInput={setUserName} type={'text'} placeholder={'USERNAME'}/>
        <Input required={true} onInput={setPassWord} type={'password'} placeholder={'PASSWORD'}/>
        <div className='flex gap-5'>
          <Button type={'submit'} text={'SIGN IN'} style={'signin'}/>
          <Link to="/signup">
            <Button type={'button'} text={'SIGN UP'} style={'signup'}/>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Signin