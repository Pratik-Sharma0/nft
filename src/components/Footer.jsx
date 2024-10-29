import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer
        style={{ backgroundColor: "#fefaf5" }}
        className="lg:flex font-spectral lg:mt-[5%] mt-[25%] justify-around py-[3%] lg:w-[100%] w-[200%] relative"
      >
        <div className="p-10 lg:p-0">
          <img src="/images/logo.png" alt="logo" className="w-[15%]" />
          <p className="lg:mt-2 mt-[3%] text-2xl lg:text-sm">
            The first Web 3 marketplace dedicated to Buying,
            <br /> Selling and Owning utility focused Digital Products.
          </p>
          <div className="lg:hidden mt-[3%]">
            <h4 className="text-2xl font-medium mb-1 text-black">
              Join Our Community
            </h4>
            <div
              style={{ color: "#e36414" }}
              className="flex text-3xl gap-5 mt-[3%]"
            >
              <FaInstagramSquare />
              <FaYoutubeSquare />
              <FaSquareXTwitter />
              <IoLogoFacebook />
              <AiFillTikTok />
            </div>
          </div>
        </div>
        <hr
          style={{ backgroundColor: "#e98343" }}
          className="lg:hidden w-[100%]"
        />
      <div className="flex justify-around lg:w-[40%] text-2xl lg:text-sm">
        <div className="mt-[3%] lg:mt-0">
          <h4 style={{ color: "#e98343" }} className="lg:text-lg text-3xl font-medium mb-1">
            Browser
          </h4>
          <ul>
            <li className="mb-1">Marketplace</li>
            <li className="mb-1">Communities</li>
            <li className="mb-1">Shops</li>
            <li className="mb-1">Creators</li>
            <li className="mb-1">Statistics</li>
          </ul>
        </div>
        <div className="mt-[3%] lg:mt-0">
          <h4 style={{ color: "#e98343" }} className="lg:text-lg text-3xl  font-medium mb-1">
            My Account
          </h4>
          <ul>
            <li className="mb-1">My Profile</li>
            <li className="mb-1">My Wallet</li>
            <li className="mb-1">Watchlist</li>
            <li className="mb-1">Reviews</li>
            <li className="mb-1">Settings</li>
          </ul>
        </div>
        <div className="mt-[3%] lg:mt-0">
          <h4 style={{ color: "#e98343" }} className="lg:text-lg text-3xl  font-medium mb-1">
            Resources
          </h4>
          <ul>
            <li className="mb-1">About Us</li>
            <li className="mb-1">Creators</li>
            <li className="mb-1">Help Center</li>
            <li className="mb-1">Terms of Service</li>
            <li className="mb-1">Privacy Policy</li>
          </ul>
        </div>
        </div>
        <hr
          style={{ backgroundColor: "#e98343" }}
          className="lg:hidden w-[100%] my-[5%]"
        />
       <div className="lg:hidden text-center text-2xl">
         All Rights Reserved 2024 ©  Digital Marketplace  
        </div>

        <div className="hidden lg:block">
          <h4 className="text-lg font-medium mb-1 text-black">
            Join Our Community
          </h4>
          <div style={{ color: "#e36414" }} className="flex text-2xl gap-5">
            <FaInstagramSquare />
            <FaYoutubeSquare />
            <FaSquareXTwitter />
            <IoLogoFacebook />
            <AiFillTikTok />
          </div>
        </div>
        <img className="absolute md:right-4 right-2 top-[85%] md:top-[90%] lg:top-[55%]" src="/images/Frame.png" alt="chat"/>
      </footer>
    </>
  );
};

export default Footer;
