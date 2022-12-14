import { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

// Icons
import { BsCheck2Square } from "react-icons/bs";

// APIs
import { API_get_all_todos } from "../APIs/APIs";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    get_all_todos();
  }, []);

  const get_all_todos = async () => {
    setTodos(await API_get_all_todos());
  };

  const handl_completed_btn_clicked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id != id) {
          return todo;
        } else {
          todo.completed = true;

          return todo;
        }
      })
    );
 
    console.log(todos);
  };

  console.log(todos);

  return (
    <ListGroup className="p-4">
      {todos.map(({ title, completed, id }, i) => (
        <ListGroupItem
          className="d-flex justify-content-between mb-3"
          variant={completed && "success"}
          key={i}
        >
          <span>{title}</span>
          <span>
            {!completed && (
              <Button
                variant="success"
                onClick={() => handl_completed_btn_clicked(id)}
              >
                <BsCheck2Square />
              </Button>
            )}
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
