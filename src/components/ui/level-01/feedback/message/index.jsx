import { injectGlobal } from 'styled-components'
import { message as Message } from 'antd'

injectGlobal`
  .ant-message-notice-content {
    color: black;
  }
`

Message.config({
  // top: 100,
  duration: 1.5,
})

export default Message
