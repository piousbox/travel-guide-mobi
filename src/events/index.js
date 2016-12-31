
import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { Show } from './show'

class Edit extends React.Component {
  render () {
    return (
<Grid>
  <Row>
    <Col xs={12}>
      editing event
    </Col>
  </Row>
</Grid>
    )
  }
}

export { Edit, Show }

