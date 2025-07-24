// src/components/Causes.jsx
import React from "react";

const CauseCard = ({ img, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Causes = () => {
  const causesData = [
    {
      img: "/assets/images/cause-food.jpg",
      title: "Healthy Food",
      description:
        "Improving well-being by providing nutritious food to individuals and communities in need.",
    },
    {
      img: "/assets/images/cause-edu.jpg",
      title: "Primary Education",
      description:
        "Empowering children with the knowledge and skills they need for a brighter future.",
    },
    {
      img: "/assets/images/cause-trees.jpg",
      title: "Tree Plantation",
      description:
        "Fostering a greener and healthier ecosystem for future generations through community engagement.",
    },
  ];

  return (
    <section id="causes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">What We Do</h2>
          <p className="text-lg text-gray-600 mt-2">
            Causes for a Sustainable Future
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causesData.map((cause) => (
            <CauseCard key={cause.title} {...cause} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;
