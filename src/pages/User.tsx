import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../utils/store/UserStore'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import { IPasswordProps } from '../utils/store/UserInterface'
import { ChangePassword } from '../services/UserServices'

const User = () => {
    const navigate = useNavigate()
    const {userDetails} = useContext(UserContext)


    useEffect(() => {        
        if (userDetails.username === '' && userDetails.role === '') {
            // navigate('/signin');
        }
    }, [userDetails, navigate]);
 
    const [isChangePassword, setIsChangePassword] = useState<boolean>(false)
    const [passwordObj, setPasswordObj] = useState<IPasswordProps>({
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    })
    const onChangePassword = () =>{
        setIsChangePassword(!isChangePassword)
    }

    const checkMatchPassword = async (event:React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        if(passwordObj.newPassword === passwordObj.oldPassword){
            alert('New Password Can not same old')
        }else if(passwordObj.newPassword !== passwordObj.confirmNewPassword){
            alert('New Password not matching')
        }else{
            const change = await ChangePassword(passwordObj)                        
            if(change){
                alert("Change Password Success")
            }
        }
    }

  return (
    <div className='flex items-center justify-center h-full w-full'>
        <div className='p-5 rounded-md dark:bg-zinc-900 dark:text-white w-[90%] h-[90%] text-current flex flex-col gap-3'>            
            <h1 className='text-3xl sm:text-4xl border-s-4 border-current pl-3 font-medium'>User Profile</h1>
            <hr></hr>
            <div className='flex gap-2'>
                <b>NAME :</b>
                <span>{userDetails.username}</span>                
            </div>            
            <div className='flex gap-2'>
                <b>Role :</b>
                <span>{userDetails.role}</span>                
            </div>
            <div className='w-72'>
                <Button text={'Change Password'} type={'button'} style={'warning'} onClick={onChangePassword}/>
            </div>
            {isChangePassword && 
            (<div className={(isChangePassword ? 'flex' : 'hidden' ) + ' max-w-72 w-full'}>
                <form onSubmit={checkMatchPassword} className='flex flex-col gap-3'>
                    <Input type={'password'} placeholder='Old Password' onInput={(event)=>setPasswordObj({...passwordObj, oldPassword: event?.target.value})}/>
                    <Input type={'password'} placeholder='New Password' onInput={(event)=>setPasswordObj({...passwordObj, newPassword: event?.target.value})}/>
                    <Input type={'password'} placeholder='Confim New Password' onInput={(event)=>setPasswordObj({...passwordObj, confirmNewPassword: event?.target.value})}/>
                    <Button text={'Change Password'} type={'submit'} style={'warning'}/>
                </form>                
            </div>)
            }
        </div>
    </div>
  )
}

export default User