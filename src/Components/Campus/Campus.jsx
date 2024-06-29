import React from 'react'
import './Campus.css'

import white_arrow from '../../assets/white-arrow.png'
// import brothers from '../../assets/brothers.jpg'
import gazoblok_almaty from '../../assets/gazoblok-almaty-foto.jpg'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
          <img src={gazoblok_almaty} alt="" />
          <img src={gazoblok_almaty} alt="" />
          <img src={gazoblok_almaty} alt="" />
          <img src={gazoblok_almaty} alt="" />
      </div>
      {/* <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button> */}
    </div>
  )
}

export default Campus
