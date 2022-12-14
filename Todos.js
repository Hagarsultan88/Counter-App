import { useState, useEffect } from "react";

//  React Toastify
import { toast } from "react-toastify";

// React-bootstrap
import {
  ListGroup,
  ListGroupItem,
  Button,
  Container,
  Col,
  Row,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  FormFloating,
  Alert,
} from "react-bootstrap";

// Icons
import { BsCheck2Square, BsPencil } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

// APIs
import { API_get_all_todos, API_set_todo_completed } from "../APIs/APIs";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [err, setErr] = useState("");
  const [currentId, setCurrentId] = useState("");

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    get_all_todos();
  }, []);

  // Imagin that you get this value from the Backend code (user_id)
  const user_id = 100;

  const get_all_todos = async () => {
    setTodos(await API_get_all_todos());
  };

  const handl_completed_btn_clicked_obti = async (id) => {
    // Save current state in a variable to be used in case of server error
    const current_todos = todos;

    // Update todos
    setTodos(
      todos.map((todo) => {
        if (todo.id != id) return todo;

        return { ...todo, completed: true };
      })
    );

    // Send the update to the server
    const res = await API_set_todo_completed(id);

    // If server response was faild, return the state to the current state
    if (res === false) setTodos(current_todos);
  };

  const handl_completed_btn_clicked_pesti = async (id) => {
    // Send the update to the server
    const res = await API_set_todo_completed(id);

    // If server response was faild, display Error Alert
    // if (res === false) {
    //   console.log("Error");
    //   return;
    // }

    // Update todos
    setTodos(
      todos.map((todo) => {
        if (todo.id != id) return todo;

        return { ...todo, completed: true };
      })
    );
  };

  const handle_add_task_clicked = () => {
    if (newTask == "") {
      setErr("أفكرك بأيه؟!!!!!!!");

      toast("أكتب حاجة افكرك بيها", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        progressStyle: { backgroundColor: "red" },
        position: "bottom-center",
      });
      return;
    }

    if (update) {
      console.log("I will update ", currentId);


      const new_todos = todos;


      new_todos.map( todo => {

        if (todo.id == currentId) {
          console.log('I found ' ,todo)
          todo.title = newTask
          console.log('I updated it to ' ,todo)
        }
      })


        setTodos(new_todos)

        setModalVisible(false);
        setUpdate(false)
        setNewTask('')
        toast('تم التحديث بنجاح')


      return;
    }

    const newtodo = {
      title: newTask,
      completed: false,
      userId: user_id,
      id: Math.ceil(Math.random() * 10000),
    };

    setTodos([newtodo, ...todos]);

    setNewTask("");
  };

  const handle_new_task_changed = (e) => {
    setNewTask(e.target.value);
  };

  const handle_close_clicked = () => {
    setModalVisible(false);
    setErr("");
    setUpdate(false);
    setNewTask("");
  };

  const handle_edit_task = (title, id) => {
    setUpdate(true);
    setNewTask(title);
    setCurrentId(id);
    setModalVisible(true);
  };

  const handle_delete_task = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
    toast("Deleted Suuceessfully!");
  };

  return (
    <Container fluid>
      <Modal show={modalVisible}>
        <ModalHeader>
          <Modal.Title>Add New Todo </Modal.Title>
        </ModalHeader>

        <ModalBody>
          <Form>
            <FormFloating>
              <FormControl
                placeholder="x"
                onChange={(e) => handle_new_task_changed(e)}
                value={newTask}
              />
              {err != "" && <Alert variant="danger">{err}</Alert>}
              <FormLabel>Add Your Task </FormLabel>
            </FormFloating>
          </Form>
        </ModalBody>

        <Modal.Footer>
          <Button onClick={handle_add_task_clicked}>
            {update ? "Save Changes" : "Add Task"}
          </Button>
          <Button variant="danger" onClick={handle_close_clicked}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="m-3">
        <Col>
          <Button onClick={() => setModalVisible(true)}>Add New Task </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup className="p-4">
            {todos.map(({ title, completed, id }, i) => (
              <ListGroupItem
                className="d-flex justify-content-between mb-3"
                variant={completed && "success"}
                key={i}
              >
                <span>{title}</span>
                <div>
                  {!completed && (
                    <Button
                      variant="success"
                      onClick={() => handl_completed_btn_clicked_pesti(id)}
                    >
                      <BsCheck2Square />
                    </Button>
                  )}

                  <Button
                    className="mx-2"
                    onClick={() => handle_edit_task(title, id)}
                  >
                    <BsPencil />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => handle_delete_task(id)}
                  >
                    <MdDeleteOutline />
                  </Button>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
