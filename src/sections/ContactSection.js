function ContactSection() {
    return (
        <div className="w-full flex flex-col justify-center items-center px-6 md:px-10 lg:px-20 py-20">

            {/* Contact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
                {/* Left - Message */}
                <div className="flex flex-col">
                    {/* Section Title */}
                    <p className="font-poppins font-light text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-gray-200 to-brand-gray-100 mb-5">
                        Get in Touch
                    </p>
                    <p className="font-poppins text-brand-gray-200 text-lg mb-4">
                        We’d love to connect with you! Whether you have questions, feedback, or ideas
                        for collaboration, our team is always open to hearing from fellow innovators
                        and enthusiasts. Don’t hesitate to drop us a message — we’ll get back to you
                        as soon as we can.
                    </p>
                    <p className="font-poppins text-brand-gray-100 text-md mb-1">📧 peso-lophy@gmail.com</p>
                    <p className="font-poppins text-brand-gray-100 text-md">📍 Angeles City, Pampanga</p>
                </div>

                {/* Right - Contact Form */}
                <form className="bg-brand-velvet/60 rounded-2xl p-8 flex flex-col gap-4 shadow-lg">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg bg-brand-velvet/40 text-white placeholder-brand-gray-200 outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg bg-brand-velvet/40 text-white placeholder-brand-gray-200 outline-none"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-3 rounded-lg bg-brand-velvet/40 text-white placeholder-brand-gray-200 outline-none resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-brand-pink text-brand-velvet font-poppins font-medium py-3 rounded-xl hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactSection;