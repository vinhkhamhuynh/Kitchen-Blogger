# Kitchen-Blogger

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)   [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)

## Description
This is a recipe sharing blog post application. The application allows users to login and view and comment on recipes posted by other users. The user can also post, edit or delete their own recipes. One of the main features of this application is the ability of all logged in users to instant message each other in real time using the chat box.

This application was built using the **Model-View-Controller (MVC)** paradigm. Node.js and Express.js were used to create a RESTful API, Handlebars.js was used as the template engine, MYSQL and Sequelize ORM were used for the database, express-session and cookies were used for authentication, and socket.io was used to create the chatbox.

## User Story

```md
AS A cooking enthusiast
I WANT to view, share, and comment on recipes with other cooking enthusiasts
SO THAT I can cook delicious meals for my family and friends
```

## Table of Contents
* [Installation](#installation)
* [Technologies Used](#technologies-used)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Dev Team](#dev-team)
  
## Installation

Deployed Application Link: https://kitchenblogger.herokuapp.com/

To run application locally:
Clone git repository and run `npm install` to install all dependencies. Launch MySQL workbench and create table. Run `npm run seed` to seed the database and run `npm start` to start the server. Go to localhost:3001 and enjoy. 

## Technologies Used

* [Express](https://www.npmjs.com/package/express)
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
* [MySQL 2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [express-session](https://www.npmjs.com/package/express-session)
* [socket.io](https://www.npmjs.com/package/socket.io)

## Usage

![Demo for Kitchen Blogger](./public/images/Kitchen_Blogger.gif)

## Contributing
See the [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

## License
MIT License 

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

## Dev Team
* [Gopal Patel](https://github.com/patelg1)
* [Vinh Huynh](https://github.com/vinhkhamhuynh) 
* [Zakk Haug](https://github.com/zakklikeslamps)
* [Stephanie Murphy](https://github.com/smurphy823)