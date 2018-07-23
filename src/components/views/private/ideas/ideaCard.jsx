import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { capitalize, get, noop } from 'lodash'

import { Inputs, Icon, Feedback } from 'components/ui'
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
IdeaCardWrapper.displayName = 'IdeaCardWrapper'

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
StyledTextInput.displayName = 'StyledTextInput'

const StyledTextAreaInput = styled(Text.TextArea)`
  && {
    margin-bottom: 10px
    border: none;
    resize: none;
    border-radius: 0px;
    height: 90px;
  }

  &&:focus {
    border: 1px solid gainsboro;
    box-shadow: none;
    border-radius: 3px;
  }
`
StyledTextAreaInput.displayName = 'StyledTextAreaInput'

const DeleteIcon = styled(Icon)`
  position: absolute;
  font-size: 16px;
  top: -5px;
  right: -5px;
  color: ${({ theme }) => theme.colors.error};

  &:hover {
    cursor: pointer;
  }
`
DeleteIcon.displayName = 'DeleteIcon'

const CharacterCounterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.error};
  padding: 2px 4px;
  color: white;
  position: absolute;
  bottom: -20px;
  left: 9px;
  right: 9px;
  text-align: center;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`
CharacterCounterWrapper.displayName = 'CharacterCounterWrapper'


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
      bodyCharacterCounter: 0,
      bodyIsActive: false,
    }

    this.titleInput = React.createRef()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      idea: {
        title: this.props.idea.title,
        body: this.props.idea.body,
      },
      bodyCharacterCounter: get(this.props.idea, 'body.length', 0),
    })

    if (this.props.isNewlyAdded) {
      this.titleInput.current.focus()
    }
  }

  handleSubmit() {
    this.setState({ loading: true })
    ideasService.patch(this.props.idea._id, this.state.idea)
      .then(() => {
        Message.success('Idea updated!')
        this.setState({ loading: false, bodyIsActive: false })
      })
      .catch((err) => {
        console.log(err)
        this.setState({ loading: false })
      })
  }

  render() {
    return (
      <Spin spinning={this.state.loading}>
        {
          this.state.bodyIsActive && this.state.bodyCharacterCounter > 135 && (
            <CharacterCounterWrapper>
              {150 - this.state.bodyCharacterCounter} characters left!
            </CharacterCounterWrapper>
          )
        }
        <IdeaCardWrapper
          onMouseOver={() => this.setState({ ...this.state, showDeleteIcon: true })}
          onMouseLeave={() => this.setState({ ...this.state, showDeleteIcon: false })}
          // For accessibility
          onFocus={() => this.setState({ ...this.state, showDeleteIcon: true })}
          onBlur={() => this.setState({ ...this.state, showDeleteIcon: false })}
        >
          {this.state.showDeleteIcon && (
            <DeleteIcon
              type="close-circle-o"
              onClick={() => this.props.removeIdea(this.props.idea._id)}
            />
          )}
          <StyledTextInput
            placeholder="Title..."
            innerRef={this.titleInput}
            value={this.state.idea.title}
            onChange={(event) => {
              const title = capitalize(event.target.value)
              this.setState({
                ...this.state,
                idea: {
                  ...this.state.idea,
                  title,
                },
              })
            }}
            onBlur={this.handleSubmit}
          />
          <StyledTextAreaInput
            placeholder="Body..."
            maxLength="150"
            value={this.state.idea.body}
            onBlur={this.handleSubmit}
            onChange={(event) => {
              const body = capitalize(event.target.value)
              this.setState({
                ...this.state,
                idea: {
                  ...this.state.idea,
                  body,
                },
                bodyCharacterCounter: body.length,
                bodyIsActive: true,
              })
            }}
          />
        </IdeaCardWrapper>
      </Spin>
    )
  }
}

IdeaCard.propTypes = {
  removeIdea: PropTypes.func,
  idea: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  isNewlyAdded: PropTypes.bool,
}

IdeaCard.defaultProps = {
  removeIdea: noop,
  idea: {},
  isNewlyAdded: false,
}

export default IdeaCard
