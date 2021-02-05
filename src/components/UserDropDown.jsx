import React, { Component } from "react";

export default class UserDropDown extends Component {
  state = { open: false, user: this.props.user };

  user = [
    { name: "Santhosh" },
    { name: "Kumar" },
    { name: "Sankar" },
    { name: "Dass" },
  ];

  componentDidUpdate(preProps) {
    if (this.props.user !== preProps.user) {
      this.setState({ user: this.props.user });
    }
  }

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
