import React from 'react';

export default function ContactUs() {
  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-base-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">📞 Contact Us</h1>
          <p className="text-lg text-base-content">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-base-200 p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="textarea textarea-bordered w-full"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full mt-4"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-base-200 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-base-content">Mirpur-1,Dhaka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-base-content">+8801742365218</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-primary mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-base-content">inayem98@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold mb-2">Business Hours</h3>
              <ul className="space-y-1">
                
                  <span>Everyday-</span>
                  <span>9:00 AM - 11:00 PM</span>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
