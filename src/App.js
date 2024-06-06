import {
  createBrowserRouter,
  RouterProvider,
   
} from "react-router-dom";
import { useState } from "react";
import Main from "./Main";
import Pdf from "./pdf";
import { DataContext } from "./context";
function App() {

  const [data , setData] = useState({
    name: '',
    contact: '',
    doubleSash: false,
    doubleSashQuantity: 0,
    doubleSashSquareFoots: 0,
    singleSash: false,
    singleSashQuantity: 0,
    singleSashSquareFoots: 0,
  })



  const router = createBrowserRouter([
    {
      path: "/",
      element: (
         <Main /> 
      ),
    },
    {
      path: "/kusbyufawe",
      element: (
        <Pdf /> 
      ),
    }
  ])
  return (
    <>
    <DataContext.Provider value={{data  ,setData}} >
    <RouterProvider router={router} />
    </DataContext.Provider>
    </>
  );
}

export default App;