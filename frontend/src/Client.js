import React from "react";
import axios from "axios";
import "./App.scss";
import AddClient from "./components/AddClient";
import ClientList from "./components/ClientList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Clients: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then((response) => {
        this.setState({
          Clients: response.data.data,
        });
      })
      .catch((e) => console.log("Error : ", e));
  }

  handleAddClient = (value) => {
    axios
      .post("/api/Clients", { text: value })
      .then(() => {
        this.setState({
          Clients: [...this.state.Clients, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  render() {
    return (
      <div className="App container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
              <h1>Clients</h1>
              <div className="Client-app">
                <AddClient handleAddClient={this.handleAddClient} />
                <ClientList Clients={this.state.Clients} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
