import React from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

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

  <div style={this.styles.center}>
    <Flag countryCode="co" />
    <h4>Medellin</h4>
  </div>

  <hr />
  <h4 style={this.styles.center}>2016-01-01</h4>
  <Row>
    <Col xs={12}></Col>
  </Row>

  <hr />

</div>
    )
  }
});

