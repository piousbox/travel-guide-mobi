
import React from 'react'
import TestUtils from 'react-addons-test-utils'
let renderer = TestUtils.createRenderer()

import { Firsttime, Login } from '../'

text('firsttime', () => {
  renderer.render(<Firsttime />)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( 'div' );
})

text('login', () => {
  renderer.render(<Login />)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( 'div' );
})

