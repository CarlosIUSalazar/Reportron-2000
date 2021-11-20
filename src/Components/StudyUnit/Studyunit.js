import React from 'react'
import Target from './Target/Target'
import './studyunit.css'

export default function Studyunit() {
  return (
    <div className="target-row-container">
      <div className="target-row">
        <Target />
        <Target />
        <Target />

      </div>
    </div>
  )
}
