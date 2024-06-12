

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Card1 from "../Pages/Card1";
import Card2 from "../Pages/Card2";
import Card3 from "../Pages/Card3";
import Card4 from "../Pages/Card4";
import Cards5 from "../Pages/Cards5";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Card1/>,
      errorElement: <h1>Sorry</h1>,
    },
    {
        path: "/card2",
        element:<Card2/> ,
        
      },
      {
        path: "/card3",
        element: <Card3 />,
      },
  
      {
        path: "/card4",
        element: <Card4 />,
      },
  
      {
        path: "/cards5",
        element: <Cards5 />,
      },



  ]);

function Router() {
  return (
    <>
     <RouterProvider router={router} />
    
    </>
  )
}

export default Router