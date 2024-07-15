import React from 'react'
import './Programs.css'
import gazoblok_almaty from '../../assets/gazoblok-almaty-foto.jpg'

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
          <img src={gazoblok_almaty}  alt=""/>
          <div className='caption'>
          {/* <img src={program_icon_3}  alt=""/> */}
          <p>Газоблок</p>
          </div>
      </div>
      <div className='program'>
          <img src={gazoblok_almaty}  alt=""/>
          <div className='caption'>
          {/* <img src={program_icon_3}  alt=""/> */}
          <p>Пеноблок</p>
          </div>
      </div>
      <div className='program'>
          <img src={gazoblok_almaty}  alt=""/>
          <div className='caption'>
          {/* <img src={program_icon_3}  alt=""/> */}
          <p>Металлочерепица</p>
          </div>
      </div>
    </div>
  )
}

export default Programs
