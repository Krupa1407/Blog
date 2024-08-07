import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
}
  from 'react-router-dom';

import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Profile from "./component/Profile"       //pending
import Contact from "./component/Contact"
import About from './component/About'
import Addblog from "./component/Addblog"
import Allblogs from "./component/Allblogs"
import Category from './component/Category';
import Country from './component/Country';
import Footer from './component/Footer';


function App() {
  return (

    <div>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/addblog" element={<Addblog />} />
          <Route exact path="/blogs" element={<Allblogs />} />
          <Route exact path="/country/:country" element={<Country />} />
          <Route exact path="/category/:category" element={<Category />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
