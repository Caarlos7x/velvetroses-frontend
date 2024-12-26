"use client";

import { useState } from 'react';
import './Topbar.css';

export default function Topbar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="toptoolbar">
      <nav className="topbar fixed">
        <ul>
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