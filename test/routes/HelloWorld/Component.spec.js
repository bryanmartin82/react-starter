import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Component from '../../../src/HelloWorld/Component';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<Component />).to.be.ok());
  });
});

