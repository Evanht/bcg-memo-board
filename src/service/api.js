import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import auth from 'feathers-authentication-client'
import io from 'socket.io-client'
import hooks from 'feathers-hooks'

const socket = io(process.env.API || 'http://localhost:3030')
const storage = process.env.TYPE = 'CLIENT' ? window.localStorage : null

const api = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({ storage }))

export const users = api.service('users')
export const ideas = api.service('ideas')

export default api
