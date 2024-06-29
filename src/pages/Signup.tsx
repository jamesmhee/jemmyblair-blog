import { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { SignUp } from '../services/UserServices'

interface ISignUpProps{
    username: string
    password: string
}

const Signup = () => {
    const [UserForm, setUserForm] = useState<ISignUpProps>({
        username: '',
        password: ''
    })

    const signUp = async () =>{
        if(!UserForm.username){
            return
        }else if(!UserForm.password){
            return
        }

        const sendSignup = await SignUp(UserForm)
        if(sendSignup !== 'Failed'){
            console.log("Sign Up Success", UserForm.username)
        }
    }

    const setUsername = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setUserForm({...UserForm, username: event.target.value})
    }

    const setPassword = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setUserForm({...UserForm, password: event.target.value})
    }

  return (
    <div className='flex flex-col gap-2 items-center w-screen h-full justify-center'>      
      <b className='text-2xl'>SIGN IN</b>
      <form onSubmit={signUp} className='flex justify-center gap-5 flex-col items-center w-full'>
        <Input onInput={setUsername} type={'text'} placeholder={'USERNAME'}/>
        <Input onInput={setPassword} type={'password'} placeholder={'PASSWORD'}/>
        <div className='flex gap-5'>
          <Button type={'submit'} text={'Sign In'} style={'secondary'}/>
          <Button type={'button'} text={'Sign Up'} style={'accent'}/>
        </div>
      </form>
    </div>
  )
}

export default Signup