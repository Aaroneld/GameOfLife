import styled from 'styled-components';

const Container = styled.div`
        
        position: relative;
        margin: auto;
        border-radius: 25% 30px 25% 30px;
        -webkit-box-shadow: 14px 29px 24px 1px rgba(0,0,0,0.25);
        -moz-box-shadow: 14px 29px 24px 1px rgba(0,0,0,0.25);
        box-shadow: 14px 29px 24px 1px rgba(0,0,0,0.25);

        display: flex;
        align-items: center;

        div {
                width: 100%;
                margin: 0 20%;
                
                svg {

                        margin: 0 5%;
                }
        }
   
`

export default Container