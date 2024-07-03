import { useContext, useEffect, useState, useRef, useCallback, SetStateAction } from 'react'
import { UserContext } from '../utils/store/UserStore'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Textarea from './Textarea'
import { doActivity } from '../services/BlogServices'
import { BlogListProps } from '../utils/store/BlogInterface'
import LoadingInModal from './LoadingInModal'

interface ICommentInput {
    data: BlogListProps | undefined    
    onClick: ()=>{}
    setIsOpenComment: React.Dispatch<SetStateAction<boolean>>
}

const CommentInput = ({data, onClick, setIsOpenComment}:ICommentInput) => {
    const navigate = useNavigate()
    const { userDetails } = useContext(UserContext)
    const [comment, setComment] = useState<string>('')
    const refInput = useRef<HTMLTextAreaElement>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const insertComment = useCallback(async (event:React.ChangeEvent<HTMLFormElement>)=>{        
        event.preventDefault()
        if(comment?.trim()?.length <= 0){
            refInput?.current?.focus()            
            return
        }
        setIsLoading(true)
        const insert = await doActivity(data?.id, 'comment', comment)
        if(insert){
            onClick()
            setIsOpenComment(false)
        }
        setIsLoading(false)
    }, [comment])    

    useEffect(()=>{
        if(userDetails.username === ''){
            navigate('signin')
        }
    }, [])
    
  return (    
    <>
        <form onSubmit={insertComment} className='flex flex-col gap-5'>            
            <div className='mt-3'>
                <Textarea ref={refInput} rows={10} cols={10} onInput={(event)=>setComment(event.target.value)} placeholder={'Comment..'}/> 
            </div>
            <Button type={'submit'} text={'Comment'} style={'success'}/>
        </form>        
        <LoadingInModal word={'Comment..'} isOpen={isLoading} style={'success'}/>
    </>
  )
}

export default CommentInput