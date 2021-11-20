import React from 'react'
import Studyunit from '../StudyUnit/Studyunit'
import Student from '../Student/Student'
import EpcPanel from '../EpcPanel/EpcPanel'
import './gradebook.css'

export default function Gradebook() {
  return (
    <div>
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
