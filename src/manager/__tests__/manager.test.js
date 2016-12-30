import React from 'react'
import TestUtils from 'react-addons-test-utils'
let renderer = TestUtils.createRenderer()

import { Dashboard } from '../'

test('dashboard', () => {
  renderer.render(<Dashboard />)
  const result = renderer.getRenderOutput()
  expect( result.type ).toEqual( 'div' );
})

