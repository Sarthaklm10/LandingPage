// src/components/Stats.jsx
import React from "react";

const Stats = () => {
  const stats = [
    { value: "15+", label: "Countries" },
    { value: "3 L+", label: "Volunteers" },
    { value: "1 Cr+", label: "Internship Goal" },
    { value: "54 L+", label: "Trees Planted" },
  ];

  return (
    <section className="bg-green-600 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
