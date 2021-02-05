import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import Tickets from "../components/Tickets";
import TicketView from "../components/TicketView";
import TopBar from "../components/TopBar";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="fixed h-12 bg-gray-800 w-full z-10 text-white">
          <TopBar />
        </div>
        <div
          className="pt-12 grid"
          style={{ gridTemplateColumns: "260px 1fr" }}
        >
          <div>
            <SideMenu />
          </div>
          <div className="w-full relative">
            <Tickets />
            <TicketView />
          </div>
        </div>
      </div>
    );
  }
}
