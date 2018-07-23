import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { map, filter, sortBy, get } from 'lodash'

import { ideas as ideasService } from 'service/api'
import { Button, Typography, Feedback, Inputs } from 'components/ui'
import IdeaCard from './ideaCard'

const { Headers } = Typography
const { Message } = Feedback
const { Select } = Inputs

const IdeasWrapper = styled(Flex)``

const StyledHeader = styled(Headers.H2)`
  text-align: center;
  padding: 20px 0px;
`
const StyledSelect = styled(Select)`
  width: 120px;
`

class Ideas extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ideas: [],
      isNewIdeaCard: false,
      // Above handles focusing a newly added card's title input and
      // not on initial render of fetched ideas
    }

    this.handleAddIdea = this.handleAddIdea.bind(this)
    this.handleRemoveIdea = this.handleRemoveIdea.bind(this)
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

  handleRemoveIdea(ideaId) {
    ideasService.remove(ideaId)
      .then(() => {
        this.setState({
          ideas: filter(this.state.ideas, idea => idea._id !== ideaId),
        })
        Message.success('Idea removed!')
      })
      .catch(err => console.log(err))
  }

  handleFetchSortedIdeas(sort) {
    ideasService.find({
      query: {
        $sort: {
          [sort]: 1,
        },
      },
    })
      .then(response => this.setState({ ideas: response.data }))
  }

  render() {
    const { ideas } = this.state
    return (
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <StyledHeader>My Best Thoughts</StyledHeader>
        <Flex>
          <Button primary onClick={this.handleAddIdea}>Add idea</Button>
          <StyledSelect placeholder="Sort by..." onChange={value => this.handleFetchSortedIdeas(value)}>
            <Select.Option value="title">Title</Select.Option>
            <Select.Option value="createdAt">Created at</Select.Option>
          </StyledSelect>
        </Flex>
        <IdeasWrapper justifyContent="center" alignItems="center" flexWrap="wrap" p={[1, 4]}>
          {
            map(ideas, (idea, index) => (
              <IdeaCard
                idea={idea}
                key={idea._id}
                isNewlyAdded={index === 0 && this.state.isNewIdeaCard}
                removeIdea={this.handleRemoveIdea}
              />
            ))
          }
        </IdeasWrapper>
      </Flex>
    )
  }
}

export default Ideas
