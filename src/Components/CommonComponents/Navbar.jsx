
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Navbar = ({ logoSrc, navLinks, buttonLabel, buttonLink }) => {


  return (
    <div className="flex justify-center items-center ">
      <nav className="flex justify-evenly w-full">
        <div className="flex items-center justify-between py-5 bg-white text-[#333] w-[93%]">

          <Link href="/">
            <Image
              src={logoSrc}
              alt="logo"
              width={400}
              height={400}
              className="w-24"
            />
          </Link>

          <ul className="flex items-center justify-between w-[70%]">
            {navLinks &&
              navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url} className="hover:text-gray-300 text-[16px] font-[400]">
                    {link.text}
                  </Link>
                </li>
              ))}

            <div className="w-fit">
              <Link href="/contact">
                <button
                  className="text-[#3A7CBA] text-[18px] font-[600] px-6 py-2 rounded-sm border border-blue-500 w-fit"
                >
                  {buttonLabel}
                </button>
              </Link>
            </div>
          </ul>

        </div>
      </nav>
    </div>

  );
};

export default Navbar;
