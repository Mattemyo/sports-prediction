import React from 'react';

export default ({ loading }) => (
  <div className="table">
    this is league table is {!loading && 'not'} loading
  </div>
);
