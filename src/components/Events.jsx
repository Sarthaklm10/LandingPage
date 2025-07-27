
import React from "react";
import eventImage from "../assets/images/3.avif";

const eventsData = [
    {
        title: "Tree Plantation Drive",
        description: "Join us for a tree plantation drive to make our environment greener and healthier. We will be planting over 1000 saplings in the local community."
    },
    {
        title: "Free Health Check-up Camp",
        description: "We are organizing a free health check-up camp for the underprivileged. Come and get yourself checked by our team of expert doctors."
    }
]

const Events = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Upcoming Events</h2>
          <p className="text-lg text-gray-600 mt-2">
            Join us in our upcoming events and be a part of the change.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <img
              src={eventImage}
              alt="Event"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            {eventsData.map(event => (
                <div key={event.title}>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {event.description}
                    </p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
