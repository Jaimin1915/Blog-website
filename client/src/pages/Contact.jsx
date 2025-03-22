import React from 'react';

function Contact() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img src="https://cdn.dribbble.com/users/8900585/screenshots/16789091/contact_us_3_4x.jpg" alt="Illustration" className="max-w-sm" />
            </div>
            <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 md:p-8 mt-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email Address</label>
                        <input type="email" placeholder="example@domain.com" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Subject</label>
                        <input type="text" placeholder="Enter your subject" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea placeholder="Type your message" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact