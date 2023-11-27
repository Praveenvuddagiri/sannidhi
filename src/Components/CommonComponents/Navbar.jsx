"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Navbar = ({ logoSrc, navLinks, buttonLabel, onButtonClick }) => {
    

  return (
    <div className="flex justify-center items-center">
        <div className="flex items-center justify-between px-4 py-6 bg-white text-[#333] w-[85%]">
      {logoSrc && <Image src={logoSrc} alt="Logo" className="h-[50px] w-auto" width={400} height={400} />}

      
      <nav>
        <ul className="flex items-center gap-12">
          {navLinks &&
            navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url} className="hover:text-gray-300 text-[16px] font-[400]">
                  {link.text}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      {buttonLabel && onButtonClick && (
        <button
          onClick={onButtonClick}
          className="text-[#3A7CBA] text-[18px] font-[600] px-4 py-2 rounded-sm border border-blue-500"
        >
          {buttonLabel}
        </button>
      )}
    </div>
    </div>
    
  );
};

export default Navbar;
