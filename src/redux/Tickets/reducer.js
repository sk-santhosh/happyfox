import {
  GET_TICKETS,
  GET_TICKET,
  CLEAR_TICKET_VIEW,
  FETCH_TICKETS,
} from "./types";
import { tickets } from "../initialState";

export const ticketsReducer = (state = tickets, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      return { ...state, tickets: action.tickets };

    case GET_TICKETS:
      return state;

    case GET_TICKET: {
      console.log(state);
      let ticket = state.tickets.find((ticket) => ticket.id === action.id);
      return { ...state, ticket: ticket };
    }

    case CLEAR_TICKET_VIEW: {
      return { ...state, ticket: null };
    }

    default:
      return state;
  }
};
