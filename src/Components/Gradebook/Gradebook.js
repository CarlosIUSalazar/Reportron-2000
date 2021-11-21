import React from 'react'
import Studyunit from '../StudyUnit/Studyunit'
import Student from '../Student/Student'
import EpcPanel from '../EpcPanel/EpcPanel'
import './gradebook.css'

export default function Gradebook(targetList, studentList) {

  console.log("Student list in gradebook", studentList)
  console.log("Target list in gradebook", targetList)
  let popp = "berry"

  return (
    <div>
      <p>student {studentList[0]}</p>
      <p>target {targetList[0]}</p>
      <p>popp {popp}</p>
      <Studyunit />
      <div className="student-epcpanel-container">
        <Student />
        <EpcPanel />
        <EpcPanel />
        <EpcPanel />
      </div>

      <div className="student-epcpanel-container">
        <Student />
        <EpcPanel />
        <EpcPanel />
        <EpcPanel />
      </div>

      <div className="student-epcpanel-container">
        <Student />
        <EpcPanel />
        <EpcPanel />
        <EpcPanel />
      </div>
    </div>
  )
}


  // const buttonsElements = words40.map(word => {
  //   return <Button key={word.id} word={word} handleNumberWordsPressed={handleNumberWordsPressed}userAnswerArray={userAnswerArray} hasChosen15Words={hasChose
