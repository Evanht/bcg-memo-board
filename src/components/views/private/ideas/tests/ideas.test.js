import React from 'react'
import { shallow } from 'enzyme'
import Ideas from '../index'

const ideas = [
  {
    _id: '1',
    title: 'Take out bins',
    body: 'The bin is full and there are flies. I should think about taking it out.',
  },
  {
    _id: '2',
    title: 'Eat Food',
    body: 'I am getting hungry. I should buy food or forage for berries in the park',
  },
]

describe('<Ideas />', () => {
  it('Renders without blowing up', () => {
    expect(shallow(<Ideas />).length).toEqual(1)
  })

  it('Renders idea cards from this.state', () => {
    const wrapper = shallow(<Ideas />)

    wrapper.setState({ ideas })
    expect(wrapper.find('IdeaCard').length).toEqual(2)
  })

  it('Add Idea button takes a function onClick', () => {
    const wrapper = shallow(<Ideas />)
    expect(wrapper.find('Button').props().onClick).toBeDefined()
  })

  it('Select dropdwon takes a function onChange', () => {
    const wrapper = shallow(<Ideas />)
    expect(wrapper.find('StyledSelect').props().onChange).toBeDefined()
  })
})
