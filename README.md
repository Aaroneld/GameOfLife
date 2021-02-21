# Conway's Game of Life

**Play it here! - https://conwaysgame.netlify.app/**

## Description 

Conway's Game of Life is a type of cellular automation¹ whereby cells arranged in a grid are informed of the nature (state) of their environment and can make decisions based on that "knowledge" according to an a priori ruleset without outside interference. The Game of Life is "Turing complete"², and can be used to derive any currently known [Turing Machine](https://simple.wikipedia.org/wiki/Turing_machine).

This project allows users to play the game via a web application interface and is a case study for implementing interactive games on the web via HTML Canvas and React.

<sub>¹ A cellular automaton is a collection of "colored" cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states of neighboring cells. The rules are then applied iteratively for as many time steps as desired</sub>

<sub>² Turing complete is a term used in computability theory to describe abstract machines, usually called automata. Such an automaton is Turing complete, if it can be used to simulate a Turing machine. It is also called computationally universal. Most modern programming languages are Turing-complete</sub>


## Installation 

To install simply pull the code to your local machine, run `npm i` to install the necessary dependancies, and serve locally with `npm start`

## Problem Domain 

The problem was thus, implement Conway's Game of Life as a robustly, interactive, responsive, single page application according to the game's ruleset. Give the user the information necessary to understand how to set the game in motion. Allow users a selection of functions which make the game fundamentally interactive, as well as ones which can be used to alter the game in more complex and/or specifically visual ways.

### The Rules
 
| For a cell that is 'populated' | For a cell that is 'unpopulated' |
| ----------------------------------  | ------------------------------------- |
|-- Each cell with one or less neighbors dies, as if by solitude|-- Each cell with three neighbors becomes populated|
|-- Each cell with four or more neighbors dies, as if by overpopulation|
|-- Each cell with two or 3 three neighbors survives|

### Basic Functions 

1. Allow a user to turn grid cells on and off

2. Allow a user to start the game

3. Allow a user to pause the game

4. Allow a user to reset the game 

### Additional Functions

1. Allow a user to generate a randomized input of cells

2. Allow a user to affect aesthetic changes to the game display (font/color)

3. Allow a user to  pick from a selection of preset starting states 

## Implementation Details 

This application is implemented completely client-side as a single page application there is no need for long term data persistence so access to a remote server is not necessary.   

### Tech Stack
1. React
2. HTML Canvas 

### Additional APIs
1. Styled Components
3. GSAP

#### Qualifications 

`React` is a front-end JavaScript library whose purpose is to help developers rapidly build user interfaces, its ability to represent chunks of HTML in componentized functions which have the ability to reference internal state is endemically useful to the goal at hand. A game like the Game of Life naturally relies on state which evolves over time React can help to keep track of this. Furthermore React aids in code organization which helps to compartmentalize the different aspects of the application so that they can be developed in relative isolation until the moment they are to be integrated. 

`HTML Canvas` will be the technology used to handle the visual aspects of the game, in essence the rendering of the game state to the screen within the constraints of aesthetic considerations. HTML Canvas is hardware accelerated which helps with performance concerns and provides the developer with a robust interface that facilitates painting to the screen according to code logic.

`Styled Components` allow a developer to bring CSS into componentized functions. Furthermore their structure can be shaped to have a 1:1 correspondence between a React component and its styling using a LESSlike syntax. This is organizationally useful and aids in coding efficiency.

`GSAP` is an animation library which helps to standardize DOM-based animation across web browsers including with the use of SVGs. Furthermore it provides a programming interface that makes complex animations more simple then if they were implemented purely in CSS 

