const Loading = ({word, type}:{word:string, type?:string}) => {
  return (
    <div className='w-screen h-screen flex-col bg-zinc-900 flex items-center justify-center z-10 fixed top-0'>
        <span className="loading loading-ring loading-lg"></span>
        <p>{word}{type}</p>
    </div>
  )
}

export default Loading