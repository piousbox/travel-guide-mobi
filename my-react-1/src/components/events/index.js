
import React from 'react';
import update from 'immutability-helper';

import { Grid, Row, Col } from 'react-bootstrap';

class Event extends React.Component {
  render () {
    this.styles = {
      h2: { margin: 0 },
      eventImg: { height: '150px', padding: '1em' },
      location: { padding: '5px', background: '#ececec' },
      spaceless: { margin: 0, padding: 0, listStyle: 'none' }
    };
    this.styles = update( this.styles, { $merge: this.props.styles } );

    return (
<Grid>
<Row>
  <Col xs={12}>
    <div style={this.styles.center}><i>2016-01-01</i></div>
    <h2 style={this.styles.h2} >
      <img src="/assets/images/icons/32x32/star.png" alt="" />&nbsp;
      <a href="javascript:void(0);">Name of this game - Afterhours party at my house</a>
    </h2>
    <div className="descr">Vivamus non arcu at dui feugiat ultricies sit amet eu ligula. Praesent vitae scelerisque lectus, quis porta arcu. Integer velit lectus, sodales sit amet tellus nec, dignissim aliquet massa. Suspendisse eu posuere enim, sit amet ultricies sem. Ut nec scelerisque purus. Curabitur at nibh vitae tellus fringilla malesuada eget sed urna. Suspendisse in lobortis lorem. Vestibulum massa nisl, lobortis a enim id, fermentum lobortis nunc. Nam placerat est ac cursus ornare. Pellentesque metus metus, efficitur sed dolor sit amet, finibus iaculis tellus. Nunc leo dui, lobortis sit amet egestas posuere, pharetra ut lectus.</div>
  </Col>
</Row>
<Row>
  <Col xs={5} >
    <img src="assets/images/photos/event_1.png" style={this.styles.eventImg} />
  </Col>
  <Col xs={2} >
    <ul style={this.styles.spaceless} >
      <li><img src="/assets/images/icons/32x32/star.png" alt="" /></li>
      <li><img src="/assets/images/icons/32x32/map.png" alt="" /></li>
      <li><img src="/assets/images/icons/32x32/close.png" alt="" /></li>
    </ul>
  </Col>
  <Col xs={5} >
    <div style={this.styles.location}>
      Ruby Skye<br />
      223 Ruth St.,<br />
      San Francisco, CA 94505
    </div>
  </Col>
</Row>
<hr />
</Grid>
    )
  }
}

export { Event };

