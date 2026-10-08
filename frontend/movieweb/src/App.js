import "./App.css";
import { BrowserRouter as Router,Route,Routes,useLocation } from 'react-router-dom';

import Navibar from './component/navibar'
import Home from './component/Home'
import Login from './component/Login'
import Seat from "./component/Seat";
import Feed from './component/Feed';
import Book from './component/book';
import About from './component/About';
import Signup from './component/Signup';
import Details from "./component/details";
import Update from "./component/update";
import Search from "./component/Search";

function App() {

  const Layout = ({ children }) => {
    const location = useLocation();
    const hideNavAndFooter = location.pathname.toLowerCase() === '/' || location.pathname.toLowerCase() === '/login';

    return (
      <>
        {!hideNavAndFooter && <Navibar />}
        <div className="content">
          {children}
        </div>
      </>
    );
  };


  return (
    <>
    <div className="back w-full h-screen">
    <Router>
    <Layout>
    <Routes>
            <Route path="/" Component={Signup} exect></Route>
            <Route path="/login" Component={Login} exect></Route>
            <Route path="/home" Component={Home} exect></Route>
            <Route path="/home/booknow" Component={Seat} exect></Route>
            <Route path="/update" Component={Update} exect></Route>
            <Route path="/home/detail" Component={Details} exect></Route>
            <Route path="/Feed" Component={Feed} exect></Route>
            <Route path="/About" Component={About} exect></Route>
            <Route path="/book" Component={Book} exect></Route>
            <Route path="/search" Component={Search} exect></Route>
    </Routes>
    </Layout>
    </Router>
    </div>
    </>
  );
}

export default App;

 
