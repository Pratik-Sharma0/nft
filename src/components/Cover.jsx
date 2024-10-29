import React from "react";
import { TbHexagonLetterC } from "react-icons/tb";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiFillTikTok } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineShare } from "react-icons/hi";

const Cover = () => {
  return (
    <>
      <section className="mt-[10%] md:mt-[2%] md:mx-[5%] relative ">
        <img src="/images/Rectangle.png" alt="rectangle" className="absolute" />
        <img
          src="/images/cover.png"
          alt="cover"
          className="max-w-[200%] h-[28vh] lg:w-full lg:h-[32vh]"
        />
        <img
          src="/images/Avatar.png"
          alt="profile"
          className="absolute top-[65%] md:top-[65%] lg:top-[65%] left-[10%] lg:left-[5%]"
        />
        <img
          src="/images/camera.png"
          alt="camera"
          className="absolute lg:top-[110%] top-[104%] md:left-[25%] md:top-[100%] left-[37%] lg:left-[14.3%]"
        />
        <button
          className="absolute top-[110%]  right-[-90%] md:right-[-100%] lg:right-[0%] px-6 py-2 font-spectral rounded-md"
          style={{ background: "#f5f5f5" }}
        >
          Give Feedback
        </button>
      </section>
      <section
        style={{ background: "#fefaf5" }}
        className="mt-[25%] md:mt-[15%] lg:mt-[8%] w-[200%] md:w-[180%] h-[28vh] md:h-[20vh]  md:mx-[5%] lg:h-[32vh] lg:w-[90%]"
      >
        <div className="flex items-center gap-3 px-4 py-2">
          <span className="font-spectral text-xl">Modern Crafters</span>
          <TbHexagonLetterC className="text-[#e36414] text-xl " />
          <RiVerifiedBadgeFill className="text-[#e36414] text-xl" />
          <button className="bg-[#b34e10] text-white font-spectral px-2 text-sm rounded-md">
            Top Seller
          </button>
        </div>
        <div className="md:flex md:justify-between items-center px-4 font-spectral">
          <div className="flex gap-2 mb-4 md:mb-0 md:order-last">
            <button className="bg-[#e36414] text-white font-spectral px-4 py-2 text-sm rounded-md">
              0x0000...0000&nbsp;
              <IoCopyOutline className="text-white inline" />
            </button>
            <button className="bg-[#6a6a6a] text-white font-spectral px-4 py-2 text-sm rounded-md">
              <TbPencilMinus className="text-white inline" />
              &nbsp;Edit
            </button>
            <button className="bg-[#6a6a6a] text-white font-spectral px-4 py-2 text-sm rounded-md">
              <HiOutlineShare className="text-white inline text-xl" />
            </button>
          </div>

          <div className="flex md:flex-row md:items-center md:gap-3 gap-1">
            <span className="text-[#6a6a6a] text-sm">@username.mergez</span>
            <span className="text-[#6a6a6a] text-sm">•</span>
            <span>
              <span className="text-[#6a6a6a] text-sm">Country:</span>
              <span className="text-sm whitespace-nowrap"> United States of America</span>
            </span>
            <span className="text-[#6a6a6a] text-sm">•</span>
            <span className="text-[#6a6a6a] text-sm">
              Interests:
              <span className="text-sm text-black whitespace-nowrap ">
                {" "}
                Playing Game, Traveling
              </span>
            </span>
            <span className="text-[#6a6a6a] text-sm">•</span>
            <span className="flex gap-1">
              <FaSquareInstagram className="text-[#e36414] text-xl" />
              <FaYoutubeSquare className="text-[#e36414] text-xl" />
              <FaSquareXTwitter className="text-[#e36414] text-xl" />
              <RiFacebookBoxFill className="text-[#e36414] text-xl" />
              <AiFillTikTok className="text-[#e36414] text-xl" />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 font-spectral mb-2">
          <span>
            <span className="text-[#6a6a6a] text-sm">Followers:</span>
            <span className="text-sm"> 243</span>
          </span>
          <span className="text-[#6a6a6a] text-sm">•</span>
          <span>
            <span className="text-[#6a6a6a] text-sm">Following:</span>
            <span className="text-sm"> 637</span>
          </span>
          <span className="text-[#6a6a6a] text-sm">•</span>
          <span className="text-[#6a6a6a] text-sm">
            Joining Date:
            <span className="text-sm text-black"> Aug,2020</span>
          </span>
        </div>
        <p className="font-spectral px-4 text-[#6a6a6a]">
          Introducing a set of 10,000 feature-rich, utility-based PFPs, each
          boasting an array of distinct and rare characteristics. Beyond their
          uniqueness, This collection grants you exclusive access to a
          members-only club, along with incremental perks for long-term holders.
          We've termed this process 'nesting' – a nod to the growing value and
          community benefits over time.
        </p>
      </section>
    </>
  );
};

export default Cover;
