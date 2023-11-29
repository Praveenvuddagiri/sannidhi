import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-black bg-opacity-90 text-white py-16 ">
        <div className="container mx-auto w-[80%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-8 md:mb-0">
              <div className="logo">
                <h1>
                  <Link href="index.html" className="logo d-flex text-md-start">
                    <Image
                      className="w-[134px] mb-3"
                      src="https://res.cloudinary.com/dagmm478n/image/upload/v1699608917/INA%20SANNIDI/Group-1_jjr80d.png"
                      alt="Claybind Logo"
                      height={600}
                      width={600}
                    />
                  </Link>
                </h1>
                <p className="mt-4" itemprop="description">
                Sannidhi Group boasts a rich legacy of more than two decades in
                the realm of building and property development. As one of the
                fastest-growing real estate developers, we have carved a
                distinctive niche in the industry.
              </p>
              </div>
              
              <div className="social2 mt-4 flex">
                <Link
                  className="brd-rd50 mr-2"
                  href="#"
                  title="Facebook"
                  target="_blank"
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="brd-rd50 mr-2"
                  href="#"
                  title="insta"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  className="brd-rd50 mr-2"
                  href="#"
                  title="Twitter"
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
                <Link
                  className="brd-rd50"
                  href="#"
                  title="youtube"
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
            <div>
              <div
                className="widget information_links wow fadeIn ml-6"
                data-wow-delay="0.2s"
              >
                <h4
                  className="widget-title text-red-500 text-red- mb-5 mt-9"
                  itemprop="headline"
                >
                  Quick Links
                </h4>
                <ul>
                  <li>
                    <Link href="#" title="" itemprop="url">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" title="" itemprop="url">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" title="" itemprop="url">
                      Videos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" title="" itemprop="url">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="#" title="" itemprop="url">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" title="" itemprop="url">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" title="" itemprop="url">
                      Terms of use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div
                className="widget customer_care wow fadeIn "
                data-wow-delay="0.3s"
              >
                <h4
                  className="widget-title text-red-500 mb-5 mt-9"
                  itemprop="headline "
                >
                  Projects
                </h4>
                <ul>
                  <li>
                    <Link href="#" title="" itemprop="url">
                      On going Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#" title="" itemprop="url">
                      Upcoming Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="#" title="" itemprop="url">
                      Completed Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div
                className="widget get_in_touch wow fadeIn "
                data-wow-delay="0.4s"
              >
                <h4
                  className="widget-title text-red-500 mb-5 mt-9"
                  itemprop="headline"
                >
                  Contact Info
                </h4>
                <ul>
                  <li>
                    <i className="fa fa-phone"></i> Phone: +91 9963029215
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>{" "}
                    Email:info@sannidhigroup.com
                  </li>
                  <li>
                    <i className="fa fa-map-marker"></i> Address: CO-07,
                    Sannidhi Group, Block C, Indu Fortune Fields. THE ANNEXE,
                    Phase 13, KPHB Colony. Hyderabad – 500085.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bottom-bar dark-bg text-center ">
        <p className="text-white bg-black" itemprop="description">
          <Link
            className="text-white-500 "
            href="http://webinane.com/"
            title="Webinane"
            itemprop="url"
            target="_blank"
          >
            © 2023 Sannidhi Group. All rights reserved.
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
