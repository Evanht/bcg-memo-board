import React from 'react'
import { shallow } from 'enzyme'

import IdeaCard from '../ideaCard'

const minProps = {
  idea: {
    title: 'Latin is fun',
    body: 'lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.',
  },
}

describe('<IdeaCard />', () => {
  it('Renders without blowing up', () => {
    expect(shallow(<IdeaCard {...minProps} />).length).toEqual(1)
  })

  it('renders a StyledTextInput for the title', () => {
    const wrapper = shallow(<IdeaCard {...minProps} />)
    expect(wrapper.find('StyledTextInput').length).toEqual(1)
  })

  it('Displays the character count if state.bodyCharacterCount > 135 && state.bodyIsActive', () => {
    const wrapper = shallow(<IdeaCard {...minProps} />)
    wrapper.setState({
      bodyIsActive: true,
    })
    expect(wrapper.find('CharacterCounterWrapper').length).toEqual(1)
  })

  it('Do not display the character count if state.bodyCharacterCount < 135 || !state.bodyIsActive', () => {
    const wrapper = shallow(<IdeaCard {...minProps} />)
    wrapper.setState({
      bodyIsActive: false,
    })
    expect(wrapper.find('CharacterCounterWrapper').length).toEqual(0)

    wrapper.setState({
      bodyIsActive: true,
      bodyCharacterCounter: 130,
    })
    expect(wrapper.find('CharacterCounterWrapper').length).toEqual(0)
  })

  it('Shows delete icon onMouseOver and hides onMouseLeave', () => {
    const wrapper = shallow(<IdeaCard {...minProps} />)

    const ideaCard = wrapper.find('IdeaCardWrapper')
    ideaCard.simulate('mouseover')
    expect(wrapper.find('DeleteIcon').length).toEqual(1)

    ideaCard.simulate('mouseleave')
    expect(wrapper.find('DeleteIcon').length).toEqual(0)
  })

  it('Title input takes a function onChange', () => {
    const wrapper = shallow(<IdeaCard {...minProps} />)
    expect(wrapper.find('StyledTextInput').props().onChange).toBeDefined()
  })

  it('Title input changes state onChange', () => {
    const wrapper = shallow(<IdeaCard {...minProps} />)

    wrapper.find('StyledTextInput').simulate('change', {
      target: {
        value: 'Hi',
      },
    })
    expect(wrapper.state().idea.title).toBe('Hi')
  })

  it('Body input takes a fucntion onChange', () => {
    const wrapper = shallow(<IdeaCard {...minProps} />)
    expect(wrapper.find('StyledTextAreaInput').props().onChange).toBeDefined()
  })

  it('Body input changes state onChange', () => {
    const wrapper = shallow(<IdeaCard {...minProps} />)

    wrapper.find('StyledTextAreaInput').simulate('change', {
      target: {
        value: 'I like turtles',
      },
    })
    expect(wrapper.state().idea.body).toBe('I like turtles')
  })

  it('Delete Icon takes a function onClick', () => {
    const wrapper = shallow(<IdeaCard {...minProps} />)
    const ideaCard = wrapper.find('IdeaCardWrapper')
    ideaCard.simulate('mouseover')

    expect(wrapper.find('DeleteIcon').props().onClick).toBeDefined()
  })
})
