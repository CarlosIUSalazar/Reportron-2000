import React from 'react'
import './epc-panel.css'

export default function EpcPanel() {
  return (
    <div className="epc-panel-container">
      <div className="epc-panel-box">
        <div className="epc-panel-single-box-e">
          <input type="radio" value="E" name="epc" />
        </div>
        <div className="epc-panel-single-box-p">
          <input type="radio" value="P" name="epc" />
        </div>
        <div className="epc-panel-single-box-c">
          <input type="radio" value="C" name="epc" />
        </div>
      </div>
    </div>
  )
}
