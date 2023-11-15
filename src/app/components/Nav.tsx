"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen((prev) => !prev);
    setNavMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const fixedNav = header?.offsetTop || 0;

      setNavbarFixed(window.pageYOffset > fixedNav);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${isNavbarFixed ? 'navbar-fixed' : ''} bg-transparent absolute top-0 left-0 w-full flex items-center z-10`}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link href="/">
              <p className="font-bold text-lg text-primary block py-6">Candi Gebang</p>
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" className={`block absolute right-4 lg:hidden ${isHamburgerOpen ? 'hamburger-active' : ''}`} onClick={toggleHamburger}>
              <span className="hamburger-line origin-top-left"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line origin-bottom-left"></span>
            </button>

            <nav id="navMenu" className={`${isNavMenuOpen ? 'block' : 'hidden'} absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>              
            <ul className="block lg:flex">
                <li className="group">
                  <Link href={"#home"} className="text-base mx-8 flex py-2 text-dark group-hover:text-primary">Home</Link>
                </li>
                <li className="group">
                  <Link href={"#blog"} className="text-base mx-8 flex py-2 text-dark group-hover:text-primary">Blog</Link>
                </li>
                <li className="group">
                  <Link href={"#team"} className="text-base mx-8 flex py-2 text-dark group-hover:text-primary">Team</Link>
                </li>
                <li className="group">
                  <Link href={"#maps"} className="text-base mx-8 flex py-2 text-dark group-hover:text-primary">Maps</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;