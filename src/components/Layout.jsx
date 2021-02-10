import React, { Component, Fragment } from "react";
import SideMenu from "./SideMenu";
import TopBar from "./TopBar";

export default class Layout extends Component {
  render() {
    const ContentComponent = this.props.children;

    console.log(this);

    return (
      <div
        className="grid grid-rows-2 min-h-screen"
        style={{ gridTemplateRows: "3em 1fr" }}
      >
        <div className="h-12 bg-gray-800 text-white fixed w-full z-20">
          <TopBar />
        </div>
        <div
          className="pt-12 grid grid-cols-2 z-10 min-h-screen"
          style={{ gridTemplateColumns: "260px 1fr" }}
        >
          <div className="z-10">
            <SideMenu />
          </div>
          <div className="relative z-0">{ContentComponent}</div>
        </div>
      </div>
    );
  }
}
