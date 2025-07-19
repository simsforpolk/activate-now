import React from 'react';

const sampleEvents = [
  { id: 1, title: 'Town Hall Meeting', date: '2025-07-25', location: 'Lakeland, FL' },
  { id: 2, title: 'Education Roundtable', date: '2025-07-30', location: 'Zoom' }
];

export default function Events() {
  return (
    <div>
      <h2>Upcoming Events</h2>
      {sampleEvents.map(event => (
        <div key={event.id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <button>RSVP</button>
        </div>
      ))}
    </div>
  );
}