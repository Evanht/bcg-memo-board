import React from 'react'
import styled, { css } from 'styled-components'
import { omit } from 'lodash'

import { Button as AntdButton } from 'antd'

const _AntdButton = props => <AntdButton {...omit(props, 'fullWidth', 'primary', 'raised')} />

const PrimaryStyles = css`
  border-color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.neutral};
  &:hover,
  &:active,
  &:focus {
    background: ${props => props.theme.colors.primaryDark};
    border-color: ${props => props.theme.colors.primary};
  }
`

const DefaultStyles = css`
  border-color: ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.midText};
  &:hover,
  &:active,
  &:focus {
    border-color: ${props => props.theme.colors.primaryDark};
  }
`

const RaisedStyles = css`
  box-shadow: ${({ theme }) => theme.shadow.flat};
`

const DangerStyles = css`
  background-color: ${props => props.theme.colors.error};
`

const Button = styled(_AntdButton)`
  &:not(:last-child) {
    margin-right: 15px;
  }
  &&, &&.ant-btn {
    width: ${props => props.fullWidth ? '100%' : 'auto'};
    border-radius: ${props => props.theme.misc.borderRadius};
    ${props => props.primary ? PrimaryStyles : DefaultStyles}
    ${props => props.danger ? DangerStyles : null}
    ${props => props.raised && RaisedStyles}
  }
`

export default Button
