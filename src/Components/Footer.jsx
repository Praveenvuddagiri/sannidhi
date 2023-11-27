import React from 'react';

const Footer = () => {
    return (
        <footer id="footer" className="footer bg-black bg-opacity-[90%] text-white">

            <div className="container footer-top">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {/* Logo Section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 ml-8 mb-6 mt-9">
                        <div className="footer-logo">
                            <a href="index.html" className="logo d-flex text-md-start">
                                <img className="w-[134px] mb-3" src="https://res.cloudinary.com/dagmm478n/image/upload/v1699608917/INA%20SANNIDI/Group-1_jjr80d.png" alt="Claybind Logo" />
                            </a>
                            <p className="text-white flex-start leading-[25px]">Sannidhi Group boasts a rich legacy of more than two decades in the
                                realm of building and property
                                development. As one of the fastest
                                -growing real estate developers and
                                we have carved a distinctive niche in
                                the industry. </p>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-lg-3 col-md-12 md:col-span-1 lg:col-span-1 mb-6 mt-9">
                        <div className="footer-linksbg-black bg-opacity-[90%] p-4 rounded-md">
                            <h4 className="text-red-500 mb-4">Quick Links</h4>
                            <ul className="text-white leading-[25px]">
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Videos</li>
                                <li>Gallery</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms of use</li>
                            </ul>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="col-lg-3 col-md-12 md:col-span-1 lg:col-span-1 mb-6 mt-9">
                        <div className="footer-linksbg-black bg-opacity-[90%] p-4 rounded-md">
                            <h4 className="text-red-500 mb-4">Projects</h4>
                            <ul className="text-white">
                                <li >Ongoing Projects</li>
                                <li>Upcoming Projects</li>
                                <li>Completed Projects</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="col-lg-3 col-md-12 footer-contact  text-md-start mt-9">
                        <div className="footer-linksbg-black bg-opacity-[90%] p-4 rounded-md">
                            <h4 className="text-red-500 mb-4">Contact info</h4>
                            <p className="mb-4 text-white"><strong>Email:</strong> info@sannidhigroup.com</p>
                            <p className="mb-4 text-white"><strong>Phone:</strong> +91 9963029215</p>
                            <p className="mb-4 text-white"><strong>Address:</strong> CO-07, Sannidhi Group, Block C, Indu Fortune Fields. THE ANNEXE, Phase 13, KPHB Colony. Hyderabad – 500085.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Social Media Icons */}
            <div className="container mt-4 flex justify-center items-center">
                <a href="#" className="text-red-500 mr-4"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-red-500 mr-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-red-500 mr-4"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-red-500"><i className="bi bi-linkedin"></i></a>
            </div>

            {/* Copyright Section */}
            <div className="container-fluid copyright text-center mt-4 bg-black bg-opacity-[90%]">
                <p>&copy; <span>Copyright</span> <strong className="px-1 text-red-500">Claybind</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                    {/* Credits content goes here */}
                </div>
            </div>

        </footer>
    );
}

export default Footer;
