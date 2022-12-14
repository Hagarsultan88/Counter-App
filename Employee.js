import { useEffect, useState } from "react";

// React bootstrap
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

// APIs
import { API_get_employee_orders } from "../APIs/APIs";

// React Router DOM
import { useParams } from "react-router-dom";

export default function Employee() {
  const [orders, setorders] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fnc_get_employee_orders();
  }, []);

  const fnc_get_employee_orders = async () => {
    setorders(await API_get_employee_orders(id));

    console.log(orders);
  };

  return (
    <Container>
      <ListGroup>
        {orders.map(({ OrderID }, i) => (
          <ListGroupItem key={i}>{OrderID}</ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}
