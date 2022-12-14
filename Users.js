// APIs
import { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { API_get_users } from "../APIs/APIs";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    get_users();
  }, []);

  const get_users = async () => {
    setUsers(await API_get_users());
  };
  console.log("users: ", users);

  return (
    <Container>
      <h1 className="mb-3">Users List</h1>

      <ListGroup>
        {users.map((user, i) => (
          <ListGroupItem key={i}>{user.name}</ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}
