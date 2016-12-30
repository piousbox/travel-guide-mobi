import React from 'react';

export default React.createClass({

  handleChange(event) {
    // this.setState({value: event.target.value});
  },

  handleSubmit(event) {
    console.log('form was submitted');
    event.preventDefault();
  },

  render () {
    return(
<div>
  <form onSubmit={this.handleSubmit}>
    <ul>
      <li>County: <select>
        <option> &nbsp; - &nbsp; </option>
        <option>Argentina</option>
        <option>Bolivia</option>
        <option>Colombia</option>
      </select></li>

      <li>City:<select>
        <option> &nbsp; - &nbsp; </option>
        <option>Bogota</option>
        <option>Medellin</option>        
      </select></li>

      <li>From: <input type="text" placeholder="yyyy-mm-dd" /></li>

      <li>Until: <input type="text" placeholder="yyyy-mm-dd" /></li>

      <li><input type="submit" value="Add" /></li>
    </ul>
  </form>
</div>
    )
  }

});

