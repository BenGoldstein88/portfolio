import React from 'react';

export default class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
      		width: "100%",
      		height: "100%"
      }}>
      	<h1> This is the homepage </h1>
      </div>
    );
  }
}
