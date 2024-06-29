import { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { SignUp } from '../services/UserServices'
import Loading from '../components/Loading'

interface ISignUpProps{
    username: string
    password: string
}

const Signup = () => {
    const [UserForm, setUserForm] = useState<ISignUpProps>({
        username: '',
        password: ''
    })
    const [ isSignup, setIsSignup ] = useState<boolean>(false)

    const signUp = async (event:React.ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault()
        if(!UserForm.username){
            return
        }else if(!UserForm.password){
            return
        }

        setIsSignup(true)
        const sendSignup = await SignUp(UserForm)
        if(sendSignup !== 'Failed'){
            alert("Sign Up Success Welcome New Member :)")            
        }else{            
            alert("User Duplicated :(")            
        }
        setIsSignup(false)
    }

    const setUsername = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setUserForm({...UserForm, username: event.target.value})
    }

    const setPassword = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setUserForm({...UserForm, password: event.target.value})
    }

  return (
    <div className='flex flex-col gap-2 items-center w-screen h-full justify-center'>      
      <b className='text-2xl'>SIGN UP</b>
      {isSignup && <Loading word={'Sign up..'}/>}
      <form onSubmit={signUp} className='flex justify-center gap-5 flex-col items-center w-full'>
        <Input onInput={setUsername} type={'text'} placeholder={'USERNAME'}/>
        <Input onInput={setPassword} type={'password'} placeholder={'PASSWORD'}/>
        <div className='flex gap-5'>
          <Button type={'submit'} text={'Sign Up'} style={'secondary'}/>
          {/* <Button type={'button'} text={'Sign Up'} style={'accent'}/> */}
        </div>
      </form>
    </div>
  )
}

export default Signup