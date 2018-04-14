import React, { Component } from 'react';

export default class GameDetailsPage extends Component {
  state = {};
  componentDidMount = () => {
    const { match: { params } } = this.props;
    if (params && params.pk) {
    }
  };

  render() {
    return <div>details</div>;
  }
}
