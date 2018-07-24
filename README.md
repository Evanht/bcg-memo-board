# Idea Board Web App
As this is a simple project I used the create-react-app-antd boilerplate: https://github.com/ant-design/create-react-app-antd

This app connects to an API to handle authentication and the creating, fetching, updating, and deleting of ideas.

## Getting Started

1. Create a .env file in the project's root and set:  
`NODE_PATH=src/`  
This allows for absolute imports, rather than messy relative ones from deep down components.


2. Install the packages and get going
```bash
$ npm install
$ npm start
```

3. The API   
I built a standalone API using Feathersjs that is connected to a MongoDB instance hosted on https://mlab.com/. The API itself is hosted on Heroku and the connection logic is in `src/service/api`.  
It should work out of the box, but follow step 4 to make sure.

4. Visit localhost:3000 and try logging in to check that the API is connected
```
  email: evan@mail.com
  password: verysecret
```
If you want to create your own user that you can login with then you can use curl
```bash
curl 'https://ideaboard-bcgdv-api.herokuapp.com/users' -H 'Content-Type: application/json' --data-binary '{ "email": "<YOUR_EMAIL>", "password": "<YOUR_PASSWORD>" }'
```

## Tests
Tests are written using Jest and Enzyme. To run the test suite:  
```bash
$ CI=true npm test
```  
