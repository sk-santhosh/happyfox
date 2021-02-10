import React, { Component } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

import Card from "./Card";

class Group extends Component {
  render() {
    const group_index = this.props.index;
    const { group, index } = this.props;

    console.log(group);
    return (
      <Draggable draggableId={`group:${index}`} index={index} type="group">
        {({ innerRef, draggableProps, dragHandleProps }) => (
          <div
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}
            className="w-96 min-h-full bg-gray-100 rounded shadow-md relative"
          >
            <div
              className="w-full h-full grid grid-rows-2"
              style={{ gridTemplateRows: "2.6em 1fr" }}
            >
              <div className="p-2 my-auto">
                <span>{group.title}</span>
              </div>
              <div className="overflow-y-scroll">
                <Droppable
                  droppableId={`card:${this.props.index}`}
                  direction="vertical"
                  type="card"
                >
                  {(provided) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="space-y-2 w-full relative mb-5"
                      >
                        {group.items.map((value, index) => (
                          <Card
                            key={index}
                            group_index={group_index}
                            index={index}
                            value={value}
                            color={group.color}
                          />
                        ))}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  }
}

export default Group;
