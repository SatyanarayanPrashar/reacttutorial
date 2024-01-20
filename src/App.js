import './App.css';
import { useState } from 'react';
import Axios from 'axios';


function App() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);
  const fetchAge = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictedAge(res.data.age);
    })
  }

  return (
    <div className="App">
        <input type="text" placeholder='Enter the name' onChange={(event) => { setName(event.target.value) }} />
        <button onClick={fetchAge}>Predict Age</button>

      <h1>Predicted Age: {predictedAge}</h1>
    </div>
  );
}

export default App;