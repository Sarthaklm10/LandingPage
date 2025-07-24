// src/components/Team.jsx
import React from "react";

const TeamMember = ({ img, name, role }) => (
  <div className="text-center">
    <img
      src={img}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
    />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-500">{role}</p>
  </div>
);

const Team = () => {
  const teamData = [
    {
      img: "/assets/images/team1.jpg",
      name: "Shobha Motghare",
      role: "Secretary",
    },
    {
      img: "/assets/images/team2.jpg",
      name: "Payal Badhe",
      role: "President",
    },
    {
      img: "/assets/images/team3.jpg",
      name: "Bharti Shendre",
      role: "Treasurer",
    },
    {
      img: "/assets/images/team4.jpg",
      name: "Nilima Kalambe",
      role: "Advisor",
    },
  ];
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mt-2">
            The passionate individuals behind our activities.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
