
import React from "react";
import projectHealth from "../assets/images/4.jpg";
import projectWomen from "../assets/images/5.jpg";
import projectDisaster from "../assets/images/1.jpg";

const ProjectCard = ({ img, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Projects = () => {
  const projectsData = [
    {
      img: projectHealth,
      title: "Healthcare Camps",
      description:
        "Organizing free health check-up camps in rural areas, providing essential medical services.",
    },
    {
      img: projectWomen,
      title: "Women Empowerment",
      description:
        "Skill development programs for women to promote financial independence and self-reliance.",
    },
    {
      img: projectDisaster,
      title: "Disaster Relief",
      description:
        "Providing immediate aid and support to communities affected by natural disasters.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Projects</h2>
          <p className="text-lg text-gray-600 mt-2">
            Initiatives that are making a difference
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
