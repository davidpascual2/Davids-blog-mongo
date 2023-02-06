import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import WritePost from './pages/WritePost';
import SinglePost from './pages/SinglePost';


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home page</div>
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/writePost',
    element: <WritePost/>,
  },
  {
    path: '/singlePost',
    element: <SinglePost/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <h2>David's mongo Blog</h2>
      <div className='form'>
        <label>Title</label>
        <input type="text" name="movieName" />
        <label>Blog Post</label>
        <input type="text" name="review" />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
