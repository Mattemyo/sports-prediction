import React, { Component } from 'react';

export default class GameDetailsPage extends Component {
  state = {
    gameId: ''
  };
  componentDidMount = () => {
    console.table(this.props);
    const { match: { params } } = this.props;
    if (params && params.gameId) {
      this.setState({
        gameId: params.gameId
      });
    }
  };

  render() {
    return <div>details {this.state.gameId}</div>;
  }
}
