import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Addblog() {
    const[title, setTitle] = useState("");
    const[content, setContent] = useState("");
    const[author, setAuthor] = useState("");
    const[category, setCategory] = useState("");
    const[country, setCountry] = useState("");
    const[city, setCity] = useState("");

    const handlesubmit = async(e) => {
        e.preventDefault();
        let data = await fetch("http://localhost:5000/blog", {
            method: "post", 
            body: JSON.stringify({title, content, author, category, country,city}),
            headers: {
                "Content-Type": "application/json"
            }
        });
        data = await data.json();
        console.log(data);

    }

  return (
    <>
        <h1 className='heading'>Add Blog</h1>
        <div className="container signup-container">
            <div className="fufu">
                <Form className='m-4'>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicContent">
                    <Form.Label>Content</Form.Label>
                    <Form.Control type="text" placeholder="Enter Content" value={content} onChange={(e) => {setContent(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author" value={author} onChange={(e) => {setAuthor(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author" value={category} onChange={(e) => {setCategory(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAuthor">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author" value={country} onChange={(e) => {setCountry(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPlace">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter Place" value={city} onChange={(e) => {setCity(e.target.value)}}/>
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

export default Addblog;