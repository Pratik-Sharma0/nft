import React from "react";
import { IoMdSearch } from "react-icons/io";
import { RiColorFilterLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
const Card = () => {
  return (
    <section className="mx-[5%] mt-[10%] md:mt-[5%] font-spectral">
      <div>
        <ol className="flex text-sm md:text-medium gap-5  whitespace-nowrap text-[#6a6a6a]">
          <li
            style={{ borderColor: "#e36414" }}
            className="text-black border-b-2 pb-2"
          >
            My Digital Products
          </li>
          <li>For Sale</li>
          <li>Favorities</li>
          <li>Activities</li>
          <li>Followers/Following</li>
          <li>My Shop</li>
          <li>My Communities</li>
        </ol>
        <hr className="w-[200%] lg:w-full" />
      </div>
      <div className="mt-[2.5%] relative flex w-[200%] lg:w-full">
        <input
          type="text"
          placeholder="Search by name or digital product"
          className="border-2 rounded-md py-2 px-10 lg:w-[73%] w-[50%] md:w-[75%]"
        />
        <IoMdSearch className="absolute top-3 left-3 text-2xl text-[#6a6a6a] border-r-2 pr-2" />
        <button className="bg-white text-black font-spectral px-4 py-2  rounded-md border-2 mx-4 inline ">
          <RiColorFilterLine className="inline text-[#6a6a6a]" /> Categories
        </button>
        <button className="bg-[#e36414] text-white font-spectral px-4 py-2  rounded-md  ">
          Create a Collection
        </button>
      </div>

      <div className="mt-[2.5%] lg:w-full w-[200%] flex lg:gap-[3%] gap-[15%] flex-wrap lg:flex-nowrap ">
        <div className="relative mt-5 lg:mt-0 ">
          <img
            className="absolute lg:top-2 lg:left-[84%] top-2 left-[98%]"
            src="/images/Vector 2.png"
          />
          <div className="drop-shadow-lg">
            <div
              style={{
                position: "relative", // Ensure the shadow renders properly
                clipPath: "polygon(70% 0, 100% 15%, 100% 100%, 0 100%, 0 0)",
              }}
              className="flex justify-center rounded-md bg-white lg:w-[105%] lg:h-[60vh] w-[120%] h-[45vh]  "
            >
              <div className="relative mt-5 lg:mt-0">
                <img className="mt-5 " src="/images/Card.png" alt="Card" />
                <img src="/images/video.png" className="absolute top-[25%] left-[30%]"/>
                <RiHeartFill className="absolute top-[53%] right-4 text-2xl bg-white text-[#e36414] border-2 border-white rounded-full" />  
                <h2 className="text-lg font-medium">
                  Live Above Clouds{" "}
                  <span className="text-sm text-[#6a6a6a]">#456</span>
                </h2>
                <div className="flex">
                  <img className="w-5 h-5" src="/images/Avatar.png" />
                  <span className="text-sm text-[#6a6a6a]">FantasyVideos</span>
                </div>
                <button className="bg-[#e36414] text-white font-spectral p-2 my-2 text-sm w-full rounded-md">
                  List
                </button>
                <button className="block bg-[#f5f5f5] text-black font-spectral p-2 text-sm w-full rounded-md">
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-5 lg:mt-0">
          <img
            className="absolute lg:top-2 lg:left-[84%] top-2 left-[98%]"
            src="/images/Vector 2.png"
          />
          <div className="drop-shadow-lg">
            <div
              style={{
                position: "relative", // Ensure the shadow renders properly
                clipPath: "polygon(70% 0, 100% 15%, 100% 100%, 0 100%, 0 0)",
              }}
              className="flex justify-center rounded-md bg-white lg:w-[105%] lg:h-[60vh] w-[120%] h-[45vh] "
            >
              <div className="">
                <img className="mt-5" src="/images/milk.png" alt="Card" />
                <CiHeart className="absolute top-[53%] lg:right-4 right-10 text-2xl bg-white  border-2 border-white rounded-full" />  
                <h2 className="text-lg font-medium">
                  Milk and Honey{" "}
                  <span className="text-sm text-[#6a6a6a]">#456</span>
                </h2>
                <div className="flex">
                  <img className="w-5 h-5" src="/images/Avatar.png" />
                  <span className="text-sm text-[#6a6a6a]">@Apebotman</span>
                </div>
                <button className="bg-[#e36414] text-white font-spectral p-2 my-2 text-sm w-full rounded-md">
                  List
                </button>
                <button className="block bg-[#f5f5f5] text-black font-spectral p-2 text-sm w-full rounded-md">
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-5 lg:mt-0">
          <img
            className="absolute lg:top-2 lg:left-[84%] top-2 left-[98%]"
            src="/images/Vector 2.png"
          />
          <div className="drop-shadow-lg">
            <div
              style={{
                position: "relative", 
                clipPath: "polygon(70% 0, 100% 15%, 100% 100%, 0 100%, 0 0)",
              }}
              className="flex justify-center rounded-md bg-white lg:w-[105%] lg:h-[60vh] w-[120%] h-[45vh] "
            >
              <div className="relative">
                <img className="mt-5" src="/images/bg.png" alt="Card" />
                <CiHeart className="absolute top-[53%] right-4 text-2xl bg-white  border-2 border-white rounded-full" />  
                <img src="/images/sound.png" className="absolute top-[18%] left-[25%]"/>
                <h2 className="text-lg font-medium">
                  Gratitude Audio{" "}
                  <span className="text-sm text-[#6a6a6a]">#1</span>
                </h2>
                <div className="flex">
                  <img className="w-5 h-5" src="/images/Avatar.png" />
                  <span className="text-sm text-[#6a6a6a]">@FunkyAudios</span>
                </div>
                <button className="bg-[#e36414] text-white font-spectral p-2 my-2 text-sm w-full rounded-md">
                  List
                </button>
                <button className="block bg-[#f5f5f5] text-black font-spectral p-2 text-sm w-full rounded-md">
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-5 lg:mt-0">
          <img
            className="absolute lg:top-2 lg:left-[84%] top-2 left-[98%]"
            src="/images/Vector 2.png"
          />
          <div className="drop-shadow-lg">
            <div
              style={{
                position: "relative", // Ensure the shadow renders properly
                clipPath: "polygon(70% 0, 100% 15%, 100% 100%, 0 100%, 0 0)",
              }}
              className="flex justify-center rounded-md bg-white lg:w-[105%] lg:h-[60vh] w-[120%] h-[45vh] "
            >
              <div className="">
                <img className="mt-5" src="/images/boy.png" alt="Card" />
                <CiHeart className="absolute top-[53%] lg:right-4 right-10  text-2xl bg-white  border-2 border-white rounded-full" />  
                <h2 className="text-lg font-medium">
                  Realistic Character{" "}
                  <span className="text-sm text-[#6a6a6a]">#345</span>
                </h2>
                <div className="flex">
                  <img className="w-5 h-5" src="/images/Avatar.png" />
                  <span className="text-sm text-[#6a6a6a]">@3dassetsshop</span>
                </div>
                <button className="bg-[#e36414] text-white font-spectral p-2 my-2 text-sm w-full rounded-md">
                  List
                </button>
                <button className="block bg-[#f5f5f5] text-black font-spectral p-2 text-sm w-full rounded-md">
                  Transfer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
