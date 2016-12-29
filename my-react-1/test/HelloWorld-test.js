import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NavComponent from '../src/components/nav.js';
import { expect } from 'chai';

let shallowRenderer = TestUtils.createRenderer();

describe('NavComponent', () => {
  // shallowRenderer.render(<NavComponent/>);
  // let HelloWorldComponent = shallowRenderer.getRenderOutput();
  // let HelloWorldChildren = HelloWorldComponent.props.children

  it('sanity', () => {
    expect( true ).to.equal( true );
  });
});
