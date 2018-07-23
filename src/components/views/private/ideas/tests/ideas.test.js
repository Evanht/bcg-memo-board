import React from 'react'
import { shallow } from 'enzyme'
import Ideas from '../index'

describe('<Ideas />', () => {
  it('Renders without blowing up', () => {
    expect(shallow(<Ideas />).length).toEqual(1)
  })
})
