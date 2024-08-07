import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
import blog from "./images/blog.mp4"; // Importing video

import About from './About'
import Destination from './Destination';
import Getintouch from './Getintouch';


function Home() {
  return (
    <>
    <div style={{ position: 'relative', height: '100vh', width: '100vw', backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
      <video
        src={blog}
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          objectFit: 'cover',
          zIndex: -1
        }}
      />
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <div style={{ width: '90vw' }}>
          <Card className="text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <Card.Body>
              <h1 className='text-clr-home'>EXPLORE. DREAM. DISCOVER.</h1>
              <h5 className='text-clr-home'>This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the globe.</h5>
              <Button variant="light" className="m-4">
                <Link to="/allblogs" className="video-btn-link">Start Exploring</Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    <About/>
    <Destination/>
    <Getintouch/>
    </>
  );
}

export default Home;
