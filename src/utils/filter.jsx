import { getStatusIcon } from "./getStatusIcon";
import { getPriorityIcon } from "./getPriorityIcon";
import { getAvatar } from "./avatar";

export default function filterData(data, displayState) {
  if (displayState.grouping === "status") {
    const statuses = ["Backlog", "Todo", "In progress", "Done", "Canceled"];
    if (displayState.ordering === "priority") {
      const sortedTickets = statuses.map((status) => {
        return {
          name: status,
          icon: getStatusIcon(status),
          tickets: data.tickets
            .filter((ticket) => ticket.status === status)
            .sort((a, b) => b.priority - a.priority),
        };
      });
      return sortedTickets;
    } else {
      const sortedTickets = statuses.map((status) => {
        return {
          name: status,
          icon: getStatusIcon(status),
          tickets: data.tickets
            .filter((ticket) => ticket.status === status)
            .sort((a, b) => a.title.localeCompare(b.title)),
        };
      });
      return sortedTickets;
    }
  } else if (displayState.grouping === "user") {
    if (displayState.ordering === "priority") {
      const sortedTickets = data.users.map((user) => {
        return {
          name: user.name,
          available: user.available,
          icon: (
            <img
              src={getAvatar(user.id)}
              style={{ borderRadius: "50%" }}
              alt={user.name}
              width={30}
              height={30}
            />
          ),
          tickets: data.tickets
            .filter((ticket) => ticket.userId === user.id)
            .sort((a, b) => b.priority - a.priority),
        };
      });
      return sortedTickets;
    } else {
      const sortedTickets = data.users.map((user) => {
        return {
          name: user.name,
          available: user.available,
          icon: (
            <img
              src={getAvatar(user.id)}
              style={{ borderRadius: "50%" }}
              alt={user.name}
              width={30}
              height={30}
            />
          ),
          tickets: data.tickets
            .filter((ticket) => ticket.userId === user.id)
            .sort((a, b) => a.title.localeCompare(b.title)),
        };
      });
      return sortedTickets;
    }
  } else {
    const priorityNames = ["No priority", "Low", "Medium", "High", "Urgent"];
    const priorityArrays = [[], [], [], [], []];
    data.tickets.forEach((ticket) => {
      priorityArrays[ticket.priority].push(ticket);
    });
    priorityArrays.forEach((array) => {
      array.sort((a, b) => a.title.localeCompare(b.title));
    });
    const sortedTickets = priorityArrays.map((tickets, index) => {
      return {
        name: priorityNames[index],
        icon: getPriorityIcon(index),
        tickets: tickets,
      };
    });
    return sortedTickets;
  }
}
