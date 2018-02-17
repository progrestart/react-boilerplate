# react-boilerplate
Simple boilerplate based on create-react-app that supports .scss files in your modules and has a React Router 4 out of the box.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). 

The components are under “src” folder and are separated into modules. 

Each module can have its own “.scss” files. 

You can define sass configuration variables in “assets/scss/_global.scss”, mixing under “assets/scss/_mixins.scss” and the sass code that has to be shared throughout the whole application - in “asstes/scss/_main.scss”. 

All “.scss” files are compiled to “assets/css/_main.css” file that is included automatically. 

To compile “.scss” files boilerplate uses “node-sass” compiler. 

Boilerplate uses REACT ROUTER 4. All routes should be defined in “src/components/Router.js”. 

Getting started guide: 

1. Clone the project to your local machine by executing: “git clone https://github.com/progrestart/react-boilerplate".

2. Type “npm i” to install all required dependencies. 

3. Type “npm start” to run node-sass watcher and to start an application. 

4(OPTIONAL). Type “npm build” to build an application for production. 

All further configurations can be found here: https://github.com/facebook/create-react-app
