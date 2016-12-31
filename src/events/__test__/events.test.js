import React from 'react'
import TestUtils from 'react-addons-test-utils'
let renderer = TestUtils.createRenderer()
import { Grid } from 'react-bootstrap'

import { Edit, Show } from '../'

test('edit', () => {
  renderer.render(<Edit />)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( Grid );
})

test('show', () => {
  renderer.render(<Show />)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( Grid );
})

