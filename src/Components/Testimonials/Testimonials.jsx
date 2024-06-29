import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import brother from '../../assets/brother.jpg'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = () => {
  if(tx > -50) {
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () => {
  if(tx < 0) {
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={brother} alt="" />
                <div>
                  <h3>Клиент 1</h3>
                  <span>Казахстан</span>
                </div>
                </div>
                <p>Describe your ideas and then watch them transform from text to images. 
                  Whether you want to create ai generated art for your next presentation or poster, 
                  or generate the perfect photo, Image Creator in Microsoft Designer
                   can effortlessly handle any style or format.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={brother} alt="" />
                <div>
                  <h3>Клиент 2</h3>
                  <span>Казахстан</span>
                </div>
                </div>
                <p>Describe your ideas and then watch them transform from text to images. 
                  Whether you want to create ai generated art for your next presentation or poster, 
                  or generate the perfect photo, Image Creator in Microsoft Designer
                   can effortlessly handle any style or format.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={brother} alt="" />
                <div>
                  <h3>Клиент 3</h3>
                  <span>Казахстан</span>
                </div>
                </div>
                <p>Describe your ideas and then watch them transform from text to images. 
                  Whether you want to create ai generated art for your next presentation or poster, 
                  or generate the perfect photo, Image Creator in Microsoft Designer
                   can effortlessly handle any style or format.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={brother} alt="" />
                <div>
                  <h3>Клиент 4</h3>
                  <span>Казахстан</span>
                </div>
                </div>
                <p>Describe your ideas and then watch them transform from text to images. 
                  Whether you want to create ai generated art for your next presentation or poster, 
                  or generate the perfect photo, Image Creator in Microsoft Designer
                   can effortlessly handle any style or format.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
