const url_users = "https://jsonplaceholder.typicode.com/users";
const url_todos = "https://jsonplaceholder.typicode.com/todos";

const url_list_employees = "http://localhost/magedyaseen/API/list-employees";
const url_employee_orders = "http://localhost/magedyaseen/API/employee-orders/";

const url_todo_completed =
  "https://jsonplaceholder.typicode.com/todo-completed/";

export const API_get_users = async () => {
  const data = await fetch(url_users);

  const json_data = await data.json();

  return json_data;
};

export const API_get_all_todos = async () => {
  const response = await fetch(url_todos);

  console.log("response", response);
  const json_data = await response.json();

  return json_data;
};

export const API_set_todo_completed = async (id) => {
  try {
    const res = await fetch(url_todo_completed + id);

    if (res.status == 200) {
      console.log("res", res);
      const json_res = await res.json();
      return json_res;
    } else {
      return false;
      // return true
    }
  } catch (e) {
    console.log(e);

    return false;
  }
};

export const API_list_employees = async () => {
  const res = await fetch(url_list_employees);

  const data = await res.json();

  return data;
};

export const API_get_employee_orders = async (emp_id) => {

  const req_body = {
    employeeNumber: emp_id
  }

  const json_body = JSON.stringify(req_body)

  console.log(req_body)
  console.log(json_body)

  const options = {
    method: "POST",
    body: json_body
  };

  const res = await fetch(url_employee_orders, options);

  const orders = await res.json();

  // console.log(res)
  // console.log(orders)

  return orders;
};
