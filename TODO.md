## Features ##

### Additions:

* ~~add padding to cards~~
* ~~Add time/day to each <DataBlockCard />~~
* ~~live time~~
* alternate colors for each row item in card to easily follow across
* ~~attach an icon mapped to summary per card~~
* ~~40.0% -> 40%~~
* dropdown to select location
* ~~move summary and dropdown out of DataBlock, summary should only display once
  , dropdow is not per DataBlock, move current.summary from datablock to header~~
* mak header slightly smaller in height
* ~~improve More button~~
* inline TODOs
* settings
  * option to select °C or °F
* ~~live clock in <Header /> with a "last updated: 7 mins ago" below it and button to refresh~~
* ~~page to limit N elements per scroll (like insta) until we get to the end (limit) of available data~~
* add a refresh button to refetch the data

### Refactoring:

* localTime is only used by <Header />, cut the overhead by making it a
state property of <Header />
* cleanup components/DataBlockCard.js
* rename state.localTime -> state.freshTime
