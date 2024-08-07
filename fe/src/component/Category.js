import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';


function Category() {
  const [blogs, setBlogs] = useState([]);
  const { category } = useParams();

  const fetchblogs = async () => {
    try {
      let blogs = await fetch(`http://localhost:5000/category/${category}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json"
        }
      });
      blogs = await blogs.json();
      setBlogs(blogs);
      console.log(blogs);

    } catch (error) {
      console.error("fetch error: ", error);
    }
  }
  
  useEffect(() => {
    fetchblogs();
  }, [category]);

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
            <div className="abc">No Blogs for this category Available</div>
          }
        </div>
    </>
  );
}

export default Category;