import React from 'react'
import './target.css'

export default function Target() {
  return (
    <>
      <div className="target_container">
        <div className="target_name_box">
          <p className="target_name_text">Reflects on the process.</p>
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
    </>
  )
}
