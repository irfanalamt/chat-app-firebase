import React, { Component } from "react";
import ChatListComponent from "../chatList/chatList";

class DashboardComponent extends Component {
  render() {
    return (
      <div>
        <div>Hello from Dashboard </div>
        <ChatListComponent />
      </div>
    );
  }
}

export default DashboardComponent;
