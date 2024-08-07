import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'


function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();


    const handlesubmit = async(e) => {
        e.preventDefault();
        let data = await fetch("http://localhost:5000/login", {
            method: "post", 
            body: JSON.stringify({ email, password}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        data = await data.json();
        console.log(data);
        if(data.name){
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
        }
        else{
            alert("please enter correct details.")
        }
    }

  return (
    <>
    <div className="login-bg">
        <h1 className='heading'>Login</h1>
        <div className="container signup-container">
            <div className="fufu">
                <Form className='p-4'>

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
    </div>
    </>
  );
}

export default Login;