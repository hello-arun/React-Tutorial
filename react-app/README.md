# React App

***To see how this react-app was initiated go to [README.md](../README.md)***

## File and Folder Structure

### package and package-lock.json

`package.json` and `package-lock.json` contains all the required module information. These modules are required and properly set-up to run the react app. By default `create-react-app` installs all these packages first time while setting up. 

If you have these files and want to setup the development environment later you can use 
```bash
cd react-app
npm install
```

This will setup the dev env for you.

### `public` folder

It has `index.html` file. `index.html` containes a div with id `"root"`. This is where the react application is going to appear.

```html
<div id="root"></div>
```
### `src` folder

we have by default a basic `app` component(As everything in react is a component). By default this app component is resposible for readymade website-view that comes by default when we create app with `create-react-app`.

***Some information about files and folder was discussed. But it will be more informative if we view browse each file and folder before proceeding to next chapter.***

## How to run

To Runs the app in the development mode.\

```bash
cd react-app
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to build

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Switch to `Chap-20-Create-React-Component` to create your first react component.
