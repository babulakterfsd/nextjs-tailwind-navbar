'use client';

import useAppContext from '@/hooks/useAppContext';
import {
  faBlog,
  faContactBook,
  faDollarSign,
  faHouse,
  faPen,
  faProjectDiagram,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

const Logo = '/assets/images/logo.png';

const MobileNavbar = () => {
  const { isMenuOpen } = useAppContext();
  return (
    <div className="overflow-x-hidden bg-white">
      <div>
        <AnimatedMenubar />
      </div>
      <div className={`${isMenuOpen ? '' : ''}`}>
        {isMenuOpen && <MobileMenu />}
      </div>
    </div>
  );
};

export default MobileNavbar;

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  return (
    <div
      className={` ${
        isMenuOpen
          ? 'duration-1000 h-screen flex justify-center items-start flex-col gap-y-8 overflow-x-hidden pl-[36vw] -mt-12'
          : 'w-0 h-0 duration-300'
      }`}
    >
      <Link href="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faHouse} />
          <span className="uppercase font-[700]">Home</span>
        </span>
      </Link>
      <Link href="/about" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faUser} />
          <span className="uppercase font-[700]">About Us</span>
        </span>
      </Link>
      <Link href="/features" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faProjectDiagram} />
          <span className="uppercase font-[700]">Features</span>
        </span>
      </Link>
      <Link href="/pricing" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faDollarSign} />
          <span className="uppercase font-[700]">Pricing</span>
        </span>
      </Link>
      <Link href="/blog" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faBlog} />
          <span className="uppercase font-[700]">Blog</span>
        </span>
      </Link>
      <Link href="/contact" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faContactBook} />
          <span className="uppercase font-[700]">Contact</span>
        </span>
      </Link>
      <Link href="/dashboard" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="flex gap-x-4 items-center text-primary">
          <FontAwesomeIcon icon={faPen} />
          <span className="uppercase font-[700]">Dashboard</span>
        </span>
      </Link>
    </div>
  );
};

const AnimatedMenubar = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  const genericHamburgerLine = `h-1 w-5 rounded-full my-1 bg-[#eb8817] transition ease transform duration-300`;
  return (
    <div className="overflow-x-hidden flex justify-between items-center h-16 py-2 px-4 shadow-sm">
      <div className="flex gap-x-1 items-center">
        <Link href="/" title="Back to Home">
          <Image src={Logo} alt="logo" width={36} height={36} />
        </Link>
      </div>

      <button
        name="mobilemenu"
        aria-label="mobile menu"
        className="flex flex-col h-7 w-7  rounded justify-center items-center group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? 'rotate-45 translate-y-2 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isMenuOpen
              ? '-rotate-45 -translate-y-[10px] opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
      </button>
    </div>
  );
};
