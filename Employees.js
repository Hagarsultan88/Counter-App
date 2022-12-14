import { useEffect, useState } from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

// React router DOM
import {Link} from 'react-router-dom'


// APIs
import { API_list_employees } from "../APIs/APIs";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fnc_list_employees();
  }, []);

  const fnc_list_employees = async () => {
    setEmployees(await API_list_employees());
  };
  console.log(employees);

  return (
    <Container>
      <h1>Employees Orders</h1>

      <ListGroup>
        {employees.map(({ EmployeeID, name }, i) => (
          <ListGroupItem key={i}>
            <Link to={`${EmployeeID}`}>
            {name}
            </Link>
        </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}
