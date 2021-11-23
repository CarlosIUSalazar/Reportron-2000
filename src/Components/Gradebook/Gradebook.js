import React, {useEffect} from 'react'
import Studyunit from '../StudyUnit/Studyunit'
import Student from '../Student/Student'
import EpcPanel from '../EpcPanel/EpcPanel'
import './gradebook.css'

export default function Gradebook({studentList, targetList}) {

  console.log("Student list in gradebook", studentList)
  console.log("Target list in gradebook", targetList)

  useEffect(() => {
  },[])

  return (
    <>
      <div className="target-boxes-container">
        <div className="target-boxes-empty-space-buffer"></div>
        {targetList.map((value, index) => <Studyunit targetName={value}/>)}
      </div>
        {studentList.map((value, index) => {
        return (
          <>
            <div className="epc-boxes-container">
              <Student studentName={value}/>
              {targetList.map((value, index) => <EpcPanel />)}
            </div>
          </>
        )})}
    </>
  )
}

