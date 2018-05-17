# <a href="https://goofy-goldstine-cd55e2.netlify.com/" target="_blank">Scene Partner</a>

## Introduction
Scene Partner is a line reading app that lets you run lines using your device.
After logging in, the user can save, modify, and delete scenes. Once you've created a
scene, you can switch to the 'Run Scene' mode where simply clicking on a line will
have your device read that line aloud. You can also try this feature out on the
home page example.

## Technologies
This API is part of a full-stack express application using Node.js, a MongoDB database,
and React as a frontend framework (MERN stack). The backend uses the Mongoose library to
create models for user data, and to communicate with the database. The API is RESTful
and CORS enabled. User authentication is handled with the Passport.js framework, and
passwords are encrypted with bcrypt before being stored as secure hashes on a MongoDB
database hosted on mLab.

This repo houses the app's frontend code, which is written using React-Redux architecture.
The account signup and login forms make use of redux-form to facilitate simple submission
and feedback display. Navigation through the app is handled by react-router. User
authentication is persisted across sessions by storing the current authorization token
in the browser's local storage, and then checking for them when the redux store is created.

## Screenshots
Here are screenshots of the app's landing page:
![Landing Page one](https://s3.us-east-2.amazonaws.com/readme.images/SPlanding-page1.png)

![Landing Page two](https://s3.us-east-2.amazonaws.com/readme.images/SPlanding-page2.png)

![Landing Page two](https://s3.us-east-2.amazonaws.com/readme.images/SPlanding-page3.png)
