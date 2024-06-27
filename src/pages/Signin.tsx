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

  const signIn = (event:React.ChangeEvent<HTMLFormElement>) =>{
    event.preventDefault()    
    if(userForm.user.trim().length <= 0){
      return
    }else if(userForm.password.trim().length <= 0){
      return
    }
    console.log(userForm)
  }

  return (
    <div className='flex flex-col gap-2 items-center w-screen h-full justify-center'>      
      <b className='text-2xl'>SIGN IN</b>
      <form onSubmit={signIn} className='flex justify-center gap-5 flex-col items-center'>
        <Input onInput={setUserName} type={'text'} placeholder={'USERNAME'}/>
        <Input onInput={setPassWord} type={'password'} placeholder={'PASSWORD'}/>
        <div className='flex gap-5'>
          <Button type={'submit'} text={'Sign In'} style={'secondary'}/>
          <Button type={'button'} text={'Sign Up'} style={'accent'}/>
        </div>
      </form>
    </div>
  )
}

export default Signin