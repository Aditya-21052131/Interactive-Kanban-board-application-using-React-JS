import React from 'react';

function Card({ ticket }) {
  const priorityMap = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
      <span className="priority">Priority: {priorityMap[ticket.priority]}</span>
      <span className="user">Assigned to: {ticket.user}</span>
    </div>
  );
}

export default Card;
