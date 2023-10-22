'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import MobileNavbar2 from './MobileNavbar2';

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <div className=" text-gray-700 grid grid-cols-12 shadow-sm fixed top-0 left-0 right-0 bg-white">
      {/* mobile menu */}
      <div className=" col-span-12 bg-white md:hidden">
        <MobileNavbar2 />
      </div>
      {/* desktop menu */}
      <div className="hidden main-container md:flex items-center justify-between p-4 col-span-12 ">
        <Image
          src="/image/b.png"
          alt="logo"
          width={50}
          height={50}
          className="cursor-pointer mr-auto"
        />
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row font-semibold p-4 md:p-0 mt-4 md:space-x-4 lg:space-x-8 md:mt-0">
            <li>
              <Link
                href="/"
                className={`${
                  activePath === '/home' || activePath === '/'
                    ? 'text-primary'
                    : ''
                }  p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  activePath === '/about' ? 'text-primary' : ''
                }  p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className={`${
                  activePath === '/features' ? 'text-primary' : ''
                }  p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className={`${
                  activePath === '/pricing' ? 'text-primary' : ''
                }  p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${
                  activePath === '/blog' ? 'text-primary' : ''
                }  p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  activePath === '/contact' ? 'text-primary' : ''
                } p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
