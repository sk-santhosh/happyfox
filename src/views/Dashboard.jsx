import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import TopBar from "../components/TopBar";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="fixed h-12 bg-gray-800 w-full z-10 text-white">
          <TopBar />
        </div>
        <div className="w-64 mt-12 min-h-screen fixed text-white bg-gray-600 text-sm">
          <SideMenu />
        </div>
      </div>
    );
  }
}
