
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>movie Review mongo</h2>
      <div className='form'>
        <label>movie name</label>
        <input type="text" name="movieName" />
        <label>review</label>
        <input type="text" name="review" />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
