import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
// import Articles from './Components/Articles/Articles'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
         <div className='container'>
         <Title subTitle='Наши продукты' title='Что мы предлагаем'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Галерея' title='Фото'/>
      <Campus/>
      {/* <Title subTitle='Статьи' title='Статьи'/>
      <Articles/> */}
      <Title subTitle='Отзывы' title='Что говорят наши клиенты'/>
      <Testimonials/>
      <Title subTitle='Контакты' title='На связи'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App

