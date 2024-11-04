import React from 'react';
import Column from './Column';

function KanbanBoard({ tickets, groupBy, sortBy }) {
  const groupedTickets = groupTickets(tickets, groupBy, sortBy);

  function groupTickets(tickets, groupBy, sortBy) {
    const groups = {};

    tickets.forEach((ticket) => {
      const groupKey = ticket[groupBy];
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(ticket);
    });

    for (let key in groups) {
      groups[key].sort((a, b) => {
        if (sortBy === 'priority') {
          return b.priority - a.priority;
        } else if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    }

    return groups;
  }

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((groupKey) => (
        <Column key={groupKey} title={groupKey} tickets={groupedTickets[groupKey]} />
      ))}
    </div>
  );
}

export default KanbanBoard;
