[![Build Status](https://travis-ci.com/cdgeelen/widm-2007.svg?branch=master)](https://travis-ci.com/cdgeelen/widm-2007)

# Introduction

This widm-2007 Ember application is build for use during a Wie Is De Mol event, based
on the famous Dutch television show, [Wie Is De Mol](https://wieisdemol.avrotros.nl/home/).

It is designed for the needs and requirements of the 2007 Electrical Engineering study group
of the Technical University of Eindhoven, but can be used to fit any other group.

Below are details on how to build/run this application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)
* [Firebase CLI](https://firebase.google.com/docs/cli/) (for deploying the application to Firebase)

## Installation

```
git clone <repository-url>
cd widm-2007
yarn
```

## Run the application

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).
* Tests can also be run in the command line with `ember test`

### Deploying to firebase

```
firebase deploy
```

This will run `ember deploy firebase`, building the ember app with `environment=production`
to the `firebase-deployment` folder, after which it will deploy this folder to the firebase
project specified by your firebase settings in `.firebaserc` (not checked in, user-specific)