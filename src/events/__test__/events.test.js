import React from 'react'
import TestUtils from 'react-addons-test-utils'
let renderer = TestUtils.createRenderer()

import { Edit, Show } from '../'

/* test('index', () => {
  renderer.render(<Index />)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( 'div' );
}) */

test('edit', () => {
  renderer.render(<Edit />)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( 'div' );
})

test('show', () => {
  renderer.render(<Show />)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( 'div' );
})

