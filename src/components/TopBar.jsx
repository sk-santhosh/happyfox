import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class TopBarTitle extends Component {
  state = { open: false, menu: 0 };

  menu = [
    {
      svg: (
        <svg
          className="w-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Ticket",
      url: "/",
    },
    {
      svg: (
        <svg
          className="w-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
      ),
      title: "Kanboard",
      url: "/kanboard",
    },
  ];

  render() {
    const { open, menu } = this.state;

    return (
      <div className="relative h-full">
        <button
          className={`flex items-center hover:bg-green-700 h-full px-3 cursor-pointer outline-none focus:outline-none ${
            open ? "bg-green-700" : ""
          }`}
          onClick={() => this.setState({ open: !this.state.open })}
        >
          <span>{this.menu[menu].svg}</span>
          <span className="text-xl mr-2">{this.menu[menu].title}</span>
          <span>
            <svg
              className={`h-5 transform duration-200 ease-in-out ${
                this.state.open ? "-rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
        <div
          className={`absolute bg-gray-200 z-20 mt-1 shadow-xl text-gray-500 p-3 rounded flex space-x-6 ${
            open ? "" : "hidden"
          } `}
        >
          <ul className="py-2">
            {this.menu.map((menu_item, key) => (
              <li className="py-1" key={key}>
                <NavLink
                  to={menu_item.url}
                  className="hover:text-gray-800 rounded flex items-center"
                  onClick={() => this.setState({ menu: key, open: false })}
                >
                  <span>{menu_item.svg}</span>
                  {menu_item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="p-2">
            {[...Array(8)].map((menu_item, key) => (
              <li className="py-1 " key={key}>
                Dummy_{key + 1}
              </li>
            ))}
          </ul>
          <ul className="p-2">
            {[...Array(8)].map((menu_item, key) => (
              <li className="py-1 " key={key}>
                Dummy_1_{key + 1}
              </li>
            ))}
          </ul>
          <ul className="p-2">
            {[...Array(8)].map((menu_item, key) => (
              <li className="py-1 " key={key}>
                Dummy_2_{key + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default class TopBar extends Component {
  render() {
    return (
      <div className="flex justify-between items-center mx-3 my-2 my-auto h-full">
        <TopBarTitle />
        <div className="flex text-white">
          <div className="relative mx-auto h-full">
            <button type="submit" className="absolute left-0 top-0 mt-4 ml-3">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input
              className=" bg-gray-600 h-10 my-1 px-5 pl-10 w-96 rounded text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <button className="p-2 my-auto ml-1 rounded outline-none focus:outline-none bg-gray-600">
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <img src="/user.png" alt="user" className="w-6 rounded-full" />
            <span>
              <svg
                className="h-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
          <span>
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </span>
        </div>
      </div>
    );
  }
}
