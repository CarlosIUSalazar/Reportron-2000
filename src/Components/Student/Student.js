import React from 'react'
import './student.css'

export default function Student({studentName}) {
  return (
    <div className="student-name-container">
      <div className="student-name-box">
        <p className="student-name-text">{studentName}</p>
      </div>
    </div>
  )
}
