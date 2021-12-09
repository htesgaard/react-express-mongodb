import React from "react";
import axios from "axios";
import "./App.scss";
import AddReservation from "./components/AddReservation";
import ReservationList from "./components/ReservationList";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Reservations: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then((response) => {
        this.setState({
          Reservations: response.data.data,
        });
      })
      .catch((e) => console.log("Error : ", e));
  }

  handleAddReservation = (value) => {
    axios
      .post("/api/Reservations", { text: value })
      .then(() => {
        this.setState({
          Reservations: [...this.state.Reservations, { text: value }],
        });
      })
      .catch((e) => console.log("Error : ", e));
  };

  handleAddReservation = (value) => {
    axios
      .post("/api/Reservations", { text: value })
      .then(() => {
        this.setState({
          Reservations: [...this.state.Reservations, { text: value }],
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
              <h1>Reservations</h1>
              <div className="Reservation-app">
                <AddReservation handleAddReservation={this.handleAddReservation} />
                <ReservationList Reservations={this.state.Reservations} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
