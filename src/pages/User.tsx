import { useContext, useEffect } from 'react'
import { UserContext } from '../utils/store/UserStore'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const User = () => {
    const navigate = useNavigate()
    const {userDetails} = useContext(UserContext)


    useEffect(() => {        
        if (userDetails.username === '' && userDetails.role === '') {
            // navigate('/signin');
        }
    }, [userDetails, navigate]);

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
                <Button text={'Change Password'} type={'button'} style={'warning'}/>
            </div>
        </div>
    </div>
  )
}

export default User