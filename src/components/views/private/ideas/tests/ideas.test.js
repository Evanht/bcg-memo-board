import React from 'react'
import { shallow } from 'enzyme'
import Ideas from '../index'

describe('<Ideas />', () => {
  it('renders without crashing', () => {
    const ideas = shallow(<Ideas />)
    expect(ideas.find('IdeasWrapper').length).toEqual(1)
  })
})
