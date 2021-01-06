# Conways Game of Life

Conway's Game of Life is a zero player game that plays out on a 2-dimesional grid filled with active and non-active cells of equidistant size. The game progresses by looking at the current state of each cell, and deriving a new one from it according to these rules.

#### For a cell that is 'populated'

-- Each cell with one or less neighbors dies, as if by solitude

-- Each cell with four or more neighbors dies, as if by overpopulation

-- Each cell with two or 3 three neighbors survives

#### For a cell that is 'unpopulated'

-- Each cell with three neighbors becomes populated

This game is a type of cellular automation whereby cells in the grid are informed of the nature (state) of their environment and can make decisions based on that "knowledge" according to an a priori ruleset without outside interference. The Game of Life is Turing complete, and can be used to derived any currently known Turing Machine.

This take on Conway's game attempts to add some flair to the whole experience whilst demonstrating a general method for implementing the managing of cellular automata and the printing of it to the screen using HTML canvas. 
