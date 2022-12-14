import { Container,Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function P404 (){
    return (
        <Container>
            <Alert variant="danger">
                <h3>You are in a wrong page</h3>
                <p>Click <Link className="alert-link" to='/'>here</Link> to go to home page</p>
            </Alert>
        </Container>
    )
}