import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import WritePost from './pages/WritePost';
import SinglePost from './pages/SinglePost';
import './style.scss';

const Layout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {  
        path:'/post/:id',
        element:<SinglePost />
      },
      {
        path:'/writepost',
        element:<WritePost />
      },
    ]
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className='container'>
        <RouterProvider router={router}/>
      </div>

    
      {/* <h2>TITLE</h2>
      <div className='form'>
        <label>Title</label>
        <input type="text" name="movieName" />
        <label>Blog Post</label>
        <input type="text" name="review" />

        <button>Submit</button>
      </div> */}
    </div>
  );
}

export default App;
