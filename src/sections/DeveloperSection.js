import Dev1Photo from "../assets/dev_photo_1.jpg"
import Dev2Photo from "../assets/dev_photo_2.jpg"
import Dev3Photo from "../assets/dev_photo_3.jpg"
import Dev4Photo from "../assets/dev_photo_4.jpg"

function DeveloperSection() {
    return (
        <div className="w-full flex flex-col justify-center items-center px-6 md:px-10 py-16">
            {/* Section Title */}
            <p className="font-poppins font-light text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-gray-200 to-brand-gray-100 mb-8">
                Developers
            </p>

            {/* Developer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
                
                {/* Developer 1 */}
                <div className="bg-brand-velvet/60 rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
                    <img src={Dev1Photo} alt="Developer 1" className="w-32 h-32 object-cover rounded-full mb-4" />
                    <p className="font-poppins text-white text-2xl">Sean Simone Almendral</p>
                    <p className="font-poppins text-brand-gray-200 text-lg">AI/ML Engineer</p>
                </div>

                {/* Developer 2 */}
                <div className="bg-brand-velvet/60 rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
                    <img src={Dev2Photo} alt="Developer 2" className="w-32 h-32 object-cover rounded-full mb-4" />
                    <p className="font-poppins text-white text-2xl">Joaquin Galang</p>
                    <p className="font-poppins text-brand-gray-200 text-lg">Fullstack Developer</p>
                </div>

                {/* Developer 3 */}
                <div className="bg-brand-velvet/60 rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
                    <img src={Dev3Photo} alt="Developer 3" className="w-32 h-32 object-cover rounded-full mb-4" />
                    <p className="font-poppins text-white text-2xl">Angelica Mae Tadique</p>
                    <p className="font-poppins text-brand-gray-200 text-lg">UI/UX Designer</p>
                </div>

                {/* Developer 4 */}
                <div className="bg-brand-velvet/60 rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 transform hover:scale-105">
                    <img src={Dev4Photo} alt="Developer 4" className="w-32 h-32 object-cover rounded-full mb-4" />
                    <p className="font-poppins text-white text-2xl">Eya Isabel Yalung</p>
                    <p className="font-poppins text-brand-gray-200 text-lg">UI/UX Designer</p>
                </div>

            </div>
        </div>
    );
}

export default DeveloperSection;