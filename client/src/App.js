
import './App.css';

function App() {
  return (
    <div className="App">
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
