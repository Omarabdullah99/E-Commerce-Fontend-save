import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUserOrdersAsync,  selectedUserInfo, selectedUserOrders } from "../userSlice";
import { Link } from "react-router-dom";
import { selectLoggedInUser } from "../../auth/authSlice";
function UserOrders() {
    const dispatch=useDispatch()
    const user= useSelector(selectLoggedInUser)
    console.log("userOrder",user)

    const orders= useSelector(selectedUserOrders)
    console.log('userOrder',orders)
    return ( 
        <div>
        {orders?.map((order)=>(
            <div> 

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
        Order Number is : {order?.id}
    </h1>

    <h1 className="text-xl my-5 font-bold tracking-tight text-gray-900">
    Order Status : {order?.status}
    </h1>
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {order?.cartItems?.map((item) => (
              <li key={item.product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.product.thumbnail}
                    alt={item.product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={item.product.id}>{item.product.title}</a>
                      </h3>
                      <p className="ml-4">{item.product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.product.brand}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    
                  <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty: {item.quantity}
                          </label>
                        </div>

                    <div className="flex">
                     
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${order?.totalAmount}</p>
        </div>
        <div className="flex justify-between my-2 text-base font-medium text-gray-900">
              <p>Total Items in Cart</p>
              <p>{order?.totalItems} items</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">Address: </p>
        {/*Personal Information */}
        <div  className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
        <div className="flex min-w-0 gap-x-4">

          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">{order?.selectedAddress.fullname}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{order?.selectedAddress.streetaddress}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{order?.selectedAddress.pinCode}</p>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">{order?.selectedAddress.phone}</p>
          <p className="text-sm leading-6 text-gray-900">{order?.selectedAddress.city}</p>
          
        </div>
      </div>
       
      </div>
      </div>
            
            
            </div>
        ))}
        
        </div>
     );
}

export default UserOrders;