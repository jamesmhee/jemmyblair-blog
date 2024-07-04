import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../components/Hamburger'
import Button from './Button'
import { UserContext } from '../utils/store/UserStore'
// import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import ModalResponsive from './ModalResponsive'
import { FaRegHandSpock } from "react-icons/fa";


const Navbar = () => {
    const { userDetails, setUserDetails } = useContext(UserContext)      
    const [isHamburger, setIsHamburger] = useState<boolean>(false)    
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const handleSignOut = () =>{
        setIsOpenModal(!isOpenModal)        
    }
    const navigate = useNavigate()
    const signOut = () =>{       
        let cookies = document.cookie.split(";");
      
        for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i];
          let eqPos = cookie.indexOf("=");
          let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
        }
                
        setUserDetails({username: '', role: ''})
        setIsOpenModal(false)
        navigate('/')
    }        
    return (
        <div className='z-10 sticky top-0'>
            <ModalResponsive setIsOpen={setIsOpenModal} isOpen={isOpenModal} size={'xl'} headerText={'Are you sure to sign out ?'} onClick={signOut}/>
            <nav className="navbar flex justify-between bg-base-100 border-b z-[9999]">        
                <Link to="/">
                    <button className='btn btn-ghost text-xl rounded-2xl'>
                        JEMMYBLAIR
                    </button>
                </Link>
                <ul className='hidden sm:flex gap-2 px-4 z-[9999]'>            
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
                <ul className='flex sm:hidden gap-2 px-4 relative z-[9999]'>
                    <Hamburger isHamburger={isHamburger} setIsHamburger={setIsHamburger}/>                
                    <div className={(isHamburger ? 'flex' : 'hidden' ) + ' w-max items-center gap-2 absolute top-16 right-0 flex-col z-[9999] overflow-auto'}>
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
        </div>
    )
}

export default Navbar