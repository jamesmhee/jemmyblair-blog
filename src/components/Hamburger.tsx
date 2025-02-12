import React, { SetStateAction } from 'react'

interface isHamburgerProps {
    isHamburger: boolean
    setIsHamburger: React.Dispatch<SetStateAction<boolean>>
}

const Hamburger = ({isHamburger,setIsHamburger}:isHamburgerProps) => {
  return (
    <label className="btn btn-circle swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onClick={()=>setIsHamburger(!isHamburger)} />

        {/* hamburger icon */}
        <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            viewBox="-25 -20 350 350">
                <g>
                    <g id="Layer_5_6_">
                        <g>
                            <path d="M27.232,215.067c-21.559,0-21.559,13.049-21.559,19.823c0,45.729,47.753,49.927,106.66,49.927h78.656     c58.907,0,106.66-7.98,106.66-49.927c0-6.774-2.065-19.823-21.355-19.823H27.232z"/>
                            <g>
                                <path d="M303.324,180.028c0,7.489-6.127,13.616-13.616,13.616H13.616C6.127,193.644,0,187.517,0,180.028v-10.21      c0-7.489,6.127-13.616,13.616-13.616h276.092c7.489,0,13.616,6.127,13.616,13.616L303.324,180.028L303.324,180.028z"/>
                            </g>
                            <path d="M156.95,18.507h-10.576c-58.906,0-140.7,36.407-140.7,95.314c0,6.774,2.065,19.822,21.354,19.822h249.064     c21.559,0,21.559-13.048,21.559-19.822C297.65,54.914,215.856,18.507,156.95,18.507z M87.753,94.08     c-5.629,9.388-15.324,13.92-21.655,10.124c-6.331-3.797-6.9-14.483-1.271-23.871c5.629-9.387,15.324-13.92,21.655-10.123     C92.812,74.006,93.382,84.693,87.753,94.08z M151.662,107.903c-7.05,0-12.766-9.266-12.766-20.696s5.716-20.696,12.766-20.696     s12.766,9.266,12.766,20.696S158.712,107.903,151.662,107.903z M237.226,104.204c-6.331,3.796-16.026-0.736-21.655-10.124     c-5.629-9.387-5.06-20.074,1.271-23.87c6.331-3.797,16.026,0.736,21.655,10.123C244.127,89.721,243.558,100.407,237.226,104.204z     "/>
                        </g>
                    </g>
                </g>            
        </svg>

        {/* close icon */}
        <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512">
            <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
    </label>
  )
}

export default Hamburger