# PWA Online/Offline Budget Tracker

## Description

This budget tracker application allows users to be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

## Table of Contents

- [Built With](#Built-With)
- [Useage](#Useage)
- [Business Context](#Business-Context)
- [Demo](#demo)
- [Deploy](#Deploy) - [Heroku](https://radiant-plains-26555.herokuapp.com/)
- [License](#license)
- [Questions](#questions)

## Built With

- IndexedDB: Offline transaction storage
- Cache Storage: Online transaction storage
- Webpack: Module bundling and minification
- Wepback-pwa-manifest: Webpack plug-in for generating manfiest.webmanifest for PWA (npm package)
- MongoDB: Persistent database storage
- Mongoose: ODM modeling
- Express: Middleware routing
- NodeJS: Javascript runtime environment
- Heroku: Hosting

## Usage

- When your web browser is online, please add transaction’s name and amount into the form, and click the Add Funds button or the Subtract Funds button to create a withdrawal or deposit transaction. The transaction data will be cached in `Cache Storage` (`data-cache-v1`) frontend, and also will be stored in `MongoDB` backend.

- When your web browser is offline, the application is unable to create the withdrawal or deposit transaction in the `MongoDB` backend, it will make a request to `IndexedDB` to store the transaction data in the `pending` object store. When the application comes back online, the data in `IndexedDB` will be cached in `Cache Storage` (data-cache-v1) and will be written to `MongoDB` to be rendered in the `UI` again.

- This application is also be designed as a progressive web application (`PWA`). It can be installed through your web browser or mobile. Here is the screenshot of install function in the web browser as below:

## Business Context

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Demo

![DemoLink](./public/image/PWA-Online-Offline-Budget-Tracker.gif)

## Deploy

This PWA Online/Offline Budget Tracker is deployed on [Heroku](https://radiant-plains-26555.herokuapp.com/).

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

If you have any questions about this application, please feel free to reach me via the link of my [GitHub](https://github.com/aprilyanggarwood) and my Email: <aprilyanggarwood@gmail.com>
