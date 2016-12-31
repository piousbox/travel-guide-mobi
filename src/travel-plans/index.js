
import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { Show as Event } from '../events'

class Flag extends React.Component {
  render () {
    let source = "/assets/images/flag_icons/png/" + this.props.countryCode + ".png"

    return (
<img src={source} alt='' />
    )
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props)

    this.styles = {
      center: { textAlign: 'center' }
    }

    console.log('this.styles here', this.styles);

  }

  render () {
    return (
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
}
// Index.propTypes = {}
// Index.defaultProps = {}

class EditMany extends React.Component {
  render () {
    return (
<div>edit many of travel plans</div>
    )
  }
}

export { Index, EditMany }

