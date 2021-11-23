import React from 'react';
import './manager.css'

export default function Manager({hideManagerPage, addStudentToList, addTargetToList}) {

  const handleAddStudentsButton = () => {
    const enteredNames = prompt('Please enter students names separated by a ,')
    let students = enteredNames.split(",").map(function(item) {
      return item.trim();
    });
    console.log("names are", students)

    for (let i = 0; i < students.length; i++) {
      addStudentToList(students[i])
    }
  }

  const handleAddTargetsButton = () => {
    const enteredTargets = prompt('Please enter target names separated by a ,')
    let targets = enteredTargets.split(",").map(function(item) {
      return item.trim();
    });
    console.log("Tragets are", targets)

    for (let i = 0; i < targets.length; i++) {
      addTargetToList(targets[i])
    }

}

const generateReportWithInputStudentAndTarget = () => {
  hideManagerPage()
}


  return (
    <div>
      <h1>Gradebook Manager</h1>
      <p>Input Student Names</p>
      <button onClick={handleAddStudentsButton}>+</button>
      <p>Input Targets</p>
      <button onClick={handleAddTargetsButton}>+</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="start-button" onClick={()=> generateReportWithInputStudentAndTarget()}>Generate</button>
    </div>
  )
}

