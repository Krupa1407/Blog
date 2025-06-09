import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';

function Allblogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  const fetchblogs = async () => {
    try {
      let blogs = await fetch(`${process.env.REACT_APP_API_URL}/blogs`, {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      });
      blogs = await blogs.json();
      setBlogs(blogs);
      console.log(blogs);

    } catch (error) {
      setError(error.message);
      console.error("fetch error: ", error);
    }

  }

  useEffect(() => {
    fetchblogs();
  }, []);

  return (
    <>
      <h1 className='heading'>All Blogs</h1>
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
            <div className="abc">No Blogs Available</div>
          }
        </div>
    </>
  );
}

export default Allblogs;