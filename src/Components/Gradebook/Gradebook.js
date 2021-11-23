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
        {targetList.map((value, index) => (
          <>
          <div key={index} className="target-">
            {<Studyunit targetName={value}/>}
          </div>
          </>
        ))
        }
      </div>
        {studentList.map((value, index) => {
        return (
          <>
            <div key={index} className="epc-boxes-container">
              <Student studentName={value}/>
              {targetList.map((value, index) => (
              <div key={index} className="epc-panel-">
                <EpcPanel />
              </div>
              ))}
            </div>
          </>
        )})}
    </>
  )
}

// <div className="users">
//       {data.map((user) => (
//         <div className="user">{user}</div>
//       ))}
//     </div>

//https://reactjs.org/docs/lists-and-keys.html#keys
