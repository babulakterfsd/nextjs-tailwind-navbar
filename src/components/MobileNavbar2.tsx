'use client';

import useAppContext from '@/hooks/useAppContext';
import Image from 'next/image';
import Link from 'next/link';

const Logo = '/image/b.png';

const MobileNavbar2 = () => {
  const { isMenuOpen } = useAppContext();
  return (
    <div className="">
      <div>
        <AnimatedMenubar />
      </div>
      <div className={`${isMenuOpen ? '' : ''}`}>
        {isMenuOpen && <MobileMenu />}
      </div>
    </div>
  );
};

export default MobileNavbar2;

const MobileMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  return (
    <div
      className={` ${
        isMenuOpen
          ? 'duration-1000 bg-gray-200 grid grid-cols-12 gap-4 p-4 fixed bottom-16 left-0 right-0 w-full mx-auto'
          : 'w-0 h-0 duration-1000'
      }`}
    >
      <div className="col-span-4 mx-auto" onClick={() => setIsMenuOpen(false)}>
        <p className="p-3 bg-yellow-950 text-white text-center rounded-full h-10 w-10 flex justify-center items-center">
          1
        </p>
      </div>
      <div className="col-span-4 mx-auto" onClick={() => setIsMenuOpen(false)}>
        <p className="p-3 bg-yellow-950 text-white text-center rounded-full h-10 w-10 flex justify-center items-center">
          2
        </p>
      </div>
      <div className="col-span-4 mx-auto" onClick={() => setIsMenuOpen(false)}>
        <p className="p-3 bg-yellow-950 text-white text-center rounded-full h-10 w-10 flex justify-center items-center">
          3
        </p>
      </div>
      <div className="col-span-4 mx-auto" onClick={() => setIsMenuOpen(false)}>
        <p className="p-3 bg-yellow-950 text-white text-center rounded-full h-10 w-10 flex justify-center items-center">
          4
        </p>
      </div>
      <div className="col-span-4 mx-auto" onClick={() => setIsMenuOpen(false)}>
        <p className="p-3 bg-yellow-950 text-white text-center rounded-full h-10 w-10 flex justify-center items-center">
          5
        </p>
      </div>
      <div className="col-span-4 mx-auto" onClick={() => setIsMenuOpen(false)}>
        <p className="p-3 bg-yellow-950 text-white text-center rounded-full h-10 w-10 flex justify-center items-center">
          6
        </p>
      </div>
    </div>
  );
};

const AnimatedMenubar = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  const genericHamburgerLine = `h-1 w-5 rounded-full my-1 bg-[#eb8817] transition ease transform duration-300`;
  return (
    <div
      className={`overflow-x-hidden flex justify-between items-center h-16 py-2 px-4 shadow-sm fixed bottom-0 left-0 right-0  ${
        isMenuOpen ? 'bg-gray-200' : 'bg-gray-200'
      }`}
    >
      <div
        className={`flex gap-x-1 items-center ${
          isMenuOpen ? 'hidden' : 'block'
        }`}
      >
        <Link href="/" title="Back to Home">
          <Image src={Logo} alt="logo" width={36} height={36} />
        </Link>
      </div>

      <button
        name="mobilemenu"
        aria-label="mobile menu"
        className="flex flex-col h-7 w-7  rounded justify-center items-center group fixed right-10"
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
