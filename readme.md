# ASP.NET Core 2 web application with Vue.JS 2.5 and Server Side Rendering

This project is a proof of concept to prove that server side rendering is possible for multiple elements on a page, i.e. not a SPA application.

## Requirements

This application requires [Node.JS version 8.11.3](https://nodejs.org/dist/latest-v8.x/), and [.Net Core 2.1](https://www.microsoft.com/net/download/dotnet-core/2.1).

## Running the website

- Install dependencies with `yarn install` or `npm install`.

### Local Development

To run the website in development mode run `yarn dev` or `npm run dev`.

When running the website this will output warnings and display error messages from React.js as well as allow the use of [the React.js devtools](https://github.com/facebook/react-devtools).

### Production Build

To run the website in production mode run `yarn prod` or `npm run prod`.

This will build the required assets and the run the website in production mode. No warnings or error messages will be displayed, and [the React.js devtools](https://github.com/facebook/react-devtools) will be disabled.
