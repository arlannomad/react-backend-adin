import React from 'react'
import './Articles.css'
import about_img from '../../assets/teploblok-foto.jpg'

const Articles = () => {
  return (
    <div className='articles'>
      <div className="articles-left">
      <img src={about_img} alt="" className='about-img'/>
      </div>
      <div className='about-right'>
          <p>При возведении своего дома, каждый пользователь ищет экологически чистый 
               и качественный материал. Чаще всего, выбор падает именно на сегмент ячеистого бетона, 
               в котором лидирующие позиции занимает - пеноблок и газоблок.
               Оба материала обладают массой преимуществ, но также и своими нюансами, которые стоит учитывать при выборе. 
               Поэтому, первоначальной задачей для строителя станет поиск ответа на вопрос - что лучше газоблок или пеноблок?</p>
      </div>
    </div>
  )
}

export default Articles
