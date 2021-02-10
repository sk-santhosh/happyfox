import React, { Component } from "react";
import Group from "./Group";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { config } from "../../assets/config";
import axios from "axios";
import arrayMove from "array-move";

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class Kanboard extends Component {
  state = {
    groups: [],
  };

  async componentDidMount() {
    const tickets = await axios.get("/dummy.json");

    let list = [];
    console.log(tickets.data.tickets);
    config.status.map((i) => {
      list[i.id] = {
        title: i.name,
        color: i.color2,
        items:
          tickets.data.tickets.filter((ticket) => ticket.status == i.id) || [],
      };
    });

    this.setState({ groups: list });
  }

  onDragEnd({ type, source, destination }) {
    console.log("end", type, source, destination);

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === "group" &&
      source.droppableId === destination.droppableId
    ) {
      let groups = arrayMove(
        this.state.groups,
        source.index,
        destination.index
      );
      this.setState({
        groups: groups,
      });
    } else {
      if (source.droppableId === destination.droppableId) {
        let items = arrayMove(
          this.state.groups[source.droppableId.replace("card:", "")].items,
          source.index,
          destination.index
        );

        let g = this.state.groups;
        g[source.droppableId.replace("card:", "")].items = items;

        this.setState({
          groups: g,
        });
      } else {
        const result = move(
          this.state.groups[source.droppableId.replace("card:", "")].items,
          this.state.groups[destination.droppableId.replace("card:", "")].items,
          source,
          destination
        );
        let g = this.state.groups;
        g[source.droppableId.replace("card:", "")].items =
          result[source.droppableId];
        g[destination.droppableId.replace("card:", "")].items =
          result[destination.droppableId];

        this.setState({
          groups: g,
        });
      }
    }
  }

  render() {
    return (
      <div
        className="w-full min-h-full absolute grid grid-rows-2"
        style={{ gridTemplateRows: "3em 1fr" }}
      >
        <h3 className="text-2xl px-4 my-auto">All Tickets</h3>
        <div className="overflow-x-auto relative">
          <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
            <Droppable
              droppableId={"group"}
              direction="horizontal"
              type="group"
            >
              {({ innerRef, droppableProps, placeholder }) => (
                <div
                  ref={innerRef}
                  {...droppableProps}
                  className="flex space-x-4 h-full p-4 absolute"
                >
                  {this.state.groups.map((kanboard_item, index) => (
                    <Group group={kanboard_item} key={index} index={index} />
                  ))}
                  {placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ticketsReducer }) => {
  return {
    tickets: ticketsReducer.tickets,
  };
};

export default connect(mapStateToProps)(Kanboard);
