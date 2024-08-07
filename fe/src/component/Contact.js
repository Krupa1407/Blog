import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");


    const handlesubmit = async(e) => {
        e.preventDefault();
        let data = await fetch("http://localhost:5000/contact", {
            method: "post", 
            body: JSON.stringify({name, email, phone, address, message}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        data = await data.json();
        console.log(data);
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setMessage("");
    }

    return (
        <>
            <h1 className='heading'>Contact</h1>
            <div className="container signup-container">
                <div className="fufu">
                    <Form className='p-4'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="Number" placeholder="Enter Phone Number" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" placeholder='Enter address' rows={3} value={address} onChange={(e) => { setAddress(e.target.value) }}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder='Enter Message' rows={5} value={message} onChange={(e) => { setMessage(e.target.value) }}/>
                        </Form.Group>


                        <Button variant="primary" type="submit" onClick={handlesubmit}>
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Contact
