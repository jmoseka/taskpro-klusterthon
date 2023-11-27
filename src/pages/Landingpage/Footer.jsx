import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-veryGreen py-6 px-5 lg:px-20 text-white ">
      <div className="flex flex-col md:flex md:flex-row md:justify-between gap-6 md:items-start pb-12">
      <div>
        <img src="assets/BizHubLogo.png" alt="BizHub Logo" className="w-56" />
        <Link to='/signin'>Log in</Link>
      </div>
      <div className="w-48 maj">
        <h4>About BizHub</h4>
        <p>What&apos;s behind the boards</p>
      </div>
      <div className="w-48 maj">
        <h4>Jobs</h4>
        <p>Learn about open roles on BizHub Team</p>
      </div>
      <div className="w-48 maj">
        <h4>
            Apps
        </h4>
        <p>Download the BizHub App for your Desktop</p>
      </div>
      <div className="w-48 maj">
        <h4>
            Contact us
        </h4>
        <p>Need anything? Get in touch and we can help</p>
      </div>
      </div>
      <hr className="border-2 opacity-30" />
      <section className="md:flex  mt-4 items-center">
        <div className="md:flex gap-5 items-center md:w-3/4" >
            <select name="" id="" className="bg-transparent">
                <option value="" className="flex items-center">
                    <img src="assets/Geography.png" alt="Geography" />
                    English
                </option>
            </select>
            <div className="text-sm"><Link>Privacy policy</Link></div>
            <div className="py-2 text-sm"><Link >Terms</Link></div>
            <div><Link>Cookie Settings</Link></div>
            <div className="py-2"><Link >Copyright &copy; {new Date().getFullYear()} BizHub </Link></div>
        </div>
        <div className="flex items-center gap-5">
        <img src="assets/ig.svg" alt="BizHub Instagram" className="w-8 ig cursor-pointer"/>
        <img src="assets/in.svg" alt="" className="w-8 in cursor-pointer" />
        <img src="assets/fb.svg" alt="BizHub png" className="w-8 icon fb cursor-pointer" />
        <img src="assets/youtube.svg" alt="BizHub Youtube" className="w-8 yt cursor-pointer"/>
        <img src="assets/twitter.svg" alt="Bizhub Twitter" className="w-8 twit cursor-pointer" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
