# Github Repo Fetcher

The Github Repo fetcher is a simple web app that takes a Github username or organization as an input and gets that user's public repositories and displays them in a tabular format.

The repositories can be sorted by Name, Created At, Updated At and Pushed At.

## Progress Notes

The following items will be included in an upcoming sprint.
-- pagination
-- unit tests
-- UI fit and finish

## Project Structure

grepos/
├── README.md
├── package.json
├── src/
│   ├── index.js
│   ├── App.js
│   ├── models/
│   │   ├── repos.models.ts
│   ├── components/
│   │   ├── repos/
│   │   ├── repo-table/
│   │   ├── button/
│   │   ├── form-input/
│   │   ├── header/
│   ├── services/
│   │   └── repos.service.ts
│   ├── store/
│   │   ├── repos/
│   │   |   ├── repos-reducer.ts
│   │   |   ├── repos-saga.ts
│   │   |   ├── repos-selector.ts
│   │   |   ├── repos-types.ts
│   │   ├── root-reducer.ts
│   │   ├── root-saga.ts
│   │   ├── root-saga.ts
│   |   ├── store.ts

## Notable Technical Decisions

### React Component Type, Class vs Functional

Based on the current requirements of the application, React Functional components are used exclusively. Currently, there is no need to leverage the life cycle hooks made available with React Class components.

### State Management, React Context vs any flavor of Redux

The requirements of the this application could have easily been achieved using simply React Context, but I decided on a Redux library to demonstate how a more complicated application might be architected.

### Data Api Abstraction

The data API is request and response handling is abstracted in a service. The client does not need to have knowlege about the schema of the raw data or details regarding the response handling. The client simply has an agreed upon contract with the service. The encapsulates the logic and responsibility of interacting with the Github API service and transforming the response data in the repos api service.

The schema of the response to the client is a simple example of a data driven UI. The response is instructing what layout type to use to display the data.

## Running the app

In the project root directory, entering the following commands in the terminal

### install dependencies by running `npm install` or `yarn` 

### start the application by running `npm start` or `yarn start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### run tests with `npm test` or `yarn test`
Launches the test runner in the interactive watch mode.

## Future improvements

--- pagenation for the repositories
--- unit tests
--- UI fit and finish
--- responsive / adaptive UI ???
--- Make the Table component more generic
--- Error handling
--- Form validation
--- Security
--- Internationalization
--- Accessibility
--- Client side caching
--- Loading state handling
