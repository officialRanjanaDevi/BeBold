import React from 'react'
import NewOrder from '../NewOrder/NewOrder'
import CancelReq from '../CancelReq/CancelReq'
import AddProduct from '../AddProduct/AddProduct'
import UpdateProduct from '../UpdateProduct/UpdateProduct'
import Analysis from '../Analysis/Analysis'
const Pannel = (props) => {
    const {panel}=props.panel;
    return (
    <div className=' w-3/4 md:w-full rounded-md'>
        {panel==='addProduct'&&<AddProduct/>}
        {panel==='updateProduct'&&<UpdateProduct/>}
        {panel==='newOrder'&&<NewOrder/>}
        {panel==='cancelReq'&&<CancelReq/>}
        {panel==='analysis'&&<Analysis/>}
      
    </div>
  )
}

export default Pannel
