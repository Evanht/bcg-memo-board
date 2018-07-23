import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Inputs, Icon, Feedback, Button } from 'components/ui'
import { ideas as ideasService } from 'service/api'

const { Text } = Inputs
const { Message, Spin } = Feedback

const IdeaCardWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.flat};
  position: relative;
  width: 150px;
  height: 150px;
  margin: 10px;
  padding: 10px;
`
const StyledTextInput = styled(Text)`
  && {
    margin-bottom: 10px
    border: none;
    border-bottom: 1px solid gainsboro;
    border-radius: 0px;
  }

  &&:focus {
    border: 1px solid gainsboro;
    box-shadow: none;
    border-radius: 3px;
  }
`
const StyledTextAreaInput = styled(Text.TextArea)`
  && {
    margin-bottom: 10px
    border: none;
    resize: none;
    border-radius: 0px;
  }

  &&:focus {
    border: 1px solid gainsboro;
    box-shadow: none;
    border-radius: 3px;
  }
`
const StyledButton = styled(Button)`
  &&.ant-btn {
    border: none;
    color: white;
    margin-top: 10px;
  }
`

class IdeaCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      showDeleteIcon: false,
      idea: {
        title: undefined,
        body: undefined,
      },
    }

    this.titleInput = React.createRef()
  }

  componentDidMount() {
    this.setState({
      idea: {
        title: this.props.idea.title,
        body: this.props.idea.body,
      },
    })

    if (this.props.isNewlyAdded) {
      this.titleInput.current.focus()
    }
  }

  handleSubmit = () => {
    this.setState({ loading: true })
    ideasService.patch(this.props.idea._id, this.state.idea)
      .then(() => {
        Message.success('Idea updated!')
        this.setState({ loading: false })
      })
      .catch((err) => {
        Message.error(err)
        this.setState({ loading: false })
      })
  }

  // handleRemoveIdea

  render() {
    return (
      <Spin spinning={this.state.loading}>
        <IdeaCardWrapper
          onMouseOver={() => this.setState({ ...this.state, showDeleteIcon: true })}
          onMouseLeave={() => this.setState({ ...this.state, showDeleteIcon: false })}
          // For accessibility
          onFocus={() => this.setState({ ...this.state, showDeleteIcon: true })}
          onBlur={() => this.setState({ ...this.state, showDeleteIcon: false })}
        >
          <StyledTextInput
            placeholder="Title..."
            innerRef={this.titleInput}
            value={this.state.idea.title}
            onChange={e => this.setState({
              idea: {
                ...this.state.idea,
                title: e.target.value,
              },
            })}
            onBlur={this.handleSubmit}
          />
          <StyledTextAreaInput
            placeholder="Body..."
            value={this.state.idea.body}
            onChange={e => this.setState({
              idea: {
                ...this.state.idea,
                body: e.target.value,
              },
            })}
            onBlur={this.handleSubmit}
          />
          {this.state.showDeleteIcon && (
            <StyledButton
              danger
              fullWidth
              icon="close-circle-o"
              // onClick={() => ideasService.remove(this.props.idea._id)}
            >
              Remove Idea
            </StyledButton>
          )}
        </IdeaCardWrapper>
      </Spin>
    )
  }
}

export default IdeaCard
