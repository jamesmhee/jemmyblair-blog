import { IoHeartOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

const SkeltonHome = () => {
  return (
    <div className="mockup-browser bg-base-300 mb-5">
        <div className="mockup-browser-toolbar cursor-pointer">
        <div className="input font-bold py-2">
            <div className="skeleton h-full w-full"></div>
        </div>
        </div>
        <div className="bg-base-200 flex justify-start px-4 py-5 min-h-[200px] max-h-[350px]"><div className="skeleton h-auto w-full"></div></div>              
        <div className="flex justify-center sm:justify-end">
        <div className="cursor-pointer text-sm px-5 py-2 text-right flex items-center gap-2">
            <IoHeartOutline/>
            <div className="skeleton h-full w-full"></div>
        </div>
        <div className="cursor-pointer text-sm px-5 py-2 text-right flex items-center gap-2">
            <FaRegComment/>
            <div className="skeleton h-full w-full"></div>
        </div>
        <div className="text-sm px-5 py-2 text-right flex items-center gap-2">
            <GoPencil/>
            <div className="skeleton h-full w-full"></div>
        </div>
        </div>
    </div>
  )
}

export default SkeltonHome