import React, { Component } from "react";
import { connect } from "react-redux";
import { closeTicket } from "../redux/Tickets/actions";
import UserDropDown from "./UserDropDown";

class TicketView extends Component {
  state = {
    open: false,
    ticket: null,
  };

  componentDidUpdate(preProps) {
    if (
      (!this.state.open && this.props.ticket !== null) ||
      (this.props.ticket !== null &&
        preProps.ticket &&
        this.props.ticket.id !== preProps.ticket.id)
    ) {
      this.setState({ open: true, ticket: this.props.ticket });
    } else if (this.state.open && this.props.ticket === null) {
      this.setState({ open: false, ticket: null });
    }
  }

  render() {
    const { ticket } = this.state;

    console.log(ticket);
    return (
      <div
        className={`${
          this.state.open ? "" : "hidden"
        } bg-gray-200 absolute w-3/6 h-screen shadow-2xl right-0 -top-12`}
      >
        <div className="mt-12 relative">
          <button
            className="m-auto p-2 text-white absolute -left-10 w-10 bg-gray-600"
            onClick={() => this.props.closeTicket()}
          >
            <svg
              className="w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {ticket === null ? (
            <div className="flex justify-center items-center">Loading...</div>
          ) : (
            <div className="w-full">
              <div className="bg-white p-2">
                <UserDropDown user={ticket.assignee} type="assignee" />
              </div>
              <div className="m-2 shadow-xl rounded bg-gray-100 h-44">
                <h3 className="text-center font-bold mt-2 bg-white p-2 rounded-t">
                  {ticket.title}
                </h3>
                <p className="m-2">{ticket.body}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ticketsReducer }) => {
  return {
    ticket: ticketsReducer.ticket,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeTicket: () => dispatch(closeTicket()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketView);
