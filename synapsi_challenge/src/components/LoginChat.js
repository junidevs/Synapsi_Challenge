import React, {useRef} from 'react'
import {Container, Form,Button} from 'react-bootstrap';
import {v4 as uuidV4} from 'uuid'
export default function Login({submitedId}) {
    const idRef = useRef();

   const handleSubmit = (e) =>{
       e.preventDefault();
       submitedId(idRef.current.value);
   }

   const createID = ()=>{
    submitedId(uuidV4());
   }
    return (
        <Container className="align-items-center d-flex" style={{height:'100vh '}}>
            <Form  onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter your Nickname or create random ID</Form.Label>
                    <Form.Control ref={idRef} type="text" required ></Form.Control>
                </Form.Group>
                <Button type="submit" className="mr-2">log in</Button>
                <Button onClick={createID} variant="secondary">Generate random ID</Button>
            </Form>
        </Container>
    )
}
