import React from 'react';

const events = [
  { date: 'October 29, 2024', event: 'Langar Seva (Community Kitchen)' },
  { date: 'November 12, 2024', event: 'Guru Nanak Birthday Celebration' },
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-white text-primary-blue">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary-orange">Upcoming Events</h2>
        <ul className="mt-8 space-y-6">
          {events.map((event, index) => (
            <li key={index} className="border-l-4 border-primary-orange p-4 shadow-lg">
              <strong>{event.date}</strong>: {event.event}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Events;
