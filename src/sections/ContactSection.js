import { useState } from 'react';
import { supabase } from '../supabaseClient.js'; 
import emailjs from '@emailjs/browser';

function ContactSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    
    const emailjs_service = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const emailjs_template = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const emailjs_public = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        setIsSubmitting(true);
        setFeedbackMessage('');

        try {
            const { error: supabaseError } = await supabase
                .from('message')
                .insert([{ name, email, message }]);

            if (supabaseError) {
                throw new Error(`Supabase error: ${supabaseError.message}`);
            }
            const templateParams = {
                name: name,
                email: email,
                message: message,
            };
            await emailjs.send(
                emailjs_service,
                emailjs_template,
                templateParams,
                emailjs_public
            );

            setFeedbackMessage('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');

        } catch (error) {
            console.error('Error submitting form:', error);
            setFeedbackMessage('Failed to send message. Please try again.');
        } finally {
            setTimeout(() => {
                setIsSubmitting(false);
                setFeedbackMessage('');
            }, 3000);
        }
    };
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
                <form onSubmit={handleSubmit} className="bg-brand-velvet/60 rounded-2xl p-8 flex flex-col gap-4 shadow-lg">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-brand-velvet/40 text-white placeholder-brand-gray-200 outline-none focus:ring-2 focus:ring-brand-pink"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-brand-velvet/40 text-white placeholder-brand-gray-200 outline-none focus:ring-2 focus:ring-brand-pink"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full p-3 rounded-lg bg-brand-velvet/40 text-white placeholder-brand-gray-200 outline-none resize-none focus:ring-2 focus:ring-brand-pink"
                    ></textarea>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-brand-pink text-brand-velvet font-poppins font-medium py-3 rounded-xl hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                    {feedbackMessage && (
                        <p className={`text-center font-poppins mt-2 ${feedbackMessage.includes('Failed') ? 'text-red-400' : 'text-green-400'}`}>
                            {feedbackMessage}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ContactSection;

