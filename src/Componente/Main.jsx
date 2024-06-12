
// import { Link } from "react-router-dom"



function Main() {
  return (
    <>
     <div className="flex flex-wrap justify-center items-end p-5 h-[60vh] max-sm:flex-col max-sm:space-y-4 sm:space-y-4 sm:mt-1">
  <a href="/" className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-10 text-xl m-2 max-sm:p-6">
    <div>Sea</div>
  </a>
  <a href="/card2" className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-10 text-xl m-2 max-sm:p-6">
    <div>Desert</div>
  </a>
  <a href="/card3" className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-10 text-xl m-2 max-sm:p-6">
    <div>Nature</div>
  </a>
  <a href="/card4" className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-10 text-xl m-2 max-sm:p-6">
    <div>Snow</div>
  </a>
  <a href="/cards5" className="flex flex-col items-center bg-gray-100 shadow-lg rounded-lg p-10 text-xl m-2 max-sm:p-6">
    <div>Forest</div>
  </a>
</div>

    
    </>
  )
}

export default Main