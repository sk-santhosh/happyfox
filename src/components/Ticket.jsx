import React, { Component } from "react";
import { connect } from "react-redux";
import { viewTicket, closeTicket } from "../redux/Tickets/actions";
import DropDown from "./DropDown";
import Star from "./Star";
import UserDropDown from "./UserDropDown";

class Ticket extends Component {
  render() {
    const { ticket } = this.props;
    return (
      <div className="relative mb-5">
        <div className=" bg-white ml-10 rounded-lg border-2 hover:border-blue-600 h-full shadow-xl">
          <div
            className="h-20 flex relative cursor-pointer"
            onClick={() =>
              console.log("View Ticket", this.props.viewTicket(ticket.id))
            }
          >
            <span className="absolute right-0 top-0 mr-3 mt-3">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
            </span>
            <div className="w-36 flex flex-col mr-3 my-auto text-center">
              <span className="text-xs">#SLIP000000002</span>
              <span className="py-1 bg-yellow-600 text-white my-1 rounded-r-sm text-sm">
                OPEN
              </span>
            </div>
            <div className="p-2 my-auto">
              <div className="flex items-center">
                <h4 className="text-lg font-bold">{ticket.title}</h4>
                <span className="mx-1">(6)</span>
                <span className="text-xs">21 hours ago</span>
              </div>
              <p>{ticket.body}</p>
            </div>
          </div>
          <div className="h-12 bg-gray-100 flex items-center divide-x divide-gray-400 rounded-b-md">
            <div className="flex divide-x divide-gray-400 w-min">
              <Star star={ticket.star} />
              <Star star={ticket.star} />
              <span>
                <svg
                  className="w-6 mx-3 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
            <UserDropDown type="assignee" user={ticket.assignee} />
            <UserDropDown type="raised by" user={ticket.raised_by} />
            <DropDown
              type="priority"
              list={[
                { name: "Low", color: "green-600" },
                { name: "Medium", color: "blue-600" },
                { name: "High", color: "yellow-600" },
                { name: "Critical", color: "red-600" },
              ]}
            />
            <DropDown
              type="category"
              list={[
                { name: "Billing & Return", color: "black" },
                { name: "Marketing", color: "black" },
                { name: "Sales", color: "black" },
                { name: "Support", color: "black" },
              ]}
            />
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewTicket: (id) => dispatch(viewTicket(id)),
  };
};

export default connect(null, mapDispatchToProps)(Ticket);
