
import React from 'react'

class Firsttime extends React.Component {
  render () {
    return(
            <div>
            <h1>Where will you go?</h1>
            <ul>
            <li>Country:</li>
            <li>City:</li>
            <li>From:</li>
            <li>Until:</li>
            <li>Go!</li>
            </ul>
            </div>
    )
  }
}

class Login extends React.Component {
  render () {
    return (
            <div>
            <h1>Please login</h1>
            </div>
    )
  }
}

export { Firsttime, Login }


