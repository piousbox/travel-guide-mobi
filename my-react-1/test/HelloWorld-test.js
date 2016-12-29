import React from 'react';
import TestUtils from 'react-addons-test-utils';
import NavComponent from '../src/components/nav.js';
import { expect } from 'chai';

let shallowRenderer = TestUtils.createRenderer();

describe('NavComponent', () => {
  shallowRenderer.render(<HelloWorld/>);
  let HelloWorldComponent = shallowRenderer.getRenderOutput();
  let HelloWorldChildren = HelloWorldComponent.props.children

  it('should render a div', () => {
    expect(HelloWorldComponent.type).to.equal('div');
  });

  it('should contain a header that says \'Hello World\' ', () => {
    expect(HelloWorldChildren[0].type).to.equal('h1');
    expect(HelloWorldChildren[0].props.children).to.equal('Hello World');
  });

  it('should contain a paragraph', () => {
    expect(HelloWorldChildren[1].type).to.equal('p');
  });
});
