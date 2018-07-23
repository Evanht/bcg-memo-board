import React from 'react'
import ReactDOM from 'react-dom'
// import { configure } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import App from './components'

// configure({ adapter: new Adapter() }) // For enzyme to work with REact 16+


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
