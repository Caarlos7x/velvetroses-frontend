"use client";

import './Index.css';

export default function HeroMain() {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/velvet-roses-hero.png"
      >
        <source src="/video/video-hero.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="hero-noise" />
      <div className="hero-light"></div>
      <div className="hero-img"></div>
    </div>
  );
}