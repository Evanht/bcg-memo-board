import feathers from 'feathers/client'
import socketio from 'feathers-socketio/client'
import auth from 'feathers-authentication-client'
import io from 'socket.io-client'
import hooks from 'feathers-hooks'

// const socket = io('http://localhost:3030') // Dev
const socket = io('https://ideaboard-bcgdv-api.herokuapp.com/') // Production

const storage = process.env.TYPE = 'CLIENT' ? window.localStorage : null

const api = feathers()
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({ storage }))

export const users = api.service('users')
export const ideas = api.service('ideas')

export default api
