import React from 'react';

import { Button, Grid, Row, Col } from 'react-bootstrap';
import { default as TravelPlansEditOne } from './edit-one';

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
  <TravelPlansEditOne></TravelPlansEditOne>
  <TravelPlansEditOne></TravelPlansEditOne>
  <TravelPlansEditOne></TravelPlansEditOne>
</div>
    )
  }

});

