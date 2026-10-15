import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.from(".animate-header", {
      y: -100,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out"
    });
  }, []);

  return (
    <header className="site-header relative h-[10vh] bg-[url('/assets/PG_202401161030549074.jpg')] bg-cover bg-center text-white">
  <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

  <nav className="site-nav absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-60 z-10">
    <div className="nav-brand text-xl font-semibold">Meri - AWADH</div>
    <button
      className="nav-toggle"
      type="button"
      aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isMenuOpen}
      aria-controls="primary-navigation"
      onClick={() => setIsMenuOpen((open) => !open)}
    >
      <span />
      <span />
      <span />
    </button>
    <ul id="primary-navigation" className={`nav-links text-lg${isMenuOpen ? " is-open" : ""}`}>
      <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
      <li><Link to="/Destination" onClick={() => setIsMenuOpen(false)}>Destination</Link></li>
      <li><Link to="/booking" onClick={() => setIsMenuOpen(false)}>Booking</Link></li>
      <li><Link to="/News" onClick={() => setIsMenuOpen(false)}>News</Link></li>
      <li><Link to="/events" onClick={() => setIsMenuOpen(false)}>Events</Link></li>
    </ul>
  </nav>

 
</header>

  );
}
