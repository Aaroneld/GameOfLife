import styled from 'styled-components';
import bgImage from '../assets/images/image.png';

import { deviceSize } from './globals';

export default styled.div`

            background: #ff5714;
            color: white;
            height: 10vh;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0 0 0 60%;
            box-shadow: -8px 2px 30px 2px rgba(110,110,110,1);
            background-repeat: stretch; 
            background-blend-mode: screen;
            background-image: url(${bgImage});
            overflow-y: hidden;

            &:before {
                content: "";
                height: inherit;
                border-radius: inherit;
                background-size: cover;
                overflow-y: hidden;
                opacity: .2;
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
           
            }

            h1 { 
                margin: 0;
                background: rgba(255,87,20, .8);
                padding: 10% 3%;
                overflow-y: cover;
                font-family : ThinDesign;
                font-size: 250%;
                font-weight: 500;
                text-shadow: -4px 0px 0px rgba(92, 94, 94, .5);
                text-decoration: underline;
                letter-spacing: 2.5%;
                word-spacing: -3px;
                
            }

            @media ${deviceSize.tablet} {

                h1 {
                    font-size: 400%;
                    letter-spacing: 2px;
                }
            }
`;