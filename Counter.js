import { Button } from "react-bootstrap"
import { useState } from "react"

// CSS
import  styles from '../../assets/css/Counter.module.css';
// Redux
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement} from '../../redux/counterReducer';

export default function Counter (){
    console.log(styles)

    const dispatcher = useDispatch();

    const counter = useSelector( state=> state.counter.value)

    return(
        <div>
            <Button variant="success" size="lg" onClick={()=>dispatcher(increment())} >+</Button>
            <span className={styles.number}>{counter}</span>
            <Button variant="danger" size="lg" onClick={()=>dispatcher(decrement())}>-</Button>
        </div>
    )
}