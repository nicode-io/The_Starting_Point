import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  // Make a request for a user with a given ID
  let result;
  axios.get('http://localhost:5000/api/test/posts')
    .then(function (response) {
      // handle success
      result = response.data.message;
      console.log(result);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {result} fetched !
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
