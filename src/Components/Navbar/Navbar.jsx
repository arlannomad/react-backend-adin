import React, { useEffect, useState } from 'react';
import './Navbar.css';
import photologo from '../../assets/photologo.jpg';
import menu_icon from '../../assets/menu-icon.png';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={photologo} alt="" className='logo' />
      <img src="" alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <ScrollLink to='hero' smooth={true} offset={0} duration={500}>
            Главная
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='program' smooth={true} offset={-260} duration={500}>
            Что мы предлагаем
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='about' smooth={true} offset={-150} duration={500}>
            О нас
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='campus' smooth={true} offset={-260} duration={500}>
            Наши продукты
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>
            Отзывы клиентов
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='calculateBlocks' smooth={true} offset={-150} duration={500}>
            Расчет блоков
          </ScrollLink>
        </li>
        <li>
          <a href="https://adin-fronten.netlify.app">
            <button className='btn'>Статьи</button>
          </a>
        </li>
        <li>
          <ScrollLink to='contact' smooth={true} offset={-260} duration={500} className='btn'>
            Контакты
          </ScrollLink>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;

