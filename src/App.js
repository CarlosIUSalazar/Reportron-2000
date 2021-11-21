import React, { useState, useRef } from 'react';

import './App.css';
import Header from './Components/Header/Header'
import Gradebook from './Components/Gradebook/Gradebook'
import Manager from './Components/Manager/Manager'

function App() {
  const [onManagerPage, setOnManagerPage] = useState(true);
  let studentList = useRef([]);
  let targetList = useRef([]);

  const addStudentToList = (studentName) => {
    studentList.current.push(studentName)
  }

  const addTargetToList = (targetName) => {
    targetList.current.push(targetName)
  }

  const hideManagerPage = () => {
    setOnManagerPage(false)
  }

  console.log("Student list in App", studentList)
  console.log("Target list in App", targetList)

  return (
    <>
      {onManagerPage ? <Manager hideManagerPage={hideManagerPage} addStudentToList={addStudentToList} addTargetToList={addTargetToList}/> :
      <>
        <Header />
        <Gradebook studentList={studentList.current} targetList={targetList.current} />
      </>
      }
    </>
  );
}

export default App;
