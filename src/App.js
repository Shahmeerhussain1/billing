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
    blackColor : false,
    whiteColor : false ,
    blackData : {
    doubleSash: false,
    doubleSashQuantity: 0,
    doubleSashSquareFoots: 0,
    singleSash: false,
    singleSashQuantity: 0,
    singleSashSquareFoots: 0,
    twoSash: false,
    twoSashQuantity: 0,
    twoSashSquareFoots: 0,
    openableVentilator: false,
    openableVentilatorQuantity: 0,
    openableVentilatorSquareFoots: 0,
    fixWindow: false,
    fixWindowQuantity: 0,
    fixWindowSquareFoots: 0,
    doubleSash80mm: false,
    doubleSash80mmQuantity: 0,
    doubleSash80mmSquareFoots: 0,
    doubleSash60mm: false,
    doubleSash60mmQuantity: 0,
    doubleSash60mmSquareFoots: 0,
    fivemmGlass : 270
    },
   whiteData : {
    doubleSash: false,
    doubleSashQuantity: 0,
    doubleSashSquareFoots: 0,
    singleSash: false,
    singleSashQuantity: 0,
    singleSashSquareFoots: 0,
    twoSash: false,
    twoSashQuantity: 0,
    twoSashSquareFoots: 0,
    openableVentilator: false,
    openableVentilatorQuantity: 0,
    openableVentilatorSquareFoots: 0,
    fixWindow: false,
    fixWindowQuantity: 0,
    fixWindowSquareFoots: 0,
    doubleSash80mm: false,
    doubleSash80mmQuantity: 0,
    doubleSash80mmSquareFoots: 0,
    doubleSash60mm: false,
    doubleSash60mmQuantity: 0,
    doubleSash60mmSquareFoots: 0,
    fivemmGlass : 270
   }
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