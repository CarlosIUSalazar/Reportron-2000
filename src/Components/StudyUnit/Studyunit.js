import React from 'react'
//import Target from './Target/Target'
import './studyunit.css'

export default function Studyunit({targetName}) {
  return (
    <div className="target-row-container">
      <div className="target-row">
      <div className="target_container">
        <div className="target_name_box">
          <p className="target_name_text">{targetName}</p>
        </div>
          <div className="epc">
            <div className="e_container">
              <p className="e_letter">E</p>
            </div>
            <div className="p_container">
              <p className="p_letter">P</p>
            </div>
            <div className="c_container">
              <p className="c_letter">C</p>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}
