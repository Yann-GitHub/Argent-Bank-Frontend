# Argent-Bank-Frontend

This repository contains the source code for the Argent Bank Frontend app, a platform that allows users to manage their finances conveniently and securely.

## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/) or [Npm]()
- IDE (VSCode, IntelliJ, ...)

## Getting Started

### Backend Api

The Argent Bank app relies on a backend API to retrieve data and handle authentication. You can find the source code for the backend API at the following URL: https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.

To run the Argent Bank app, you will need to have the backend API running locally as well. Please follow the instructions in the backend API repository's README file to set up and run the API locally. The backend API is responsible for authenticating users and issuing a JWT token.

Once the backend API is up and running, you can start the Argent Bank app by following the instructions in the "Installing" section.

The backend will be available at http://localhost:3001.

### Frontend App

**Dependencies**

This project also has the following dependencies:

```bash
"@fortawesome/fontawesome-svg-core": "^6.4.0",
"@fortawesome/free-regular-svg-icons": "^6.4.0",
"@fortawesome/free-solid-svg-icons": "^6.4.0",
"@fortawesome/react-fontawesome": "^0.2.0",
"@reduxjs/toolkit": "^1.9.5",
"@testing-library/jest-dom": "^5.16.5",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.4.0",
"prop-types": "^15.8.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-modal": "^3.16.1",
"react-redux": "^8.0.5",
"react-router-dom": "^6.11.1",
"react-scripts": "5.0.1",
"sass": "^1.62.1",
"web-vitals": "^2.1.4"
```

Please ensure that you have these dependencies installed and up-to-date before running the app.

**Installing**

- Clone this repository using the following command:

```bash
git@github.com:Yann-GitHub/Argent-Bank-Frontend.git
```

- Install the dependencies by running the command:

```bash
npm install or yarn install
```

**Running the app**

- Runs the app in the development mode by running the command:

```bash
npm start or yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes. You may also see any lint errors in the console.

### Additional API Documentation for Transactions

In addition to the frontend application, we have designed and modeled the API for transactions. To provide a comprehensive understanding of the proposed transaction APIs, we have created a .yalm document conforming to the Swagger format. You can find this document in the file swagger.yaml

The transaction APIs aim to fulfill the following user requirements:

- View all transactions for the current month.
- View detailed information about a specific transaction in a separate view.
- Add, modify, or delete transaction information.
