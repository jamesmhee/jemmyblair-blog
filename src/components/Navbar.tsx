import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../components/Hamburger'
import Button from './Button'
import { UserContext } from '../utils/store/UserStore'
import Cookies from 'js-cookie'
import ModalResponsive from './ModalResponsive'
import { FaRegHandSpock } from "react-icons/fa";


const Navbar = () => {
    const { userDetails, setUserDetails } = useContext(UserContext)      
    const [isHamburger, setIsHamburger] = useState<boolean>(false)    
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const handleSignOut = () =>{
        setIsOpenModal(!isOpenModal)        
    }

    const signOut = () =>{
        Object.keys(Cookies.get()).forEach(function(cookieName) {            
            var cookiePath = 
            [
                {
                    path:'/',
                    domain: 'localhost'
                },
                {
                    path: '/',
                    domain: 'www.jemmyblair.xyz'
                }
            ]            
            cookiePath.forEach((cookiePathItem)=>{
                Cookies.remove(cookieName, cookiePathItem);
            })
        });        
        setUserDetails({username: '', role: ''})
        window.location.reload()
    }
    return (
        <>
            <ModalResponsive setIsOpen={setIsOpenModal} isOpen={isOpenModal} size={'xl'} headerText={'Are you sure to sign out ?'} onClick={signOut}/>
            <nav className="navbar flex justify-between bg-base-100 border-b sticky top-0">        
                <Link to="/">
                    <button className='btn btn-ghost text-xl rounded-2xl'>
                        JEMMYBLAIR
                    </button>
                </Link>
                <ul className='hidden sm:flex gap-2 px-4'>            
                    {userDetails.username === '' ? 
                    (
                        <>
                            <Link to="signin">
                                <Button type={'button'} text={'SIGN IN'} style={'signin'}/>                                                            
                            </Link>
                            <Link to="signup">
                                <Button type={'button'} text={'SIGN UP'} style={'signup'}/>
                            </Link>
                        </>
                    ) 
                    : 
                    (
                        <>
                            <Link to="user">
                                <li className='hover:text-rose-500 flex gap-3 items-center'>
                                    <FaRegHandSpock/>
                                    <span>HELLO, {userDetails.username}</span>
                                </li>
                            </Link>
                            <li>                            
                                <Button type={'button'} text={'SIGN OUT'} style={'signout'} onClick={handleSignOut}/>
                            </li>
                        </>
                    )
                    }
                </ul>
                <ul className='flex sm:hidden gap-2 px-4 relative'>
                    <Hamburger isHamburger={isHamburger} setIsHamburger={setIsHamburger}/>                
                    <div className={(isHamburger ? 'flex' : 'hidden' ) + ' w-max items-center gap-2 absolute top-16 right-0 flex-col'}>
                        {
                            userDetails.username === '' ? 
                            (
                                <>
                                    <Link to="signin">
                                        <Button type={'button'} text={'SIGN IN'} style={'signin'}/>                                                            
                                    </Link>
                                    <Link to="signup">
                                        <Button type={'button'} text={'SIGN UP'} style={'signup'}/>
                                    </Link>                              
                                </>
                            ) : 
                            (
                                <>
                                    <Link to="user">
                                        <li className='hover:text-rose-500 flex gap-3 items-center'>
                                            <FaRegHandSpock/>
                                            <span>HELLO, {userDetails.username}</span>
                                        </li>
                                    </Link>
                                    <li>                                   
                                        <Button type={'button'} text={'SIGN OUT'} style={'signout'} onClick={handleSignOut}/>
                                    </li>
                                </>
                            )
                        }
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Navbar