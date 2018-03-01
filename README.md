# Marvel Character Search

The application allows users to search and bookmark their favorites Marvel characters querying the marvel API to search for characters, and saving bookmarks to local storage.

## Notes

* Character can be bookmarked and un-bookmarked by clicking on the star in the right top corner of a character item.
* Pagination has been enabled and added to the bottom of the page once the search is active.
* The app responsive with pre-defined grid sizes of 4 x 5 for desktops (wider than 1281px), 2 x 10 for tablets (between 768px and 1280px width), and 1 x 20 for mobile phones (narrower than 768px). Browser support was focused and tested on latest Chrome, Firefox, Safari, iOS Safari.
* Reason for writing new local storage middleware instead of using redux-observable, was that reducers should stay pure, therefore dispatching another action for saving to local storage was not an option. Also, save to local storage function is injected when applying middleware, enabling easier unit testing.
* Character data has been moved to a separate reducer and it has been normalized so that there is no data duplication, enabling easier potential data update.
* Tests for the presentational components were done by matching against a shallow snapshot.

## Usage

The app can be started by typing the following in the command line:

```
npm install
npm start
```

For production, it can be built by using the following command:

```
npm run build
```

Running tests can be achieved by using the following command:

```
npm run test
```
