import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './common/Navbar/Navbar';
import About from "./components/About/About";
import Booking from "./components/booking/Booking";
import Home from "./components/pages/Home";
import Gallery from "./components/gallery/Gallery";
import MathsCal from "./components/Calculater/Mathscal";
import Services from "./components/Services/Home";
import SinglePages from "./SinglePage/SinglePages";
import Blog from "./components/Blog/Blog";
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle";
import Testimonial from "./components/Testimonial/Testimonial";
import Contact from "./components/Contact/Contact";
import Login from "./components/login/Login";
import Register from "./components/login/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/booking' exact component={Booking}></Route>
          <Route path='/services' exact component={Services}></Route>
          <Route path='/singlepage/:id' exact component={SinglePages}></Route>
          <Route path='/gallery' exact component={Gallery}></Route>
          <Route path='/blog' exact component={Blog}></Route>
          <Route path='/blogsingle/:id' exact component={BlogSingle}></Route>
          <Route path='/testimonail' exact component={Testimonial}></Route>
          <Route path='/contact' exact component={Contact}></Route>
          <Route path='/sign-in' exact component={Login}></Route>
          <Route path='/Register' exact component={Register}></Route>
          <Route path='/mathscal' exact component={MathsCal}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
