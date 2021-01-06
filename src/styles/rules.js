import styled from 'styled-components';

import { deviceSize } from './globals';

export default styled.div`

  

    h2 {
        text-decoration: underline;
        margin: 4% 0;
        font-weight: 800;
        text-align: center;
    }

    #rules {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        border-bottom: solid 2px black;
        flex-basis: 90%;
        font-weight: 600;

        div {
            width: 90%;
            padding: 0 2% 2% 2%;

            h3 {
                margin: 4% 0;
                white-space: nowrap;
            }

            p {
                margin: 4% 0;
                line-height: 150%;
            }
        }

        #p1 {
            
            border-bottom: 1px solid black;
        }
    }

    #description {

        background: #f58356;
        color: white;
        padding: 2%;
        

        p {
            text-align: left;
            line-height: 200%;
            font-weight: 700;
            font-size: 80%;
            margin: 0 4%;
            margin-bottom: 4%;
        }
    }

    @media ${deviceSize.tablet} {
        border-top: 1px solid black;
        width: 95%;
        margin: 2% auto;

        h2 {
            margin: 3% 0 2% 0;
            font-size: 150%;
            font-weight: 600;
        }

        #rules {

            flex-direction: row;

            div {

                p {
                    margin: 5% 0;
                    line-height: 140%
                }
            }

            #p1 {
                border: none; 
                border-right: 1px solid black;
            }

            #p2 {
                align-self: flex-start;
            }
        }

        #description {
            p {
                font-size: 110%;
                margin: 0;
                margin-bottom: 2%;
            }
        }
    }

    @media ${deviceSize.laptop} {
        max-height: 86vh;
        width: 92%;
        border-top: none;
        margin-top: 5%;

        #rules {
            div {
                width: 50%;

                h3 {
                    font-size: 100%;
                    line-height: 170%;
                    white-space: pre-wrap;
                    font-weight: 800;
                    margin-bottom: 10%;
                }

                p {
                    line-height: 130%;
                }
                
            }
        }

        #description {

            
            p {
                    font-size: 65%;
            }
                
            }
    }

    @media ${deviceSize.laptopL} {

        width: 95%;
        margin-left: .5%;
        margin-top: 5%;

        #description {
            p {
                font-size: 85%;
                line-height: 170%;
            }
        }
    }

    @media ${deviceSize.desktop} {

        margin-left: 2%;
        margin-top: 6%;

        #rules {


            div {

                h3, p {
                    font-size: 113%;
                }
            }     
        }

        #description {

            min-height: 1px;
            max-height: 45vh;


            p {
                font-size: 117%;
            }
        }
        
     
    }

`;