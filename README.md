# Transport Management System

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.Assignment1


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Running the project

### Requirements
You need to have npm installed. When you download the project or run it in your code editor, run "npm install" command to install all the node_modules. You need to install angular cli to run Angular projects. After installing angular CLI run ng serve command to run the project and follow the steps below to run the project perfectly.

### Google Firebase Databse
First you have to create A google firebase web project. After creating the web project copy the firebase details and paste it in the environments.ts file, under the firebase object. You have to enable the aunthentication (email/password) in your firebase and copy the API key which is visible in the settings or is available in the details you have copied. Paste the API key in the auth.service.ts in signUp() and logIn() methods. You have to replacce "YouAPIKey" with the API key you have copied. As a next step you have to set up the realtime database. Your database for the project has been set up successfully.

### Google Maps API
The destinations component uses a map interface. For that to be visible you have to add your own googel maps API key. You can get it in developers.google. After setting up the API go to credentials and create a API key for the feature. Paste the API key in the app.module.ts under AgmCoreModule.forRoot({}), paste the API key in double quotes.

### You are all set! Run the project.
