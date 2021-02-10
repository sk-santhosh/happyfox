import {
  GET_TICKETS,
  GET_TICKET,
  CLEAR_TICKET_VIEW,
  FETCH_TICKETS,
} from "./types";

export const getTickets = () => {
  return {
    type: GET_TICKETS,
  };
};

export const closeTicket = () => {
  return {
    type: CLEAR_TICKET_VIEW,
  };
};

export const viewTicket = (id) => {
  return {
    type: GET_TICKET,
    id: id,
  };
};

export const fetchTickets = (tickets) => {
  return {
    type: FETCH_TICKETS,
    tickets: tickets,
  };
};
