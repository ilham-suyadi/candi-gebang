"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {usePathname} from "next/navigation"
import { FaCaretDown } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [isNavMenuOpen, setNavMenuOpen] = useState(false);
  const [isNavbarFixed, setNavbarFixed] = useState(false);
  const [dropdown, setDropdown] = useState(false)
  const pathname = usePathname();

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

  const toggleDropdwon = () => {
    setDropdown(!dropdown)
  }

  const NavItem=(url:string, title:string)=>(
    <li className='group'>
      <Link href={url} className={`text-base mx-8 flex py-2 text-dark group-hover:text-primary ${pathname === url && "text-primary"}  `}>{title}</Link>
    </li>
  )
  return (
    <header className={`${isNavbarFixed ? 'navbar-fixed' : ''} bg-transparent absolute top-0 left-0 w-full flex items-center z-10`}>
      <div className="container md:px-48 px-0">
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
              {NavItem("/","Home")}
              {NavItem("/blog","Blog")}
              {NavItem("/team","Team")}
              <li className='group'>
                <p onClick={toggleDropdwon} className={`cursor-pointer text-base mx-8 flex py-2 text-dark group-hover:text-primary ${pathname.includes("/info/") ? "text-primary": ""} `} aria-expanded={dropdown} data-dropdown-toggle="dropdown-user">Info <span className='mt-1.5'><FaCaretDown/></span></p>
              </li>
              {dropdown && (
                <div className={`z-50  absolute top-full right-2 w-40 text-base list-none bg-white divide-gray-200 rounded shadow-xl ${dropdown ? "display": "hidden"}`} id="dropdown-user">
                  {NavItem("/info/sejarah-candi-gebang","Sejarah")}
                  {NavItem("/info/keunikan-candi-gebang","Keunikan")}
                  {NavItem("/info/harga-tiket","Harga Tiket")}
                </div>
              )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
{/* <li className='group'>
  <Link href={"/info/sejarah-candi-gebang"} className={`text-base mx-8 flex py-2 text-dark group-hover:text-primary ${pathname === "/info/sejarah-candi-gebang" ? "text-primary": " "} `}>Sejarah</Link>
</li> */}
// <li className='group'>
                  //   <Link href={"/info/keunikan-candi-gebang"} className={`text-base mx-8 flex py-2 text-dark group-hover:text-primary ${pathname === "/info/keunikan-candi-gebang" ? "text-primary": " "} `}>Keunikan</Link>
                  // </li>
                  // <li className='group'>
                  //   <Link href={"/info/harga-tiket"} className={`text-base mx-8 flex py-2 text-dark group-hover:text-primary ${pathname === "/info/harga-tiket" ? "text-primary": " "} `}>Harga Tiket</Link>
                  // </li>