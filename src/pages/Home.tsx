import { useContext } from "react"
import { UserContext } from "../utils/store/UserStore"
import BlogContainer from "../components/BlogContainer"

const Home = () => {        
    const { userDetails } = useContext(UserContext)
    console.log(userDetails)
  return (    
    <div className="flex flex-col text-4xl bg-zinc-900 w-[90%] mx-auto h-full p-5 mt-2 overflow-hidden">      
      <BlogContainer/>
    </div>
  )
}

export default Home