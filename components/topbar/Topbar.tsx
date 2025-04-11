"use client";

import { useState, useEffect } from 'react';
import './Topbar.css';

export default function Topbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = (item: string) => {
    setActiveItem(item);
    setMenuOpen(false); // Fechar o menu ao clicar em um item
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="toptoolbar">
      <nav className={`topbar fixed ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <a className='nameBand' href="#home">Velvet Roses</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'} {/* Mostra o X ou o ícone de menu dependendo do estado */}
        </div>
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <a
              href="#home"
              className={activeItem === 'home' ? 'active' : ''}
              onClick={() => handleClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#banda"
              className={activeItem === 'banda' ? 'active' : ''}
              onClick={() => handleClick('banda')}
            >
              Banda
            </a>
          </li>
          <li>
            <a
              href="#agenda"
              className={activeItem === 'agenda' ? 'active' : ''}
              onClick={() => handleClick('agenda')}
            >
              Agenda
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className={activeItem === 'contato' ? 'active' : ''}
              onClick={() => handleClick('contato')}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}