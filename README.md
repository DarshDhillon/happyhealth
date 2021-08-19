![happyhealth App Banner](https://i.ibb.co/5Km78Bw/github-hh-banner.png)

### [Link to live site](https://happyhealth.darshdhillon.co.uk/)

## App overview

happyhealth is a health and fitness website that features 3 main aspects: 1. meal suggestions, 2. meditation app, and 3. mock store.

The meal searcher utilises the Edamam food API and allows filtering based on certain criteria (low-fat, high-protein etc.). Results are displayed in a card carousel component, and clicking flips a card over to display the ingredients.

There are 2 videos to choose from in the meditation section. These have been purposely kept short in length for performance (the videos loop after a minute). Custom controls have been added to mute/pause the videos and to switch between the two available.

The web store offers a selection of mock items to purchase. There is a custom made floating shopping cart, and the buy section simulates a typical checkout process.

There is also a workout section with animations and contact page with accordion questions and MapBox dummy address.

## Features

- React Context API with actions and reducers for global state management
- Usage of various React hooks including useRef, useContext, useReducer, and custom hooks
- CSS-in-JS with Styled-components library
- Custom markup and styling (no UI or styling libraries such as Material UI, Bootstrap etc.)
- PropTypes addition for all relevant components
- Fully responsive for desktop, tablet or mobile

## Installation

This application requires [Node.js](https://nodejs.org/) to run.

Install the necessary dependencies, and then start the application:

```sh
npm install
npm start
```

## Notes

Relevant and active keys for both the Edamam and MapBox APIs will be required for the app to function.

![App snapshot](https://i.ibb.co/Z2mnPrv/github-hh-snapshot3.png)
