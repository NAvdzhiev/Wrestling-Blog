# WrestlingBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

///////////////////////////////////////////////////

## Code Structure
Server folder - contains:
JWT Token middleware,
Models - Post and User
Routes - Post routes and User routes
app.js - Backend config file

Header folder - contains:
Header component for navigation

Post folder = contains:
Post Create component: Creating and editing functionality
Post List component: Listing all components + pagination
Post Details component: Listing post details
Post Model: Model for Post 
Post Service: Service for post functionality 

Auth folder = contains:
Login component: Loging user in
Signup component: Register new user
Auth Service: Service for auth functionality
AuthData Model: Model for Authentication
Auth Interceptor: Get token
Auth Guard: Router Guard

AppRoutingModule: Router

## Code functionality
- Posts - Contains the functionality for creating and editing posts.
Unauthentiacted users can read posts but can't add/edit or delete.
Only post creator can edit/delete post.

- Auth - Register + Logn in user.



