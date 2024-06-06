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
  setTimeout(() => {
    navigate(-1);
  }, 1000);
};

  useEffect(() => {
    context.setData({
        name: '',
        contact: '',
        doubleSash: false,
        doubleSashQuantity: 0,
        doubleSashSquareFoots: 0,
        singleSash: false,
        singleSashQuantity: 0,
        singleSashSquareFoots: 0,
      })
  }, [])
 
  return (
   
    <>


     <div className='main'>
      <div className='main-sub'>
        <span className='label'>Customer's Name</span>
        <input type='text' className='input' value={context?.data?.name} placeholder='Customer Name' onChange={(e) => { context?.setData({ ...context?.data, name: e.target.value }) }} />
        <span className='label'>Customer's Contact</span>

        <input type='text' className='input' value={context?.data?.contact} placeholder='Contact Number' onChange={(e) => { context?.setData({ ...context?.data, contact: e.target.value }) }} />
        <div className='main-checkbox'>
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
        }
      <button className='genbtn' onClick={()=>{handleButtonClick()}}>Generate</button>
      </div>
      <div>
      </div>
    </div> 
   
    </>
  );
}

export default Main;


