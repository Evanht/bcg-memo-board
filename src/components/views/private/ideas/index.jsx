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
      isNewIdeaCard: false, // This is to handle focusing a newly added card's title input and not on initial render of fetched ideas
    }

    this.handleAddIdea = this.handleAddIdea.bind(this)
  }

  componentDidMount() {
    ideasService.find()
      .then(response => this.setState({ ideas: response.data }))
      .catch(err => console.log(err))
  }

  handleAddIdea() {
    const { ideas } = this.state
    ideasService.create({})
      .then((response) => {
        this.setState({
          ideas: [response, ...ideas],
          isNewIdeaCard: true,
        })
      })
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
            map(ideas, (idea, index) => (
              <IdeaCard
                idea={idea}
                key={idea._id}
                isNewlyAdded={index === 0 && this.state.isNewIdeaCard}
              />
            ))
          }
        </IdeasWrapper>
      </Flex>
    )
  }
}

export default Ideas
