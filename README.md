# Mono Repo Architecture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.
##### Create Structure
ng new mono-repo-architecture --createApplication=false
##### Create Applications
ng g application todox --prefix=todox --routing=true --style=css\
ng g application todoy --prefix=todoy --routing=true --style=css

##### Run Applicaton
ng serve todoy -o --port 7100 

##### Build in Production Envirement
ng build todox --prod\
or\
ng build todox --prod --watch

##### Have a local http server to test
install http server\
npm install http-server -g

Run production app\
http-server -p 8000 -c-1 dist/todox

ng build todox --prod --watch\
and update production app


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
