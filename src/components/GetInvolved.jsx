import React from "react";

const Involved = () => {
  return (
    <section id="involved" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Get Involved</h2>
            <p className="text-lg text-gray-600 mt-4 mb-6">
              Seize the opportunity to gain invaluable experience and jumpstart
              your career with our Internship and Mentorship Programs. Join us
              to make a difference.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800">Apply Now</h3>
            <p className="text-gray-600 mt-2">
              Fill out the form to express your interest in our volunteer and
              internship programs. We'll get back to you soon!
            </p>
          </div>
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tell us why you want to join..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Involved;
