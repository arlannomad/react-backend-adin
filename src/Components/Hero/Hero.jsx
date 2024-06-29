import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
      {/* <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button> */}
          {/* <h1>We Ensure better education for a better world</h1> */}
          <h1>"Заводской автоклавный газоблок  и пеноблок в Алматы</h1>
          <p>Наш газоблок прочный. Превосходит обычный газоблок и пеноблок, 
            структура твердая и наши блоки Держат гвозди.</p>
            <p>Структура нашего газобетона позволяет быстро выводит влагу в 
              окружающую среду и хорошо подойдет для строительства бань</p>
              <p>Наш газоблок сохранит тепло и уют в вашем доме</p>
              <p>Удельный вес газобетонного блока меньше 1,5 и 2 раз, чем у кирпича. 
                Газоблок легче пеноблока</p>
                <p>Легко строить, пилить и штробить блок.</p>
                <p>Газоблоки не подвержены горению и не теряет своих эксплатуационных свойств.</p>
                <h2>Звоните в любое время!</h2>
               {/* <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button> */}
      </div>
    </div>
  )
}

export default Hero
