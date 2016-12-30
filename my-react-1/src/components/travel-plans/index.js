import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import { Event } from '../events';

class Flag extends React.Component {
  render () {
    let source = "/assets/images/flag_icons/png/" + this.props.countryCode + ".png";

    return (
<img src={source} alt='' />
    )
  }
}


export default React.createClass({
  styles: {
    center: { textAlign: 'center' }
  },

  render () {
    return(
<div>
  <h5 style={this.styles.center}>travel plans</h5>
  <hr />

  <div style={this.styles.center}>
    <h4><Flag countryCode="co" /> &nbsp; Medellin</h4>
  </div>

  <Event styles={this.styles} />
  <Event styles={this.styles} />
  <Event styles={this.styles} />

</div>
    )
  }
});

