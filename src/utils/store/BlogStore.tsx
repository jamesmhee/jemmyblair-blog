import { useState, createContext, useMemo, SetStateAction } from 'react'

interface IChildren {
    children: JSX.Element | JSX.Element[]
}

interface IBlogProps {
    topic: string
    text: string    
}

interface IBlogContextProps {
    blogDetails: IBlogProps
    setBlogDetails: React.Dispatch<SetStateAction<IBlogProps>>
}

export const BlogContext = createContext<IBlogContextProps>({} as IBlogContextProps)

export const BlogStore = ({children}:IChildren) =>{
    const [ blogDetails,setBlogDetails ] = useState<IBlogProps>({
        topic: '',
        text: ''
    })
    const blogStore = useMemo(()=>({
        blogDetails,
        setBlogDetails
    }), [blogDetails, setBlogDetails])

    return (
        <BlogContext.Provider value={blogStore}>
            {children}
        </BlogContext.Provider>
    )
}