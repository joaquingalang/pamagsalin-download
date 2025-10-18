import FlutterLogo from "../assets/flutter.png";
import SupabaseLogo from "../assets/supabase.png";
import FastApiLogo from "../assets/fast_api.svg";
import HuggingFaceLogo from "../assets/huggingface.svg";

function TechSection() {
    return (
        <div className="w-full flex flex-col justify-center items-center px-6 mt-10 md:px-10 lg:px-0">
            {/* Section Title */}
            <p className="font-poppins font-light text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-gray-200 to-brand-gray-100 mb-8">
                Tech Stack
            </p>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
                
                {/* Flutter */}
                <div className="bg-brand-velvet/60 rounded-2xl flex items-center py-3 px-5 transition-transform duration-300 hover:scale-110">
                    <img src={FlutterLogo} className="w-[3rem] lg:mr-3" />
                    <p className="hidden lg:flex font-poppins text-white text-3xl">Flutter</p>
                </div>

                {/* Supabase */}
                <div className="bg-brand-velvet/60 rounded-2xl flex items-center py-3 px-5 transition-transform duration-300 hover:scale-110">
                    <img src={SupabaseLogo} className="w-[3rem] lg:mr-3" />
                    <p className="hidden lg:flex font-poppins text-white text-3xl">Supabase</p>
                </div>

                {/* Hugging Face */}
                <div className="bg-brand-velvet/60 rounded-2xl flex items-center py-3 px-5 transition-transform duration-300 hover:scale-110">
                    <img src={HuggingFaceLogo} className="w-[3rem] lg:mr-3" />
                    <p className="hidden lg:flex font-poppins text-white text-3xl">Hugging Face</p>
                </div>

                {/* FastAPI */}
                <div className="bg-brand-velvet/60 rounded-2xl flex items-center py-3 px-5 transition-transform duration-300 hover:scale-110">
                    <img src={FastApiLogo} className="w-[3rem] lg:mr-3" />
                    <p className="hidden lg:flex font-poppins text-white text-3xl">FastAPI</p>
                </div>

            </div>
        </div>
    );
}

export default TechSection;
