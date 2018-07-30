# ASP.NET Core 2 & React.JS 16.4.1 with Server Side Rendering

This project is a proof of concept to prove that server side rendering is possible for multiple elements on a page, i.e. not a SPA application.

## Requirements

This application has been tested with [Node.JS version 8.11.3](https://nodejs.org/en/download/releases/), and [.Net Core 2.1](https://www.microsoft.com/net/download/dotnet-core/2.1).

## Running the website

- Install dependencies with `yarn install` or `npm install`.

### Local Development

To run the website in development mode run `yarn dev`.

When running the website this will output warnings and display error messages from React.js as well as allow the use of [the React.js devtools](https://github.com/facebook/react-devtools).

### Production Build

To run the website in production mode run `yarn prod`.

This will build the required assets and the run the website in production mode. No warnings or error messages will be displayed, and [the React.js devtools](https://github.com/facebook/react-devtools) will be disabled.

## Unit tests

The unit tests are written using the Jest framework.

1. Run the unit tests with `yarn test`
