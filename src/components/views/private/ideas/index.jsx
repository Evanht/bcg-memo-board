import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

import IdeaCard from './ideaCard'

const IdeasWrapper = styled(Flex)`
  ${'' /* padding: 20px; */}
`

class Ideas extends Component {
  componentDidMount() {
    // just to stop linting errors
  }

  render() {
    return (
      <IdeasWrapper justifyContent="center" alignItems="center" p={4}>
        <IdeaCard />
      </IdeasWrapper>
    )
  }
}

export default Ideas
