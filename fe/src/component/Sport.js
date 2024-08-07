import React from 'react'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

const Sport = ({category}) => {
  const [blogs, setBlogs] = useState([]);

    const allblogs = async() => {
        let data = await fetch(`http://localhost:5000/blogs/${category}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        data = await data.json();
        console.log(data);
        setBlogs(data);
      }
    
      useEffect(() => {
        allblogs();
      },[category]);


  return (
    <div>
       <div className="container">
          {blogs.length
            ?
            <Row>
              {blogs.map((blog, index) => (
                <Col md={4} className='mt-4 mb-4' key={index}>
                  <Card style={{ width: '100%' }} className='mt-4 mb-4' border="success" >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.content}</Card.Text>
                      <Card.Title>{blog.category}</Card.Title>
                      <Card.Title>{blog.country}</Card.Title>
                      <Card.Title>{blog.city}</Card.Title>
                      <Card.Title>{blog.author}</Card.Title>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            :
            <div className="abc">over</div>
          }
        </div>
    </div>
  )
}

export default Sport
