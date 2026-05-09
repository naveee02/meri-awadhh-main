import { useEffect } from "react";
import { gsap } from "gsap";
import { BrowserRouter , Routes , Route  ,Link } from 'react-router-dom'

export default function Header() {
  useEffect(() => {
    gsap.from(".animate-header", {
      y: -100,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out"
    });
  }, []);

  return (
    <header className="relative h-[10vh] bg-[url('/assets/PG_202401161030549074.jpg')] bg-cover bg-center text-white">
  <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

  {/* NAV */}
  <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-60 z-10">
    <div className="text-xl font-semibold">Meri - AWADH</div>
     {/* HERO TEXT */}
  
    <ul className="flex space-x-6 text-lg">
      <li className="hover:text-green-300 cursor-pointer"><Link to="/">Home</Link></li>
      <li className="hover:text-green-300 cursor-pointer"><Link to="/Destination">Destination</Link></li>
      <li className="hover:text-green-300 cursor-pointer"><Link to="/booking">Booking</Link></li>
      <li className="hover:text-green-300 cursor-pointer"><Link to="/News">News</Link></li>
      <li className="hover:text-green-300 cursor-pointer"><Link to="/events">Events</Link></li>
    </ul>
  </nav>

 
</header>

  );
}
