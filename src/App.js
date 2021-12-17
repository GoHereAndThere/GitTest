import './App.css';
import React,{useEffect , useState} from 'react';

function App() {
const [list, setList] = useState([]);

useEffect(() => {
  fetch ('https://jsonplaceholder.typicode.com/')
  .then((result) => { return result.json() })
  .then((data) => {setList(data) })
  
})


  return (
    <div className="App">

    </div>
  );
}

export default App;
