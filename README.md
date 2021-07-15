# MyStore

MyStore is Angular application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Table Of Contents

- [MyStore](#mystore)
  - [Table Of Contents](#table-of-contents)
  - [Features](#features)
  - [Development server](#development-server)
  - [Code scaffolding](#code-scaffolding)
  - [Build](#build)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)
  - [Further help](#further-help)

## Features

- Shows a list of products (either from provided .json)
- Shows a product details view when clicked on product
- Add products to cart, remove them there and checkout the order

## Development server

I am using `json-server` to simulate a server from json file which contain the data so to run the project please use `yarn start` to run the server/client at the same time and please don't use `ng serve` as now you will run frontend without backend json file

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
