import React from 'react'
import { shallow } from 'enzyme'

import IdeaCard from '../ideaCard'

const minProps = {
  idea: {},
}

describe('<IdeaCard />', () => {
  it('does not blow up', () => {
    expect(shallow(<IdeaCard {...minProps} />).length).toEqual(1)
  })

  it('renders a StyledTextInput for the title', () => {
    const wrapper = shallow(<IdeaCard {...minProps} />)
    // console.log(wrapper.debug())
    expect(wrapper.find('StyledTextInput').length).toEqual(1)
  })
})
