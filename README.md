# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### App Structure
Inside src we have the following structure:
-entities<br>
-feed<br>
-hooks<br>
-styled-components

#### entities
Entities hold the shared interfaces in the app

#### feed
Feed holds the structure of the logical components in the app. It keeps also an inner hierarchy for better readability.
For example - Inside NewTweet folder you will have all the components that assembles the new tweet panel inside separate folders.

#### hooks
Shared hooks are saved in this neutral location

#### styled-components
Here are kept the atomic UI building blocks as styled components. Such as button, container, Date, Separator etc..