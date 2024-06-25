# BlaBla'drar

## Introduction
This carpooling application allows users to search for and suggest rides for carpooling. It is built using React for the front-end and Node.js for the back-end.

## Features
- User registration and login
- Creation, modification and deletion of journeys
- Modification of your user profile
- Internal messaging

## Prerequisites 
Before you begin, make sure you have the following installed:
- [Node.js](http://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Installation

### Clone the Repository

```bash
git clone https://github.com/yout-user/your-repository.git
cd your-repository
```

### Install dependencies
For the front-end
```bash
cd client
npm install
```

For the back-end
```bash
cd server
npm install
```
### Configure environment variables
Create a `.env` file in the `server` directory and fill it with your configurations:

DB_HOST=localhost

DB_USER=root

DB_PASS=password

DB_NAME=covoiturage

### Launch services
Launch the Backend Server
```bash
cd server
npm start
```

Launch the Frontend Application
```bash
cd client
npm run dev
