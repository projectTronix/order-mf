import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
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
        if (error.code == "ERR_NETWORK") {
          navigate("/error", { replace: true });
        }
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
    <Container className='m-5'>
      <h1 className='display-3 mb-4'>Orders</h1>
      <Row className='order-list-header lead'>
          <Col>Date & Time</Col>
      </Row>
      <Stack gap={3}>
      {orders && orders.map((item, index) => {
        const id = item.id;
        const order = orders[index] ? orders[index].items : null;
        return (
          <Row className='text-muted' key={id}>
            <Col>{item.timeStamp}</Col>
              {order && order.map((orderItem, subIndex) => {
                const subId = orderItem.id;
                return (
                        <Col className="orderItem" key={subId}>
                          <Row>{orderItem.productId}</Row>
                        </Col>
                    );
                })}
          </Row>
        );
      } )}
      </Stack>
    </Container>
  )
}

export default Orders
