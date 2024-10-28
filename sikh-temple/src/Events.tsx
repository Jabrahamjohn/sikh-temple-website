import React from 'react';

const events = [
  { date: 'October 29, 2024', event: 'Langar Seva (Community Kitchen)' },
  { date: 'November 12, 2024', event: 'Guru Nanak Birthday Celebration' },
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-white text-blue-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <ul className="mt-4 space-y-4">
          {events.map((event, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <strong>{event.date}</strong>: {event.event}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Events;
