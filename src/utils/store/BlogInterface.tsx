export interface IBlogListProps {
    message: string
    data: BlogListProps[]
  }
  
export interface BlogListProps {
    id: number
    topic: string
    text: string
    created_by: number
    created_date: string
    total_likes: any
    total_comments: any
    isActive: boolean
}