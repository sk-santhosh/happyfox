import React, { Component } from "react";

export default class DropDown extends Component {
  state = { open: false, value: this.props.value };

  render() {
    const { list, value } = this.props;
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
                list[this.state.value].color
              }`}
            >
              {list[this.state.value].name}
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
