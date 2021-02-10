import React, { Component } from "react";

export default class UserDropDown extends Component {
  state = { open: false, user: this.props.user || 0 };

  user = [
    { name: "Santhosh" },
    { name: "Kumar" },
    { name: "Sankar" },
    { name: "Dass" },
    { name: "John" },
    { name: "David" },
  ];

  componentDidUpdate(preProps) {
    if (this.props.user !== preProps.user) {
      this.setState({ user: this.props.user });
    }
  }

  render() {
    return (
      <div className="relative">
        <div
          onClick={() => this.setState({ open: !this.state.open })}
          className="mx-3 h-10 cursor-pointer flex items-center"
        >
          <img src="/user.png" alt="user" className="w-6 h-6 mr-2" />
          <div className="flex flex-col leading-none">
            <span className="text-xs">{this.props.type}</span>
            <span className="text-md">{this.user[this.state.user].name}</span>
          </div>
        </div>
        <div
          className={`${
            this.state.open ? "" : "hidden"
          } absolute bg-white top-10 left-3 w-60 rounded shadow-xl mt-1 z-10`}
        >
          <ul className="divide-y divide-gray-400">
            {this.user.map((u, key) => (
              <li key={key}>
                <a
                  href="#"
                  className="my-2 mx-2 flex"
                  onClick={() => this.setState({ user: key, open: false })}
                >
                  {this.props.img ? (
                    <img src="/user.png" alt="user" className="w-5 h-5 mr-2" />
                  ) : (
                    ""
                  )}
                  <span className="text-sm">{u.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
