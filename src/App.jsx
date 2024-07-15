import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
// import Articles from './Components/Articles/Articles'
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import CalculateBlocks from './Components/CalculateBlocks';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero id="hero" />
      <div className='container'>
        <div id="program">
          <Title subTitle='Наши продукты' title='Что мы предлагаем' />
          <Programs />
        </div>
        <div id="about">
          <About setPlayState={setPlayState} />
        </div>
        <div id="campus">
          <Title subTitle='Галерея' title='Фото' />
          <Campus />
        </div>
        <div id="testimonials">
          <Title subTitle='Отзывы' title='Что говорят наши клиенты' />
          <Testimonials />
        </div>
        <div id="calculateBlocks">
          <Title subTitle='Расчет блоков' title='' />
          <CalculateBlocks />
        </div>
        <div id="contact">
          <Title subTitle='Контакты' title='На связи' />
          <Contact />
        </div>
      </div>
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
