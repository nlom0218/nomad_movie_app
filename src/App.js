import React from "react";
// import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      console.log("I'm update!!");
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading..." : "We are ready"}</h1>
      </div>
    );
  }
}

export default App;
