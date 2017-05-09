# simple-notes
Very simple app to inert and edit some notes. There is a main page with a list of all the notes and an edit page to edit single notes.

Built using **Angular 2**, Typescript and SASS.

## Setup
To get up and running as soon as possible I used the angular starter app at [https://github.com/preboot/angular-webpack](https://github.com/preboot/angular-webpack). It uses **Webpack 2.x** for all bundling and building purposes. 

In the /dist folder you can find the built package; if you prefer you can run `npm install` (NodeJS and NPM are requested).
After installing you can use the following commands:
```
# start a live server at http://localhost:8080 
$ npm start

# build files in /dist folder 
$ npm run build
```

## App structure
The app is really basic, the most important files are: 
-- `src/app/all-notes/all-notes.component.ts`, which show the list of notes and handles adding new notes;
-- `src/app/single-note/single-note.component.ts`, which handles the edit of a single note (there is a simple control here which prevent from saving if no title is inserted);
-- `src/app/shared/notes.services.ts`, which handles all business logic for notes operations.

## Storage data
The app uses **LocalStorage** for a kind of data persistance through sessions.

## Styling
Due to time constraints style is pretty rough, the main style files are the one in components folders an under `src/style`.

## Browser Compatibility
Tested (briefly) with the latest versions of Firefox, Chrome and Edge.
