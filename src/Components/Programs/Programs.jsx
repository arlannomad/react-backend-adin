import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import teploblok_foto from '../../assets/teploblok-foto.jpg'
import gazoblok_almaty from '../../assets/gazoblok-almaty-foto.jpg'
import penoblock from '../../assets/penoblock.jpg'

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
