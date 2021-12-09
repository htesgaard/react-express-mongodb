import React from "react";

export default class ClientList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  handleActive(index) {
    this.setState({
      activeIndex: index,
    });
  }

  renderClients(Clients) {
    return (
      <ul className="list-group">
        {Clients.map((Client, i) => (
          <li
            className={
              "list-group-item cursor-pointer " +
              (i === this.state.activeIndex ? "active" : "")
            }
            key={i}
            onClick={() => {
              this.handleActive(i);
            }}
          >
            {Client.firstName}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let { Clients } = this.props;
    return Clients.length > 0 ? (
      this.renderClients(Clients)
    ) : (
      <div className="alert alert-primary" role="alert">
        No Clients to display
      </div>
    );
  }
}
