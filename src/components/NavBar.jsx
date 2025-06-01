import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const LINKS = [
    { text: "Home", targetId: "home" },
    { text: "Proudcts", targetId: "Proudcts" },
    { text: "About Us", targetId: "aboutus" },
    { text: "Contact Us", targetId: "contactus" },
  ];

  return (
    <nav className="absolute top-4 z-50 flex w-full items-center justify-center border-b border-black">

      
    {/* Logo - Positioned on the top-left on large screens */}
    <img
      src={logo}
      alt="logo"
      width={30}
      height={30}
      className="absolute left-4 top-1/2 -translate-y-1/2 lg:left-6"
    />
  <div className="">
    
    {/* Links - Centered on large screens */}
    <div className="hidden lg:flex mt-10 mb-8 space-x-24 font-bold text-[25px]">
  {LINKS.map((link, index) => (
    <a
      key={index}
      href={`#${link.targetId}`}
      className="text-sm hover:opacity-50"
      onClick={(e) => handleScroll(e, link.targetId)}
    >
      {link.text}
    </a>
  ))}
</div>


    {/* Mobile Menu Toggle (hamburger) */}
    <div className="lg:hidden ml-auto">
      <button onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  </div>

  {/* Mobile Menu Items */}
  {isMobileMenuOpen && (
    <div className="w-full backdrop-blur-lg lg:hidden">
      {LINKS.map((link, index) => (
        <a
          key={index}
          href={`#${link.targetId}`}
          className="block p-4 uppercase tracking-tighter"
          onClick={(e) => handleScroll(e, link.targetId)}
        >
          {link.text}
        </a>
      ))}
    </div>
  )}
</nav>

  );
};

export default NavBar;
