import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { viewTicket } from "../../redux/Tickets/actions";
import UserDropDown from "../UserDropDown";

class Card extends Component {
  render() {
    const { group_index, index } = this.props;
    return (
      <Draggable
        draggableId={`card:${group_index}:${index}`}
        index={index}
        type="card"
      >
        {({ innerRef, draggableProps, dragHandleProps }) => (
          <div
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}
            className={`bg-white rounded shadow-md mx-2 z-30 border-b-2 border-${this.props.color}`}
          >
            <div
              className="p-2 cursor-pointer"
              onClick={() =>
                console.log(
                  "View Ticket",
                  this.props.viewTicket(this.props.value.id)
                )
              }
            >
              <h3 className="text-md">{this.props.value.title}</h3>
              <p className="text-xs">{this.props.value.body}</p>
            </div>
            <div className="bg-gray-100 h-10 rounded-b flex justify-between divide-x divide-gray-400">
              <UserDropDown type="assignee" user={this.props.value.assignee} />
              <UserDropDown type="raised" user={this.props.value.raised} />
              <span>
                <svg
                  className="w-6 mx-3 h-10"
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
          </div>
        )}
      </Draggable>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewTicket: (id) => dispatch(viewTicket(id)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
