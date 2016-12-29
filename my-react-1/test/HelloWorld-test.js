import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NavComponent from '../src/components/nav.js';
import { expect } from 'chai';
import Sidebar from 'react-sidebar';

let shallowRenderer = TestUtils.createRenderer();

describe('NavComponent', () => {
  shallowRenderer.render(<NavComponent/>);
  let thisComponent = shallowRenderer.getRenderOutput();
  let theseChildren = thisComponent.props.children;

  it('sanity', () => {
    expect( true ).to.equal( true );
  });

  it('should render a div', () => {
    expect( thisComponent.type ).to.equal( Sidebar );
  });

});
