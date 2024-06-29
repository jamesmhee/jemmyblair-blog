import React, {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { SignIn } from '../services/UserServices'
import { Link } from 'react-router-dom'

interface ILoginProps {
  username: string
  password: string  
}

const Signin = () => {
  const [userForm, setUserForm] = useState<ILoginProps>({
    username: '',
    password: ''
  })

  const setUserName = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setUserForm({ ...userForm, username: event.target.value });    
  }

  const setPassWord = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setUserForm({ ...userForm, password: event.target.value });
  }

  const signIn = async (event:React.ChangeEvent<HTMLFormElement>) =>{
    event.preventDefault()    
    if(userForm.username.trim().length <= 0){
      return
    }else if(userForm.password.trim().length <= 0){
      return
    }
    const signIn = await SignIn(userForm)
    if(signIn !== 'Failed'){
      alert("Login Succes But Nothing Happend :P")
    }
    console.log(userForm)
  }
  
  return (
    <div className='flex flex-col gap-2 items-center w-screen h-full justify-center'>      
      <b className='text-2xl'>SIGN IN</b>
      <form onSubmit={signIn} className='flex justify-center gap-5 flex-col items-center w-full'>
        <Input onInput={setUserName} type={'text'} placeholder={'USERNAME'}/>
        <Input onInput={setPassWord} type={'password'} placeholder={'PASSWORD'}/>
        <div className='flex gap-5'>
          <Button type={'submit'} text={'Sign In'} style={'secondary'}/>
          <Link to="/signup">
            <Button type={'button'} text={'Sign Up'} style={'accent'}/>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Signin