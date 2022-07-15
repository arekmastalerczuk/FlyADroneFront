# Getting Started with app Dronowisko - świat okiem drona (frontend)

## LIVE demo of this project is available on [armast.networkmanager.pl](https://armast.networkmanager.pl "Dronowisko - the world through the eye of a drone")

![Main site view](./public/main-page.png?raw=true "Screen from app")

## About the project

This app allows displaying and adding interesting places on the map, which are worth visiting and where to fly a drone.

After entering a location in the search engine, previously added places with their brief description are returned from
the database (MySQL). The results in a given town can be further narrowed down by typing the street.

The application is connected to the [IMGW weather API](https://danepubliczne.imgw.pl/apiinfo). If a town has a weather
station operated by IMGW, the latest available weather data is displayed for it.

![Search results with weather data](./public/searching.png?raw=true "Screen from search engine")

The weather data is validated and the corresponding information appears about whether the current weather conditions are
good or bad for flying a drone.

## Upcoming plans for the expansion of the project:

* Implementation for adding (support with middleware 'multer' on backend prepared) and displaying photos of places,
* Implementation for user registration and login (Passport JS),
* Enabling addition / modification / deletion of added places only for logged-in users (and only for 'own' places),
* Finding a free API with more meteo points (stations) and implementing it,
* Mobile version of app,
* Refactoring the code.

## The project used:

* Node.js,
* Express framework,
* MySQL database,
* TypeScript (backend + frontend),
* React library.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build:unix`

Builds the app for production to the `build` folder on unix systems.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run build:win`

Builds the app for production to the `build` folder on Windows.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
