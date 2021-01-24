import styled, { keyframes } from 'styled-components';

const flipIn = keyframes`
  0% {
    transform: rotateX(80deg);
    -webkit-box-shadow: 55px 65px 24px 1px rgba(0,0,0,0.25);
    -moz-box-shadow: 55px 65px 24px 1px rgba(0,0,0,0.25);
  }
  100% {

    transform: rotateX(0);
    -webkit-box-shadow: 14px 29px 24px 1px rgba(0,0,0,0.25);
    -moz-box-shadow: 14px 29px 24px 1px rgba(0,0,0,0.25);
   
  }
`

const Container = styled.div`

        animation: ${flipIn} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        
        position: relative;
        margin: auto;
        border-radius: 25% 30px 25% 30px;

        box-shadow: 14px 29px 24px 1px rgba(0,0,0,0.25);

        .openingAnim {

            &::after{
            border-radius: 25% 30px 25% 30px;
            z-index: 10;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: black;
            content: '';
            opacity: 0;

            }



            &::before{
            z-index: 11;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 300%;
            color: white;
            font-family: Monoid;
            text-decoration: underline;
            content: 'Click Me';
            opacity: 0;

            }

            &:hover {
              &::before {
                opacity: 1
              }

              &::after{
              opacity: .6
              }
            }


        }

        div {

          position: relative;
          z-index: 0;
          color: transparent
          margin: auto;
          border-radius: 25% 30px 25% 30px;

          canvas {
              border: 1px solid #FFD166;
              border-radius: 25% 30px 25% 30px;
              position: absolute;
              top: 0;
              left: 0;
          }

          #background-layer {
              z-index: 1;
              background: white;
          }

          #action {
              z-index: 2;
              background: none;
              opacity: 1;
          }
        }



`;

export default Container