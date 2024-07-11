
import { Link } from "react-router-dom"



function Main() {
  return (
    <>
   <div className="flex flex-wrap justify-center items-end p-5 h-[60vh] max-sm:flex-col max-sm:space-y-4 sm:space-y-4 sm:mt-1">
        <Link to="/" className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-10 text-xl m-2 max-sm:p-6 max-sm:w-full">
          <div>Sea</div>
        </Link>
        <Link to="/card2" className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-10 text-xl m-2 max-sm:p-6 max-sm:w-full">
          <div>Desert</div>
        </Link>
        <Link to="/card3" className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-10 text-xl m-2 max-sm:p-6 max-sm:w-full">
          <div>Nature</div>
        </Link>
        <Link to="/card4" className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-10 text-xl m-2 max-sm:p-6 max-sm:w-full">
          <div>Snow</div>
        </Link>
        <Link to="/cards5" className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-10 text-xl m-2 max-sm:p-6 max-sm:w-full">
          <div>Forest</div>
        </Link>
      </div>

    
    </>
  )
}

export default Main