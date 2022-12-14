import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

// CSS
import styles from '../assets/css/Home.module.css'

import Counter from "../Components/Page_Home/Counter";
import Content from "../Components/Page_Home/Content";

export default function Home() {

  console.log(styles)
  const { value, max, min } = useSelector((state) => state.counter);

  const {name, age, fac} = useSelector(state=>state.user)
 

  return (
    <div>
      <h1>Home Page</h1>

      <Counter />
      
      <h2 className={`${styles.number} counter`}>Counter {value}</h2>
      <h2 className={`counter ${styles.number}`}>Max {max}</h2>
      <h2 className={styles.number}>Min {min}</h2>
      <h2 className="counter">name {name}</h2>
      <div className="row">

      <Col as='h2' className='col-md-4'>Age {age}</Col>
      <Col as='h2' className='col-md-4'>Faculty {fac}</Col>
      </div>

      <Content />
    </div>
  );
}
