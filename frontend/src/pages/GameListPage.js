import React, { Component } from 'react';

export default class GameListPage extends Component {
  componentWillMount() {
    fetch('http://127.0.0.1:8000/api/livegames')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  render() {
    return <div>hello</div>;
  }
}
