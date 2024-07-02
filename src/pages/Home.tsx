import { useContext } from "react"
import { UserContext } from "../utils/store/UserStore"
import BlogContainer from "../components/BlogContainer"

const Home = () => {        
    const { userDetails } = useContext(UserContext)
    console.log(userDetails)
  return (    
    <div className="flex flex-col text-4xl w-full mx-auto h-max p-5 mt-2 overflow-x-hidden overflow-y-auto">
      <BlogContainer/>
    </div>
  )
}

export default Home