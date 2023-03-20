// import logo from './logo.svg';
// import { Button } from 'reactstrap';
import './App.css';
import Header from './Components/Header';
import { ToastContainer, toast } from 'react-toastify';
// import Course from './Components/Course';
import AllCourses from './Components/AllCourses';
import Home from './Components/Home';
import AddCourse from './Components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Menus from './Components/Menus';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  // const buttonHandle = () => {
  //   toast("Welcome");
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Container>
          {window.location.pathname !== '/' ? <Header /> : null}
          <Row>
            {window.location.pathname !== '/' ? <Col md={4}><Menus /></Col> : null}

            <Col md={window.location.pathname === '/' ? 12 : 8}>
              <Routes>
                {window.location.pathname === '/' ? <Route path='/' element={<Login />} /> : null}
                <Route path='/home' element={<Home />} />
                <Route path='add-course' element={<AddCourse />} />
                <Route path='view-courses' element={<AllCourses />} />
                <Route path='signup' element={<Signup />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div >
  );
}

export default App;
