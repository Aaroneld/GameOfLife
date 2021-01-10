import styled from 'styled-components';
import bgImage from '../assets/images/image.png';
import shuffle from '../assets/images/shuffle.png';
import shuffleRed from '../assets/images/shuffle-red.png';

import { deviceSize } from '../styles/globals';
 
export default styled.form`

    
    display: flex;
    flex-flow: column;
    align-items: space-around;
    justify-content: space-around;
    border: 3px solid #7e7a75;
    border-radius: 30px;
    padding: 4%;
    width: 83%;
    margin: 0 auto;
    height: 83%;
    box-shadow: inset 30px -20px 6px -21px rgba(99,97,99,0.2),
    inset -30px 20px 6px -21px rgba(99,97,99,0.2);
    

    label {
        white-space: nowrap;
        text-decoration: underline;
        font-family: 'Monoid';
        font-size: 90%;
        font-weight: bold;
    }

    select {
        
        height: 20%;
        margin: 5% 0;
        width: 100%;
        border-radius: 60px;
        background: #ff9a72;
        text-indent: 3%;
        padding: 2%;
        border: 2px solid black;
        outline: none;
        font-size: 150%;
        color: white;
    }

    #colorSelector {
        color: transparent;

        option {
            color: black
        }
    }

    option {
    }


    button {
        width: 25%;
        align-self: center;
        padding: 2.5% 0;
        margin: 0 1%;
        border-radius: 100px;
        border: 1px solid #fa6125;
        color: rgba(0,0,0,0);
        background: #fa6125;
        outline: none;
        box-shadow: 4px 8px 8px 0px rgba(0,0,0,0.55);
        background-image: url(${bgImage}), url(${shuffle});
        background-size: 0%, 30%;
        background-position: bottom left, center;
        background-repeat: no-repeat;
        background-blend-mode: screen;
        
        
        &:hover {
            background: white;
            background-image: url(${shuffleRed});
            background-size: 30%;
            background-repeat: no-repeat;
            background-blend-mode: normal;
            background-position: center;
        }
        

    }

    @media ${deviceSize.tablet} {
        height: 75vw;
        justify-content: flex-start;
        box-shadow: inset 30px -20px 6px -21px rgba(99,97,99,0.2);
        width: 78%;
        margin-top: 5%;

        div {

            margin-top: 5%;
        
            select { 
            margin: 5% 0 30% 0;
            padding: 5% 0;
            height: 40%;
            text-indent: 10%;
            }

            label {
                font-size: 100%;
                margin-left:2%;
            }
        }

        button {
                width: 66%;
                border-radius: 20px;
                padding: 8% 20%;
                margin-bottom: 4%;
        }

    
    }

    @media ${deviceSize.laptop} {

        height: 80vh;

        &:first-child {
            margin-top: 13%;
        }
        
        div:first-child {
            margin-top: 15%;
        }

        div {
            
            display: flex;
            flex-direction: column;

            label {
                font-size: 80%;
                margin: 0 auto;
            }
        }
     
    }

    @media ${deviceSize.desktop}{
        width: 85%;

        div {

            label {

                font-size: 100%;
            }
        }
    }

`;