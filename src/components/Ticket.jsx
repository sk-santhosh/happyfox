import React, { Component } from "react";

export default class Ticket extends Component {
  render() {
    return (
      <div className="relative mb-5">
        <div className=" bg-white ml-10 rounded-lg border-2 hover:border-blue-600 h-full shadow-xl">
          <div className="h-20 flex relative cursor-pointer">
            <span className="absolute right-0 top-0 mr-3 mt-3">
              <svg
                className="w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                <h4 className="text-lg font-bold">
                  Reprehenderit cillum dolore veniam laboris aliqua.
                </h4>
                <span className="mx-1">(6)</span>
                <span className="text-xs">21 hours ago</span>
              </div>
              <p>Et tempor in proident est nostrud reprehenderit veniam.</p>
            </div>
          </div>
          <div className="h-12 bg-gray-100 flex items-center divide-x divide-gray-400 rounded-b-md">
            <div className="flex divide-x divide-gray-400 w-min">
              <Star />
              <Star />
              <span>
                <svg
                  className="w-6 mx-3 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
            <UserDropDown type="assignee" />
            <UserDropDown type="raised by" />
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

class Star extends Component {
  state = { star: false };
  render() {
    return (
      <button
        className="px-3 h-12 outline-none focus:outline-none"
        onClick={() => this.setState({ star: !this.state.star })}
      >
        {this.state.star ? (
          <svg
            className="w-6 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ) : (
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        )}
      </button>
    );
  }
}

class UserDropDown extends Component {
  state = { open: false, user: 1 };

  user = [
    { name: "Santhosh" },
    { name: "Kumar" },
    { name: "Sankar" },
    { name: "Dass" },
  ];

  render() {
    return (
      <div className="relative  w-1/5">
        <div
          onClick={() => this.setState({ open: !this.state.open })}
          className="mx-3 h-12 cursor-pointer flex items-center"
        >
          <img src="/user.png" alt="user" className="w-8 h-8 mr-2" />
          <div className="flex flex-col leading-none">
            <span className="text-xs">{this.props.type}</span>
            <span className="text-md">{this.user[this.state.user].name}</span>
          </div>
        </div>
        <div
          className={`${
            this.state.open ? "" : "hidden"
          } absolute bg-white top-12 left-3 w-60 rounded shadow-xl mt-2 z-10`}
        >
          <ul className="divide-y divide-gray-400">
            {this.user.map((u, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="my-2 mx-2 flex"
                  onClick={() => this.setState({ user: key, open: false })}
                >
                  <img src="/user.png" alt="user" className="w-10 h-10 mr-2" />
                  <span>{u.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

class DropDown extends Component {
  state = { open: false, user: 0 };

  render() {
    const { list } = this.props;
    return (
      <div className="relative  w-1/5">
        <div
          onClick={() => this.setState({ open: !this.state.open })}
          className="mx-3 h-12 cursor-pointer flex items-center"
        >
          <div className="flex flex-col leading-none">
            <span className="text-xs">{this.props.type}</span>
            <span
              className={`text-md font-bold text-${
                list[this.state.user].color
              }`}
            >
              {list[this.state.user].name}
            </span>
          </div>
        </div>
        <div
          className={`${
            this.state.open ? "" : "hidden"
          } absolute bg-white top-12 left-3 w-60 rounded shadow-xl mt-2 z-10`}
        >
          <ul className="divide-y divide-gray-400">
            {list.map((u, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="my-2 mx-2 flex"
                  onClick={() => this.setState({ user: key, open: false })}
                >
                  <span>{u.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
