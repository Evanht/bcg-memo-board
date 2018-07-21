import styled from 'styled-components'
import { Spin as AntdSpin } from 'antd'

const Spin = styled(AntdSpin)`
  &&.ant-spin {
    color: ${props => props.theme.colors.primary};
  }
  && .ant-spin-dot {
    margin: 0 auto;
  }
  && .ant-spin-dot i {
    background-color: ${props => props.theme.colors.primary};
  }
`

export default Spin
