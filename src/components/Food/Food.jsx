import React from 'react'
import './Food.css'

const Food = (props) => {
  return (
    <div className='food'>
        <div className="container" style={{background: `url('${props.bgImg}') no-repeat center center/cover`}}>
            <div style={{background: `url('${props.bgImg1}') no-repeat center center/cover`}} className="left"></div>
            <div style={{background: `url('${props.bgImg2}') no-repeat center center/cover`}} className="right"></div>
        </div>
    </div>
  )
}

export default Food