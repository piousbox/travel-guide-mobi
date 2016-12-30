
import React from 'react'
import TestUtils from 'react-addons-test-utils'
let renderer = TestUtils.createRenderer()

import { Index, EditMany } from '../'

test('index', () => {
  renderer.render(<Index />)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( 'div' );
})

test('edit-many', () => {
  renderer.render(<EditMany />)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( 'div' );
})
