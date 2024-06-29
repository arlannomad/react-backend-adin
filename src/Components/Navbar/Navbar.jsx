import React, { useEffect, useState } from 'react'
import './Navbar.css'
// import homelogo from '../../assets/homelogo.png'
import photologo from '../../assets/photologo.jpg'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    const [sticky, setStiky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setStiky(true) : setStiky(false);
      })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={photologo} alt="" className='logo'/>
      <img src="" alt="" className='logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Главная</Link></li>
          <li><Link to='program' smooth={true} offset={-260} duration={500}>Что мы предлагаем</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>О нас</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500}>Наши продукты</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Отзывы клиентов</Link></li>
          {/* <li><a href="http://localhost:8081/"><button className='btn'>Статьи</button></a></li> */}
          <li><a href="https://adin-fontend-list.netlify.app/"><button className='btn'>Статьи</button></a></li>
          <li><Link Link to='contact' smooth={true} offset={-260} duration={500}
           className='btn'>Контакты</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
