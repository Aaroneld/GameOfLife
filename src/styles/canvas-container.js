import styled, { keyframes } from 'styled-components';

import bgImage from '../assets/images/image.png';
import reset from '../assets/images/reset.png';
import pause from '../assets/images/pause.png';
import play from '../assets/images/play.png';
import resetRed from '../assets/images/reset-red.png';
import pauseRed from '../assets/images/pause-red.png';
import playRed from '../assets/images/play-red.png';

import { deviceSize } from './globals';


export default styled.div`

    margin: 4% 0;


    h3 {
        font-family: 'Amarillo';
        margin: 6% 0;
        text-align: center;

        @media ${deviceSize.tablet} {
           margin: 2% 0 3% 0;
        }

        @media ${deviceSize.desktop} {
            font-size: 150%;
        }
    }

    #buttons {

        margin: 5% 5% 0 5%;
        display: flex;
        justify-content: center;  

        button {
            z-index: 4;
            width: 28%;
            padding: 2.5vw 4%;
            margin: 0 2.5%;
            border-radius: 30px;
            border: 1px solid #fa6125;
            color: rgba(0,0,0,0);
            background: #fa6125;
            background-image: url(${bgImage});
            background-size: contain;
            background-blend-mode: screen;
            background-repeat: no-repeat;
            outline: none;
            box-shadow: 4px 8px 8px 0px rgba(0,0,0,0.55);

            &:hover {
                background: white;
                background-repeat: no-repeat;
                background-blend-mode: normal;
                background-position: center;
            }

        }

        #pause {
            background-image: url(${bgImage}), url(${pause});
            background-size: 115%, 40%;
            background-position: center;
            
            &:hover {
                background-image: url(${pauseRed});
                background-size: 40%;
            }
            
        }

        #reset {
            background-image: url(${bgImage}), url(${reset});
            background-size: 100%, 30%;
            background-position: right center, center;
        

            &:hover {
                background-image: url(${resetRed});
                background-size: 30%;
                background-position: center;
            }
            
        }

        #play {
            background-image: url(${bgImage}), url(${play});
            background-size: 105%, 30%;
            background-position: left top, center;

            &:hover {
                background-image: url(${playRed});
                background-size: 30%;
                background-position: center;
            }
        }

        @media ${deviceSize.tablet} {

                justify-content: flex-start;
                margin: 5% 5% 0 1%;

                button {
                    padding: 4% 2%;
                    border-radius: 20px;
                }

                #play {
                    background-size: 115%, 35%;

                    &:hover {
                        background-size: 35%;
                    }
                }

                #pause {
                    background-size: 110%, 45%;

                    &:hover {
                        background-size: 45%;
                    }
                }

                #reset {
                    background-size: 100%, 33%;

                    &:hover {
                        background-size: 33%;
                    }
                }
        }

        @media ${deviceSize.laptop} {

            margin: 5% 0 5% 4%;
        }

        @media ${deviceSize.desktop} {
            
           
            justify-content: center;
            margin-top: 3%;
            margin-left: -5%;

            button {
                padding: 3%;
                width: 20%;
            }

            #play {
                    background-size: 115%, 30%;

                    &:hover {
                        background-size: 30%;
                    }
                }

            #pause {
                background-size: 110%, 40%;

                &:hover {
                    background-size: 40%;
                }
            }

            #reset {
                background-size: 100%, 28%;

                &:hover {
                    background-size: 28%;
                }
                }
        }
    }

    @media ${deviceSize.tablet} {
        margin: 0 0%;
    }

    @media ${deviceSize.laptop} {
        margin-top: 7%;

        
        #buttons {
            margin-top: 7%;

            button {
                padding: 3.5% 0;
                width: 22%;
            }
        }
        
    }

`;