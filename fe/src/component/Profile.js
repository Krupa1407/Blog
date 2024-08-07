// Note: pending


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signup() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handlesubmit = async(e) => {
        e.preventDefault();
        let data = await fetch("http://localhost:5000/profile", {
            method: "put", 
            body: JSON.stringify({name, email, password}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        data = await data.json();
        console.log(data);
        setName("");
        setEmail("");
        setPassword("");
    }

  return (
    <>
        <h1 className='heading'>Profile</h1>
        <div className="container signup-container">
            <div className="fufu">
                <Form className='p-4'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                </Form.Group>


                <Button variant="primary" type="submit" onClick={handlesubmit}>
                    Submit
                </Button>
                </Form>
            </div>
        </div>
    </>
  );
}

export default Signup;