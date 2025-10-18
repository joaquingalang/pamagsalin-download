import { useState } from "react";
import ArrowLeftIcon from "../assets/arrow_left_icon.svg";
import ArrowRightIcon from "../assets/arrow_right_icon.svg";
import PamagsalinPage1 from "../assets/pamagsalin_page_1.jpg";
import PamagsalinPage2 from "../assets/pamagsalin_page_2.jpg";
import PamagsalinPage3 from "../assets/pamagsalin_page_3.jpg";
import PamagsalinPage4 from "../assets/pamagsalin_page_4.jpg";
import PamagsalinPage5 from "../assets/pamagsalin_page_5.jpg";

function FeatureSection() {
  const [pageIndex, setPageIndex] = useState(0);
  const pages = [
    PamagsalinPage1,
    PamagsalinPage2,
    PamagsalinPage3,
    PamagsalinPage4,
    PamagsalinPage5,
  ];

  const handleLeftClick = () => {
    setPageIndex((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const handleRightClick = () => {
    setPageIndex((prev) => (prev + 1) % pages.length);
  };

  return (
    <div className="w-full flex flex-col items-center px-6 md:px-10 lg:px-0 mt-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-10 gap-8 items-center">
        {/* Left Section — Image Carousel */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <img
            src={ArrowLeftIcon}
            onClick={handleLeftClick}
            className="cursor-pointer bg-brand-velvet/60 hover:bg-brand-velvet rounded-full shadow-md shadow-black/50 p-3 sm:p-4 transition-transform hover:scale-105"
          />
          <img
            src={pages[pageIndex]}
            className="h-[18rem] sm:h-[25rem] lg:h-[30rem] border-4 rounded-xl border-brand-gray-200 mx-4 object-contain transition-transform duration-300"
          />
          <img
            src={ArrowRightIcon}
            onClick={handleRightClick}
            className="cursor-pointer bg-brand-velvet/60 hover:bg-brand-velvet rounded-full shadow-md shadow-black/50 p-3 sm:p-4 transition-transform hover:scale-105"
          />
        </div>

        {/* Right Section — Feature Text */}
        <div className="lg:col-span-6">
          <p className="font-poppins font-light text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-gray-200 to-brand-gray-100 mb-4 text-center lg:text-left">
            Features
          </p>

          <p className="font-poppins text-white text-base sm:text-lg text-center lg:text-left">
            Pamagsalin bridges the gap between Kapampangan and English with fast,
            accurate, and easy-to-use translation tools for speaking, typing, and learning.
          </p>

          {/* Feature Cards */}
          <div className="space-y-5 mt-6">
            {/* Voice Translation */}
            <div className="bg-[#211A20]/60 rounded-lg shadow-md shadow-black/50">
              <div className="py-3 px-5">
                <p className="font-poppins text-white text-lg font-semibold mb-2">
                  Voice Translation
                </p>
                <p className="font-poppins text-white text-sm">
                  Speak in Kapampangan and instantly see the English translation appear —
                  perfect for smooth, hands-free communication.
                </p>
              </div>
            </div>

            {/* Text Translation */}
            <div className="bg-[#211A20]/60 rounded-lg shadow-md shadow-black/50">
              <div className="py-3 px-5">
                <p className="font-poppins text-white text-lg font-semibold mb-2">
                  Text Translation
                </p>
                <p className="font-poppins text-white text-sm">
                  Type or paste Kapampangan text to get quick and accurate English
                  translations in real time.
                </p>
              </div>
            </div>

            {/* Dictionary */}
            <div className="bg-[#211A20]/60 rounded-lg shadow-md shadow-black/50">
              <div className="py-3 px-5">
                <p className="font-poppins text-white text-lg font-semibold mb-2">
                  Dictionary
                </p>
                <p className="font-poppins text-white text-sm">
                  Look up Kapampangan words with English meanings and clear pronunciations
                  to enhance language learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
