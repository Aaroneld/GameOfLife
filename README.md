# Conways Game of Life

## Problem Domain 

Conway's Game of Life is a zero player game that plays out on a 2-dimesional grid filled with active and non-active cells of equidistant size. The game progresses by looking at the current state of each cell, and deriving a new one from it according to these rules.

The problem is thus, implement Conway's game of life as a robustly interactive single page application according to the game's ruleset. Give user the information necessary to understand how to set the game in motion. Allow users a selection of functions which make the game fundamentally interactive, as well as ones which can be use to alter the game in more complex and/or specifically visual ways.

### The Rules
 
| For a cell that is 'populated' | For a cell that is 'unpopulated' |
| ----------------------------------  | ------------------------------------- |
|-- Each cell with one or less neighbors dies, as if by solitude|-- Each cell with three neighbors becomes populated|
|-- Each cell with four or more neighbors dies, as if by overpopulation|
|-- Each cell with two or 3 three neighbors survives|

### Description

Conway's Game of Life is a type of cellular automation* whereby cells arranged in a are informed of the nature (state) of their environment and can make decisions based on that "knowledge" according to an a priori ruleset without outside interference. The Game of Life is "Turing complete**", and can be used to derived any currently known [Turing Machine](https://simple.wikipedia.org/wiki/Turing_machine).

<sub>*A cellular automaton is a collection of "colored" cells on a grid of specified shape that evolves through a number of discrete time steps according to a set of rules based on the states of neighboring cells. The rules are then applied iteratively for as many time steps as desired</sub>

<sub>**Turing complete is a term used in computability theory to describe abstract machines, usually called automata. Such an automaton is Turing complete, if it can be used to emulate a Turing machine. It is also called computationally universal. Most modern programming languages are Turing-complete</sub>

### Basic Functions 

1. Allow a user to turn grid cells on and off

2. Allow a user to start the game

3. Allow a user to pause the game

4. Allow a user to reset the game 

### Additional Function

1. Allow the user to generate a randomize input of cells

2. Allow the user to affect aesthethic changes to the game display (font/color)

3. Allow to pick from a selection of preset starting states 
