import AppLogo from "../assets/app_logo.svg";

function NavBar() {
  return (
    <div className="flex justify-between my-4 mx-5 top-0 z-50 bg-[#0f0d11]/80 backdrop-blur-md rounded-full p-2">
      {/* Logo */}
      <div className="h-10 bg-brand-velvet/75 rounded-full shadow-md shadow-black/50">
        <div className="h-full flex justify-center items-center mx-4">
          <img src={AppLogo} className="w-5 mr-2" />
          <p className="font-poppins text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-gray-200 to-brand-gray-100">
            Pamagsalin
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="lg:w-[30vw] md:w-[40vw] h-10 bg-brand-velvet/75 rounded-full shadow-md shadow-black/50">
        <div className="h-full flex justify-between items-center mx-8 font-poppins text-sm text-white font-light">
          <a href="#download" className="cursor-pointer hover:text-brand-pink transition-colors">
            Download
          </a>
          <a href="#features" className="cursor-pointer hover:text-brand-pink transition-colors">
            Features
          </a>
          <a href="#tech" className="cursor-pointer hover:text-brand-pink transition-colors">
            Tech
          </a>
          <a href="#developers" className="cursor-pointer hover:text-brand-pink transition-colors">
            Developers
          </a>
        </div>
      </div>

      {/* Contact Button */}
      <a
        href="#contact"
        className="h-10 bg-brand-pink rounded-full flex justify-center items-center ml-5 cursor-pointer shadow-md shadow-brand-pink/30 hover:scale-105 transition-transform"
      >
        <p className="px-4 font-poppins font-semibold text-sm">Contact Us</p>
      </a>
    </div>
  );
}

export default NavBar;
