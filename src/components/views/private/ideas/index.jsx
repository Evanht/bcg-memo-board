import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { map } from 'lodash'

import { ideas as ideasService } from 'service/api'
import { Button, Typography } from 'components/ui'
import IdeaCard from './ideaCard'

const { Headers } = Typography

const IdeasWrapper = styled(Flex)`
  ${'' /* padding: 20px; */}
`
const StyledHeader = styled(Headers.H2)`
  text-align: center;
  padding: 20px 0px;
`

class Ideas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ideas: [],
    }

    this.handleAddIdea = this.handleAddIdea.bind(this)
  }

  componentDidMount() {
    // just to stop linting errors
    ideasService.find()
      .then(response => this.setState({ ideas: response.data }))
      .catch(err => console.log(err))
  }

  handleAddIdea() {
    const { ideas } = this.state
    ideasService.create({})
      .then(response => this.setState({ ideas: [response, ...ideas] }))
      .catch(err => console.log(err))
  }

  render() {
    const { ideas } = this.state

    return (
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <StyledHeader>Things I've Thought</StyledHeader>
        <Button primary onClick={this.handleAddIdea}>Add idea</Button>
        <IdeasWrapper justifyContent="center" alignItems="center" flexWrap="wrap" p={4}>
          {
            map(ideas, idea => (
              <IdeaCard idea={idea} key={idea._id} />
            ))
          }
        </IdeasWrapper>
      </Flex>
    )
  }
}

export default Ideas
