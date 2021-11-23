import React, { useState } from 'react';

import './App.css';
import Header from './Components/Header/Header'
import Gradebook from './Components/Gradebook/Gradebook'
import Manager from './Components/Manager/Manager'


// export const WordContext = React.createContext()
function App() {
  const [onManagerPage, setOnManagerPage] = useState(true);

  let [studentList, setListStudent] = useState([])
  let [targetList, setListTarget] = useState([])


  const addStudentToList = (studentName) => {
    setListStudent(studentList => [...studentList, studentName])
  }

  const addTargetToList = (targetName) => {
    setListTarget(targetList => [...targetList, targetName])
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
        <Gradebook studentList={studentList} targetList={targetList}/>
      </>
      }
    </>
  );
}

export default App;


