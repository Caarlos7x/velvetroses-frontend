import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className='footer-logo'>
        <a href="#top" title="Back to top">
          <Image src="/images/footer-logo.png" alt="Logo" height={90} width={90} />
        </a>
      </div>
      <div className='social-media'>
        <a href="https://www.instagram.com/oficialvelvetroses" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/@oficialvelvetroses" target="_blank" rel="noopener noreferrer">TikTok</a>
        <a href="https://www.youtube.com/@velvetrosesoficial" target="_blank" rel="noopener noreferrer">YouTube</a>
      </div>
    </div>
  );
}