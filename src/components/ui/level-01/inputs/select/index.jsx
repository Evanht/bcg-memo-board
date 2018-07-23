import styled from 'styled-components'
import { Select as AntdSelect } from 'antd'

const StyledSelectField = styled(AntdSelect)`
  .ant-select-selection:hover,
  .ant-select-selection:focus {
    border-color: ${props => props.theme.colors.primary};
  }
  .ant-select-selection:focus {
    box-shadow: 0 0 0 2px rgba(102, 187, 106, 0.2);
  }
  &.ant-select-open .ant-select-selection {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(102, 187, 106, 0.2);
  }
`
export default StyledSelectField
