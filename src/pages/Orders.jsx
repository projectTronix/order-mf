import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api';
const Orders = () => {

const [orders, setOrders] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("http://localhost:8093/orders/view");
        setOrders(response.data);
      } catch (error) {
        console.log(error);
        // if (error.code == "ERR_NETWORK") {
        //   navigate("/error", { replace: true });
        // }
      }
    };

    fetchOrders();
  }, []);
  if(!orders) {
    return (
        <h3>loading..</h3>
    );
  }
  if(orders.length == 0) {
    return (
        <h3>It's empty in here</h3>
    );
  }
  return (
    <div>
      {orders && orders.map((item, index) => {
        const id = item.id;
        const order = orders[index] ? orders[index].items : null;
        return (
            <div key={id}>
                <h5>{item.userEmail}</h5>
                {order && order.map((orderItem, subIndex) => {
                    const subId = orderItem.id;
                    return (
                        <div className="orderItem" key={subId}>
                            <h3>{orderItem.productId}</h3>
                        </div>
                    );
                })}
            </div>
        );
      } )} 
    </div>
  )
}

export default Orders
