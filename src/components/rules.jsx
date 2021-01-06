import React from 'react'

import Container from '../styles/rules';

export default function Rules() {
    return (
        
            <Container>
                <h2>The Rules</h2>

                <div id="rules">
                    <div id="p1" className="paragraph">
                        <h3>For a cell that is 'populated'</h3>
                            <p> -- Each cell with one or less neighbors dies, as if by solitude</p>
                            <p> -- Each cell with four or more neighbors dies, as if by overpopulation</p>
                            <p> -- Each cell with two or 3 three neighbors survives</p>
                    </div>

                    <div id="p2" className="paragraph">
                        <h3>For a cell that is 'unpopulated'</h3>
                            <p> -- Each cell with three neighbors becomes populated</p>
                    </div>
                </div>

                <div id="description">
                    <p>Conway's Game of Life is a zero player game that plays out on a 2-dimesional
                        grid filled with active and non-active cells of equidistant size. 
                        The game progresses by looking at the current state of each cell, and deriving a new one from it according to
                        the rules stated above. 
                    </p>

                    <p>This game is a type of cellular automation whereby cells in the grid are informed 
                        of the nature (state) of their environment and can make decisions based on that "knowledge"
                        according to an a priori ruleset without outside interference. The Game of Life is Turing complete,
                        and can be used to derived any currently known Turing Machine.
                    </p>
                </div>
            </Container>
    )
}
