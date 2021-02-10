import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import KanboardComponent from "../components/Kanboard/Kanboard";
import TicketView from "../components/TicketView";
import { fetchTickets } from "../redux/Tickets/actions";

class Kanboard extends Component {
  async componentDidMount() {
    let tickets = await axios.get("/dummy.json");
    this.props.fetchTickets(tickets.data.tickets);
  }

  render() {
    return (
      <div>
        <KanboardComponent />
        <TicketView />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTickets: (tickets) => dispatch(fetchTickets(tickets)),
  };
};

export default connect(null, mapDispatchToProps)(Kanboard);
