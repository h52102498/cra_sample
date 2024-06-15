import { useState, useEffect } from 'react';
import axios from 'axios';
//外部套件

import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

//axios

function App() {
  const [text, setText] = useState('');

  const onChangeHandler = (e)=>{
    setText(e.target.value);
  };

  useEffect(()=>{
    (async()=>{
      const path=process.env.REACT_APP_PATH;
      const reslut = await axios.get(path);
      console.log(reslut);
    })();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis libero assumenda aliquam atque expedita, odit excepturi praesentium commodi, accusantium labore temporibus quo culpa officiis, exercitationem sit facere numquam obcaecati mollitia.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" className="btn btn-primary">Primary</button>
        {text}
        <Input id="sampleText" text="這是一個input"
        value={text} onChangeHandler={onChangeHandler}></Input>
      </header>
    </div>
  );
}

export default App;
