# ClearScore Score Indicator Carousel

A simple dashboard featuring an animated carousel that displays information about a test user's credit score report.

## Setup
##### Prerequisites
* Node version >= 9.3.0
* Yarn is used as the package manager

#### Running locally
* Clone or download this project
* Enter `cd clearscore-score-indicator-carousel/carousel` to navigate to the core project directory
* Enter `yarn start:webpack`
* In a new terminal window/tab, enter: `yarn start:dev`
* In your browser, go to: `http://localhost:3000/`

#### Tests
* Enter `yarn test` to run all tests (also supports watch mode: `yarn test --watch`)

## Improvements
* Determine how to time the animation of slide arcs so that they are drawn when their slide is being displayed
* Add a bouncing effect to the end of the animation of the arc
* Add bidirectional slide navigation

## Thoughts
Having built carousels in jQuery, it was really enjoyable to apply React features and component-based thinking to solving a classic UI problem in a novel way. I do wonder if the design model of having a single running animation mapped over synchronized reordering of slides is scalable, particularly with regard to timing other simultaneous animations (such as the drawing of arcs).

Separately, being able to click to advance to the next slide is a useful feature, but feels incomplete without the able to navigate through slides bidirectionally.

## Technologies
* React
* ES6
* SCSS
* Jest + Enzyme
* ESLint (Airbnb)

## Acknowledgements
Thanks to all the contributors of [react-circle](https://github.com/zzarcon/react-circle) for creating such a clean solution for drawing circles with SVG!
