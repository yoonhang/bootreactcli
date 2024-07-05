import React, { useState } from 'react';
import './App.css';

function App() {

  // let name = 'comdori';
  const [name, setName] = useState('hancoding');
  const [num, setNum] = useState('0');
  const [numList, setNumList] = useState([]);

  function numRecording() {
    setNumList([...numList, num]);
    setNum(0);
  }

  return (
    <div className="App">
      <header className="App-header">

      <div>{ name }</div>
      <div>{ num }</div>

      <button onClick={() => {setNum(num + 1)}}>증가</button>
      <button onClick={() => {setNum(num - 1)}}>감소</button>
      <button onClick={numRecording}>기록</button>
      <h1>저장된 숫자</h1>

      <ul>
        {numList.map((num) => (
            <li>{num}</li>
        ))}
      </ul>

      </header>
    </div>
  );
}

export default App;
