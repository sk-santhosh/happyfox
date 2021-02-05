import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SideMenu extends Component {
  menu = [
    { name: "Pending Tickets", val: 18, url: "/pending-tickets" },
    { name: "All Tickets", val: 21, url: "/all-tickets" },
    { name: "Unresponded", val: 14, url: "/unresponded" },
    { name: "Due Today", val: "~", url: "/due-today" },
    { name: "My Tickets", val: 14, url: "/my-tickets" },
    { name: "SLA Breached", val: "~", url: "/sla-breached" },
    { name: "On Priority", val: 4, url: "/on-priority" },
  ];

  render() {
    return (
      <div
        style={{ width: "260px" }}
        className="w-auto fixed h-full bg-gray-500 text-sm text-white"
      >
        <div className="pt-5 pl-7 pr-5 pb-4 flex justify-between">
          <div className="flex">
            <span className="uppercase font-bold mr-1">queues</span>
            <span>
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
          </div>
          <span>
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
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
        <ul>
          {this.menu.map((m, key) => (
            <li key={key}>
              <NavLink
                to={m.url}
                activeClassName="bg-blue-400"
                className="flex justify-between hover:bg-blue-400 pr-5 pl-7 py-0.5 rounded-r l-0 my-0.5 mr-5"
              >
                <span>{m.name}</span>
                <span>{m.val}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
