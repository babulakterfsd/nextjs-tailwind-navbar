'use client';
import React from 'react';
import NavBar from './Navbar';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <div className="mt-6 md:mt-24 px-4">{children}</div>
      </div>
      <div className="col-span-12 md:col-span-1 md:flex md:justify-center items-center order-first md:order-last z-50">
        <NavBar />
      </div>
    </div>
  );
};

export default ClientLayout;
