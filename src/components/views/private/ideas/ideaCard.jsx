import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Inputs, Icon } from 'components/ui'

const { Text, TextArea } = Inputs

const IdeaCardWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.flat};
  width: 150px;
  height: 150px;
  margin: 10px;
`

const StyledTextInput = styled(Text)`

`

const IdeaCard = () => (
  <IdeaCardWrapper>
    <StyledTextInput prefix={<Icon type="check" />} />
    <StyledTextInput.TextArea prefix={<Icon type="check" />} />
  </IdeaCardWrapper>
)

export default IdeaCard
