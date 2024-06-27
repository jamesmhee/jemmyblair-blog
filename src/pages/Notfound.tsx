import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[calc(100vh_-_200px)]'>
        <b className='uppercase'>
            Not have this page :P
        </b>
        <Link to="/">
            <p className='underline'>Back to homepage.</p>
        </Link>
    </div>
  )
}

export default Notfound