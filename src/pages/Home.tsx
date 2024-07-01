import { useContext } from "react"
import { UserContext } from "../utils/store/UserStore"

const Home = () => {        
    const { userDetails } = useContext(UserContext)
  return (    
    <div className="flex items-center justify-center text-4xl h-full">
      H! {userDetails.username}
    </div>
  )
}

export default Home