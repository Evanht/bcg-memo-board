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

3. Connect the API
```
  Clone and run:  https://github.com/Evanht/bcg-memo-board-api
```

4. Visit localhost:3000 and try logging in to check that the API is connected
```
  email: evan@mail.com
  password: verysecret
```

## Tests
Tests are written using Jest and Enzyme. To run the test suite:
```bash
$ CI=true npm test
```  
