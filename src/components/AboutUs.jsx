import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            About Suvidha Foundation
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Suvidha Mahila Mandal, established on September 8, 1995
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To impart education among the financially challenged sections to
                help them realize parity in education and strength of little
                minds in building a promising future. We provide student
                internships, mentorship, and volunteer opportunities to achieve
                this.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To impart innovative education that stays with the students
                forever and equips them for the unforeseen future, creating a
                generation of empowered and knowledgeable leaders.
              </p>
            </div>
          </div>
          <div className="text-center p-8 bg-green-100 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Upcoming Event
            </h3>
            <p className="text-xl font-semibold text-gray-800">
              International Conference on AI Innovations in Engineering (ICAIIE
              - 2025)
            </p>
            <p className="text-md text-gray-600 mt-2">
              22 - 23 March 2025, Nagpur
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Organized by Research Wing, Suvidha Foundation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
