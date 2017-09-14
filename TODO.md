## Features ##

In order of time it will need to complete (guestimation).

* add padding to cards
* ~~Add time/day to each <DataBlockCard />~~
* dropdown to select location
* ~~move summary and dropdown out of DataBlock, summary should only display once
  , dropdow is not per DataBlock, move current.summary from datablock to header~~
* live clock in <Header /> with a "last updated: 7 mins ago" below it and button to refresh
* pagination to limit N elements per scroll (like insta) until we get to the end (limit) of available data
* inline TODOs

1. move dropdown (rename -> DataBlockSelector) and summary
2. pagination (use inspector to make sure the previous (keys) arent rerendered)
3. live clock
4. work on prettifyend and simplyfing content in cards
