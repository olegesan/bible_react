import React, {useEffect, useState} from 'react';
import Text from './components/Text';
import './App.css';
import BibleNavPanel from "./components/BibleNavPanel";

function App() {
  const [book, setBook] = useState('gen');
  const [chapter, setChapter] = useState(1);
  const changeBook=(name)=>{
    setBook(name);
    setChapter(1)
    console.log("Getting the books name from app.js"+name)
  }
  const changeChapter = (num)=>{
    setChapter(num);
    console.log('setting chapter' + num);
  }
  return (
    <div className="App">
      <h1>React Bible App (ESV)</h1>
      <BibleNavPanel changeBook={changeBook} book={book} setChapter={changeChapter} chapter={chapter} />
      <br/>
        <Text book={book} chapter={chapter}></Text>
    </div>
  );
}

export default App;
