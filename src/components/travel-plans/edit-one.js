import React from 'react';

import { Button, Grid, Row, Col } from 'react-bootstrap';

export default React.createClass({

  handleChange(event) {
    // this.setState({value: event.target.value});
  },

  handleSubmit(event) {
    console.log('form was submitted');
    event.preventDefault();
  },

  styles: {
    border: {
      border: '1px solid red'
    },
    oneColumn: {
      background: '#ededed'
    },
    center: {
      textAlign: 'center'
    }
  },

  render () {
    return(
<div>
  <h5 style={this.styles.center}>Add another plan</h5>
  <form onSubmit={this.handleSubmit}>
    <Grid>
      <Row >
        <Col style={this.styles.oneColumn} xs={3}>County:</Col>
        <Col xs={3}> 
          <select>
            <option> &nbsp; - &nbsp; </option>
            <option>Argentina</option>
            <option>Bolivia</option>
            <option>Colombia</option>
          </select>
        </Col>
        <Col style={this.styles.oneColumn} xs={3}>City:</Col>
        <Col xs={3}>
          <select>
            <option> &nbsp; - &nbsp; </option>
            <option>Bogota</option>
            <option>Medellin</option>
          </select>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>From:</Col>
        <Col xs={3}><input type="text" placeholder="yyyy-mm-dd" /></Col>
        <Col xs={3}>Until:</Col>
        <Col xs={3}><input type="text" placeholder="yyyy-mm-dd" /></Col>
      </Row>

      <Row>
        <Col style={this.styles.center} xs={16}><input type="submit" value="Add" /></Col>
      </Row>

    </Grid>
  </form>
  <hr />
</div>
    )
  }

});

