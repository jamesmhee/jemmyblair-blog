import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../components/Hamburger'


const Navbar = () => {
    const [isHamburger, setIsHamburger] = useState<boolean>(false)    
    return (
        <nav className="navbar flex justify-between bg-base-100 border-b sticky top-0">        
            <Link to="/">
                <button className='btn btn-ghost text-xl rounded-2xl'>
                    JEMMYBLAIR
                </button>
            </Link>
            <ul className='hidden sm:flex gap-2 px-4'>            
                <Link to="signin">
                    <li className='btn btn-secondary max-w-[100px]'>
                        SIGN IN
                    </li>
                </Link>
                <Link to="signup">
                    <li className='btn btn-accent max-w-[100px]'>
                        SIGN UP
                    </li>
                </Link>
            </ul>
            <ul className='flex sm:hidden gap-2 px-4 relative'>                        
                <Hamburger isHamburger={isHamburger} setIsHamburger={setIsHamburger}/>
                <div className={(isHamburger ? 'flex' : 'hidden' ) + ' items-center gap-2 absolute top-16 right-0 flex-col'}>
                    <Link to="signin">
                        <li className='btn btn-secondary w-max max-w-52'>
                            SIGN IN
                        </li>
                    </Link>
                    <Link to="signup">
                        <li className='btn btn-accent w-max max-w-52'>
                            SIGN UP
                        </li>
                    </Link>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar