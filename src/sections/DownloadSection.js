function DownloadSection() {
    return (
        <div className="lg:w-[70vw] md:w-[80vw] h-[400px] bg-[#211A20]/60 rounded-lg m-10 shadow-md shadow-black/50 mb-10">
            <div className="h-[400px] flex flex-col justify-center items-center">

                <div className="h-8 rounded-full bg-gradient-to-b from-brand-velvet to-black/50 border-2 border-brand-pink/20 flex justify-center items-center mb-5">
                    <p className="mx-3 text-sm text-brand-gray-200 font-poppins">Download Now 🎙️</p>
                </div>
                
                <p className="text-center font-poppins font-light text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-gray-200 to-brand-gray-100 mb-5">Download Pamapgsalin <br/> on Android Today!</p>

                <p className="font-poppins text-center text-white mb-5">A real-time Kapampangan-to-English translator with voice-to-voice support. <br/> Break language barriers, preserve culture.</p>

                <div className="flex">

                    <div className="h-10 bg-brand-pink rounded-full flex justify-center items-center ml-5 cursor-pointer shadow-lg shadow-brand-pink/20">
                        <p className="px-6 font-poppins font-semibold">Download</p>
                    </div>

                    <div className="h-10 bg-transparent rounded-full flex justify-center items-center ml-5 cursor-pointer shadow-lg shadow-brand-pink/20 border-2 border-brand-pink">
                        <p className="px-6 font-poppins text-white">23+ Users</p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default DownloadSection;