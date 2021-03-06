import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import './CheckoutSteps.css';
export default function OrderHistory(props) {
    const orderMineList = useSelector((stata) => stata.orderMineList);
    const {loading , error , orders} = orderMineList;
    const dispatch = useDispatch();
    useEffect(() =>{
       // dispatch(listOrderMine())
    })



  return (
    <>
    <h5 className="m-4">Order History</h5>
    {loading? <LoadingBox></LoadingBox>:
     error?<MessageBox variant="danger">{error}</MessageBox>
     :
     (
         <table className="table m-2">
             <thead>
                 <tr>
                     <th>ID</th>
                     <th>DATE</th>
                     <th>TOTAL</th>
                     <th>PAID</th>
                     <th>DELEVERED</th>
                     <th>ACTIONS</th>
                 </tr>
             </thead>
             <tbody>
                 {orders.map((order) => (
                     <tr key={order._id}>
                         <td>{order._id}</td>
                         <td>{order._createdAt.substring(0,10)}</td>
                         <td>{order._totalPrice}</td>
                         <td>{order._isPaid? order.paidAt.substring(0,10): 'No '}</td>
                         <td>{order._isDelivered? order.deliveredAt.substring(0,10): 'No '}</td>
                         <td>
                             <button type="button" className="small" 
                                 onClick={() => {props.history.push(`/order/${order._id}`)}}>
                                 Details
                             </button>
                         </td>

                     </tr>

                 ))}
             </tbody>
         </table>
     )
    }

    </>
  );
}