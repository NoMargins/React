import React from "react";
import User from "./User.jsx";
import "./styles.scss";

class UsersList extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
    sorting: null,
    list: []
    }
  }
 
  toggleSorting = () => {
     const newSorting = this.state.sorting === "asc" ? "desc" : "asc";
     this.setState({
      sorting: newSorting
     })
  }

  render() {
    let usersList;
    if (this.state.sorting) {
      usersList = this.props.list.sort((a, b) => this.state.sorting === "asc" ? a.age - b.age : b.age - a.age);
    } else {
      usersList = this.props.list;
    }
    return (
      <div>
      <button className="btn" onClick={this.toggleSorting}>{this.state.sorting || "-"}</button>
      <ul className="users">
        { usersList.map((user) => 
      (<User key={user.id} {...user} />) 
    )
          }
      </ul>
      </div>
    )
  }
}

export default UsersList;

