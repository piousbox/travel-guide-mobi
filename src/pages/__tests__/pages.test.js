import React from 'react'
import TestUtils from 'react-addons-test-utils'
let renderer = TestUtils.createRenderer()
import { Grid } from 'react-bootstrap'

import { About, Terms } from '../'

test('about', () => {
  renderer.render(<About/>)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( Grid );
})

test('terms', () => {
  renderer.render(<Terms/>)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( Grid );
})

