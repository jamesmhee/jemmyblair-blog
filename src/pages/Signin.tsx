import React, {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

interface ILoginProps {
  user: string
  password: string  
}

const Signin = () => {
  const [userForm, setUserForm] = useState<ILoginProps>({
    user: '',
    password: ''
  })

  const setUserName = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setUserForm({ ...userForm, user: event.target.value });    
  }

  const setPassWord = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setUserForm({ ...userForm, password: event.target.value });
  }

  const signIn = () =>{
    if(userForm.user.trim().length <= 0){
      return
    }else if(userForm.password.trim().length <= 0){
      return
    }
    console.log(userForm)
  }

  return (
    <div className='flex flex-col gap-2 items-center w-screen h-72 justify-center'>      
      <b className='text-2xl'>SIGN IN</b>      
      <Input onInput={setUserName} type={'text'} placeholder={'USERNAME'}/>
      <Input onInput={setPassWord} type={'password'} placeholder={'PASSWORD'}/>
      <div className='flex gap-5'>
        <Button onClick={signIn} text={'Sign In'} type={'secondary'}/>
        <Button onClick={signIn} text={'Sign Up'} type={'accent'}/>
      </div>
    </div>
  )
}

export default Signin