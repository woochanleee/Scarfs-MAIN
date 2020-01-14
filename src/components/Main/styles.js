import styled from 'styled-components';
import Background from '../../Imgs/Main/Background.png';
export const MainBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${Background});
    background-size: cover;
    > header {
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        > div {
            width: 80%;
            height: 70%;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 0 auto;
            > h1 {
                display: flex;
                color: #ffffff;
                margin: 0%;
            }
            > ul {
                margin: 0;
                padding: 0;
                display: flex;
                > li {
                    list-style: none;
                    > a {
                        text-decoration: none;
                        color: #ffffff;
                    }
                    & ~ & {
                        margin-left: 24px;
                    }
                }
                li ~ li {
                    margin-left: 10vmax;
                }
            }
        }
    }
`;