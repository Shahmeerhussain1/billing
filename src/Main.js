import './App.css';
import { useEffect, useState } from 'react';
import { DataContext } from './context';
import { useContext } from 'react';
import {   useNavigate} from 'react-router-dom';
function Main() {
let context = useContext(DataContext)

console.log('context',context)
const navigate = useNavigate();

const handleButtonClick = () => {
  navigate('/kusbyufawe');
//   setTimeout(() => {
//     navigate(-1);
//   }, 1000);
};

  useEffect(() => {
    context.setData({
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
        fivemmGlass : {
            twoSeventy : false ,
            fourHundred : false , 
            sevenHundred : false
        }
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
        fivemmGlass : {
            twoSeventy : false ,
            fourHundred : false , 
            sevenHundred : false
        }
       }
      })
  }, [])

  useEffect(()=>{
    console.log('context',context?.data)
  },[context])

  const validity = () =>{
    if(context?.data?.whiteColor && context?.data?.blackColor){
        if((context?.data?.whiteData?.fivemmGlass?.twoSeventy || context?.data?.whiteData?.fivemmGlass?.fourHundred ||context?.data?.whiteData?.fivemmGlass?.sevenHundred) && (context?.data?.blackData?.fivemmGlass?.twoSeventy || context?.data?.blackData?.fivemmGlass?.fourHundred ||context?.data?.blackData?.fivemmGlass?.sevenHundred))
            return true
        else
        return false
    }
    if(context?.data?.blackColor){
        if(context?.data?.blackData?.fivemmGlass?.twoSeventy || context?.data?.blackData?.fivemmGlass?.fourHundred ||context?.data?.blackData?.fivemmGlass?.sevenHundred)
            return true
        else 
        return false
    }
    if(context?.data?.whiteColor){
        if(context?.data?.whiteData?.fivemmGlass?.twoSeventy || context?.data?.whiteData?.fivemmGlass?.fourHundred ||context?.data?.whiteData?.fivemmGlass?.sevenHundred)
            return true
        else
        return false
    }
    
        if(!context?.data?.blackColor && !context?.data?.whiteColor)
            return false
   

  }
 
  return (
   
    <>


     <div className='main'>
      <div className='main-sub'>
        <span className='label'>Customer's Name</span>
        <input type='text' className='input' value={context?.data?.name} placeholder='Customer Name' onChange={(e) => { context?.setData({ ...context?.data, name: e.target.value }) }} />
        <span className='label'>Customer's Contact</span>

        <input type='text' className='input' value={context?.data?.contact} placeholder='Contact Number' onChange={(e) => { context?.setData({ ...context?.data, contact: e.target.value }) }} />
        <div className='forM' style={{display : 'flex' , width : '100%'}}>
            <div className='w-m-100' style={{display : 'flex' , flexDirection : 'column', width : '50%' , alignItems : 'flex-start'}}>
        <div className='main-checkbox'>
          <input type='checkbox' value={context?.data.blackColor} onChange={() => { context?.setData({ ...context?.data, blackColor: !context?.data.blackColor }) }} />
          <span>Black Profle</span>
        </div>
        {
          context?.data.blackColor &&
          <>
           <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.blackData?.doubleSash} onChange={() => { context?.setData({ ...context?.data,blackData : {...context?.data?.blackData ,  doubleSash: !context?.data?.blackData?.doubleSash }}) }} />
          <span>Double sash sliding window with net</span>
        </div>
        {
          context?.data?.blackData?.doubleSash &&
          <div className='small'>
            <div className='small-sub'>
              <span>Quantity</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.doubleSashQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data , blackData : {...context?.data?.blackData , doubleSashQuantity: e.target.value }}) }} />
            </div>
            <div className='small-sub'>
              <span>Square Foots</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.doubleSashSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, blackData : { ...context?.data?.blackData , doubleSashSquareFoots: e.target.value }}) }} />
            </div>

          </div>
        }
        <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.blackData?.singleSash} onChange={() => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,  singleSash: !context?.data?.blackData?.singleSash }}) }} />
          <span>Single sash openable window</span>
        </div>
        {
          context?.data?.blackData?.singleSash &&
          <div className='small'>
            <div className='small-sub'>
              <span>Quantity</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.singleSashQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  blackData :{ ...context?.data?.blackData ,  singleSashQuantity: e.target.value } }) }} />
            </div>
            <div className='small-sub'>
              <span>Square Foots</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.singleSashSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,   singleSashSquareFoots: e.target.value }}) }} />
            </div>

          </div>
        } 

         <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.blackData?.twoSash} onChange={() => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,  twoSash: !context?.data?.blackData?.twoSash }}) }} />
          <span>Two sash sliding window with Centre Fix and two net sash</span>
        </div>
        {
          context?.data?.blackData?.twoSash &&
          <div className='small'>
            <div className='small-sub'>
              <span>Quantity</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.twoSashQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  blackData :{ ...context?.data?.blackData ,  twoSashQuantity: e.target.value } }) }} />
            </div>
            <div className='small-sub'>
              <span>Square Foots</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.twoSashSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,   twoSashSquareFoots: e.target.value }}) }} />
            </div>

          </div>
        } 
         <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.blackData?.openableVentilator} onChange={() => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,  openableVentilator: !context?.data?.blackData?.openableVentilator }}) }} />
          <span>Openable ventilator</span>
        </div>
        {
          context?.data?.blackData?.openableVentilator &&
          <div className='small'>
            <div className='small-sub'>
              <span>Quantity</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.openableVentilatorQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  blackData :{ ...context?.data?.blackData ,  openableVentilatorQuantity: e.target.value } }) }} />
            </div>
            <div className='small-sub'>
              <span>Square Foots</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.openableVentilatorSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,   openableVentilatorSquareFoots: e.target.value }}) }} />
            </div>

          </div>
        } 
         <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.blackData?.fixWindow} onChange={() => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,  fixWindow: !context?.data?.blackData?.fixWindow }}) }} />
          <span>Fix Window</span>
        </div>
        {
          context?.data?.blackData?.fixWindow &&
          <div className='small'>
            <div className='small-sub'>
              <span>Quantity</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.fixWindowQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  blackData :{ ...context?.data?.blackData ,  fixWindowQuantity: e.target.value } }) }} />
            </div>
            <div className='small-sub'>
              <span>Square Foots</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.fixWindowSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,   fixWindowSquareFoots: e.target.value }}) }} />
            </div>

          </div>
        } 
         <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.blackData?.singleSash} onChange={() => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,  singleSash: !context?.data?.blackData?.singleSash }}) }} />
          <span>Double sash sliding window with net ( 80mm frame and 55mm sash )</span>
        </div>
        {
          context?.data?.blackData?.doubleSash80mm &&
          <div className='small'>
            <div className='small-sub'>
              <span>Quantity</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.doubleSash80mmQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  blackData :{ ...context?.data?.blackData ,  doubleSash80mmQuantity: e.target.value } }) }} />
            </div>
            <div className='small-sub'>
              <span>Square Foots</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.doubleSash80mmSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,   doubleSash80mmSquareFoots: e.target.value }}) }} />
            </div>

          </div>
        } 
         <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.blackData?.doubleSash60mm} onChange={() => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,  doubleSash60mm: !context?.data?.blackData?.doubleSash60mm }}) }} />
          <span>Double sash openable window ( 60mm frame and 60mm sash )</span>
        </div>
        {
          context?.data?.blackData?.doubleSash60mm &&
          <div className='small'>
            <div className='small-sub'>
              <span>Quantity</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.doubleSash60mmQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  blackData :{ ...context?.data?.blackData ,  doubleSash60mmQuantity: e.target.value } }) }} />
            </div>
            <div className='small-sub'>
              <span>Square Foots</span>
              <input type='text' className='input-quantity' value={context?.data?.blackData?.doubleSash60mmSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,   doubleSash60mmSquareFoots: e.target.value }}) }} />
            </div>

          </div>
        } 

        <div>
        <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.blackData?.fivemmGlass?.twoSeventy} checked={context?.data?.blackData?.fivemmGlass?.twoSeventy} onChange={() => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,  fivemmGlass : {...context?.data?.blackData?.fivemmGlass  , fourHundred : false , sevenHundred : false ,twoSeventy : !context?.data?.blackData?.fivemmGlass?.twoSeventy} }}) }} />
          <span>5mm plain glass</span>
        </div>
        <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.blackData?.fivemmGlass?.fourHundred} checked={context?.data?.blackData?.fivemmGlass?.fourHundred} onChange={() => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,  fivemmGlass : {...context?.data?.blackData?.fivemmGlass ,fourHundred : !context?.data?.blackData?.fivemmGlass?.fourHundred , sevenHundred : false ,twoSeventy :false} }}) }} />
          <span>5mm plain Tempered glass</span>
        </div>
        <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.blackData?.fivemmGlass.sevenHundred}  checked={context?.data?.blackData?.fivemmGlass.sevenHundred} onChange={() => { context?.setData({ ...context?.data, blackData :{ ...context?.data?.blackData ,  fivemmGlass : {...context?.data?.blackData?.fivemmGlass ,sevenHundred : !context?.data?.blackData?.fivemmGlass?.sevenHundred , fourHundred : false ,twoSeventy :false} }}) }} />
          <span>5mm plain glass + double glaze 8mm spacer + 5mm plain glass + georgion bar </span>
        </div>
        </div>
        </>
        }
        </div>







        <div style={{display : 'flex' , flexDirection : 'column', width : '50%'}} className='w-m-100'>      <div className='main-checkbox'>
          <input type='checkbox' value={context?.data.whiteColor} onChange={() => { context?.setData({ ...context?.data, whiteColor: !context?.data.whiteColor }) }} />
          <span>White Profile</span>
        </div>
        {
          context?.data.whiteColor &&
          <>
          <div className='main-checkbox'>
         <input type='checkbox' value={context?.data?.whiteData?.doubleSash} onChange={() => { context?.setData({ ...context?.data,whiteData : {...context?.data?.whiteData ,  doubleSash: !context?.data?.whiteData?.doubleSash }}) }} />
         <span>Double sash sliding window with net</span>
       </div>
       {
         context?.data?.whiteData?.doubleSash &&
         <div className='small'>
           <div className='small-sub'>
             <span>Quantity</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.doubleSashQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data , whiteData : {...context?.data?.whiteData , doubleSashQuantity: e.target.value }}) }} />
           </div>
           <div className='small-sub'>
             <span>Square Foots</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.doubleSashSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, whiteData : { ...context?.data?.whiteData , doubleSashSquareFoots: e.target.value }}) }} />
           </div>

         </div>
       }
       <div className='main-checkbox'>
         <input type='checkbox' value={context?.data?.whiteData?.singleSash} onChange={() => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,  singleSash: !context?.data?.whiteData?.singleSash }}) }} />
         <span>Single sash openable window</span>
       </div>
       {
         context?.data?.whiteData?.singleSash &&
         <div className='small'>
           <div className='small-sub'>
             <span>Quantity</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.singleSashQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  whiteData :{ ...context?.data?.whiteData ,  singleSashQuantity: e.target.value } }) }} />
           </div>
           <div className='small-sub'>
             <span>Square Foots</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.singleSashSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,   singleSashSquareFoots: e.target.value }}) }} />
           </div>

         </div>
       } 

        <div className='main-checkbox'>
         <input type='checkbox' value={context?.data?.whiteData?.twoSash} onChange={() => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,  twoSash: !context?.data?.whiteData?.twoSash }}) }} />
         <span>Two sash sliding window with Centre Fix and two net sash</span>
       </div>
       {
         context?.data?.whiteData?.twoSash &&
         <div className='small'>
           <div className='small-sub'>
             <span>Quantity</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.twoSashQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  whiteData :{ ...context?.data?.whiteData ,  twoSashQuantity: e.target.value } }) }} />
           </div>
           <div className='small-sub'>
             <span>Square Foots</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.twoSashSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,   twoSashSquareFoots: e.target.value }}) }} />
           </div>

         </div>
       } 
        <div className='main-checkbox'>
         <input type='checkbox' value={context?.data?.whiteData?.openableVentilator} onChange={() => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,  openableVentilator: !context?.data?.whiteData?.openableVentilator }}) }} />
         <span>Openable ventilator</span>
       </div>
       {
         context?.data?.whiteData?.openableVentilator &&
         <div className='small'>
           <div className='small-sub'>
             <span>Quantity</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.openableVentilatorQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  whiteData :{ ...context?.data?.whiteData ,  openableVentilatorQuantity: e.target.value } }) }} />
           </div>
           <div className='small-sub'>
             <span>Square Foots</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.openableVentilatorSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,   openableVentilatorSquareFoots: e.target.value }}) }} />
           </div>

         </div>
       } 
        <div className='main-checkbox'>
         <input type='checkbox' value={context?.data?.whiteData?.fixWindow} onChange={() => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,  fixWindow: !context?.data?.whiteData?.fixWindow }}) }} />
         <span>Fix Window</span>
       </div>
       {
         context?.data?.whiteData?.fixWindow &&
         <div className='small'>
           <div className='small-sub'>
             <span>Quantity</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.fixWindowQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  whiteData :{ ...context?.data?.whiteData ,  fixWindowQuantity: e.target.value } }) }} />
           </div>
           <div className='small-sub'>
             <span>Square Foots</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.fixWindowSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,   fixWindowSquareFoots: e.target.value }}) }} />
           </div>

         </div>
       } 
        <div className='main-checkbox'>
         <input type='checkbox' value={context?.data?.whiteData?.singleSash} onChange={() => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,  singleSash: !context?.data?.whiteData?.singleSash }}) }} />
         <span>Double sash sliding window with net ( 80mm frame and 55mm sash )</span>
       </div>
       {
         context?.data?.whiteData?.doubleSash80mm &&
         <div className='small'>
           <div className='small-sub'>
             <span>Quantity</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.doubleSash80mmQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  whiteData :{ ...context?.data?.whiteData ,  doubleSash80mmQuantity: e.target.value } }) }} />
           </div>
           <div className='small-sub'>
             <span>Square Foots</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.doubleSash80mmSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,   doubleSash80mmSquareFoots: e.target.value }}) }} />
           </div>

         </div>
       } 
        <div className='main-checkbox'>
         <input type='checkbox' value={context?.data?.whiteData?.doubleSash60mm} onChange={() => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,  doubleSash60mm: !context?.data?.whiteData?.doubleSash60mm }}) }} />
         <span>Double sash openable window ( 60mm frame and 60mm sash )</span>
       </div>
       {
         context?.data?.whiteData?.doubleSash60mm &&
         <div className='small'>
           <div className='small-sub'>
             <span>Quantity</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.doubleSash60mmQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data,  whiteData :{ ...context?.data?.whiteData ,  doubleSash60mmQuantity: e.target.value } }) }} />
           </div>
           <div className='small-sub'>
             <span>Square Foots</span>
             <input type='text' className='input-quantity' value={context?.data?.whiteData?.doubleSash60mmSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,   doubleSash60mmSquareFoots: e.target.value }}) }} />
           </div>

         </div>
       } 
        <div>
        <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.whiteData?.fivemmGlass?.twoSeventy} checked={context?.data?.whiteData?.fivemmGlass?.twoSeventy} onChange={() => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,  fivemmGlass : {...context?.data?.whiteData?.fivemmGlass ,twoSeventy : !context?.data?.whiteData?.fivemmGlass?.twoSeventy , fourHundred : false , sevenHundred : false} }}) }} />
          <span>5mm plain glass</span>
        </div>
        <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.whiteData?.fivemmGlass?.fourHundred} checked={context?.data?.whiteData?.fivemmGlass?.fourHundred} onChange={() => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,  fivemmGlass : {...context?.data?.whiteData?.fivemmGlass ,fourHundred : !context?.data?.whiteData?.fivemmGlass?.fourHundred , sevenHundred : false , twoSeventy : false} }}) }} />
          <span>5mm plain Tempered glass</span>
        </div>
        <div className='main-checkbox'>
          <input type='checkbox' value={context?.data?.whiteData?.fivemmGlass.sevenHundred} checked={context?.data?.whiteData?.fivemmGlass.sevenHundred} onChange={() => { context?.setData({ ...context?.data, whiteData :{ ...context?.data?.whiteData ,  fivemmGlass : {...context?.data?.whiteData?.fivemmGlass ,sevenHundred : !context?.data?.whiteData?.fivemmGlass?.sevenHundred , twoSeventy : false , fourHundred : false} }}) }} />
          <span>5mm plain glass + double glaze 8mm spacer + 5mm plain glass + georgion bar </span>
        </div>
        </div>
       </>
        }
        {/* <div className='main-checkbox'>
          <input type='checkbox' value={context?.data.doubleSash} onChange={() => { context?.setData({ ...context?.data, doubleSash: !context?.data.doubleSash }) }} />
          <span>Double sash sliding window with net - Quantity- total square foot</span>
        </div>
        {
          context?.data.doubleSash &&
          <div className='small'>
            <div className='small-sub'>
              <span>Quantity</span>
              <input type='text' className='input-quantity' value={context?.data?.doubleSashQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data, doubleSashQuantity: e.target.value }) }} />
            </div>
            <div className='small-sub'>
              <span>Square Foots</span>
              <input type='text' className='input-quantity' value={context?.data?.doubleSashSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, doubleSashSquareFoots: e.target.value }) }} />
            </div>

          </div>
        }
        <div className='main-checkbox'>
          <input type='checkbox' value={context?.data.singleSash} onChange={() => { context?.setData({ ...context?.data, singleSash: !context?.data.singleSash }) }} />
          <span>Single sash openable window</span>
        </div>
        {
          context?.data.singleSash &&
          <div className='small'>
            <div className='small-sub'>
              <span>Quantity</span>
              <input type='text' className='input-quantity' value={context?.data?.singleSashQuantity} placeholder='Quantity' onChange={(e) => { context?.setData({ ...context?.data, singleSashQuantity: e.target.value }) }} />
            </div>
            <div className='small-sub'>
              <span>Square Foots</span>
              <input type='text' className='input-quantity' value={context?.data?.singleSashSquareFoots} placeholder='Square Foots' onChange={(e) => { context?.setData({ ...context?.data, singleSashSquareFoots: e.target.value }) }} />
            </div>

          </div>
        } */}
        </div>

        </div>
      <button className='genbtn' style={{pointerEvents : validity() ?'auto':'none'}} onClick={()=>{handleButtonClick()}}>Next</button>
      </div>
      <div>
      </div>
    </div> 
   
    </>
  );
}

export default Main;


