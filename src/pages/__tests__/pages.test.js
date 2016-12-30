import React from 'react'
import TestUtils from 'react-addons-test-utils'
let renderer = TestUtils.createRenderer()

import { About } from '../'

test('about', () => {
  renderer.render(<About/>)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( 'div' );
})

test('terms', () => {
  renderer.render(<Terms/>)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( 'div' );
})

