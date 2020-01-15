import styled from 'styled-components';
import Background from '../../imgs/Main/background.png';
import Background2 from '../../imgs/Main/background2.png';
import scrollDown from '../../imgs/Main/scrollButton.png';
export const MainBackground = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-image: url(${Background}); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0vw 0vh;
    background-color: ${props => props.page === 1 ? '#000000' : '#ffffff'};
    > header {
        height: 9%;
        display: flex;
        justify-content: center;
        align-items: center;
        > div {
            width: 85%;
            height: auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 0 auto;
            > h2 {
                font-family: 'Eras-ITC';
                display: flex;
                color: ${({ page }) => page === 1 ? '#ffffff' : '#000000'};
                transition: linear 300ms;
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
                        font-family: 'Roboto';
                        font-weight: 600;
                        color: ${({ page }) => page === 1 ? '#ffffff' : '#000000'};
                        transition: linear 300ms;
                    }
                    & ~ & {
                        margin-left: 24px;
                    }
                }
                li ~ li {
                    margin-left: 10vw;
                }
            }
        }
    }
    > main {
        height: 75%;
        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            height: 100%;
            margin-left: 8.5vw;
            > section {
                > article {
                    color: #ffffff;
                    font-family: 'Roboto';
                    font-weight: 100;
                    > p, > h1, > h3 {
                        margin: 0;
                    }
                    > p:nth-child(1) {
                        font-size: 20px;
                    }
                    > h1 {
                        font-size: 60px;
                    }
                    > hr {
                        width: 390px;
                        margin: 0;
                    }
                    > p {
                        font-size: 17px;
                        font-weight: 600;
                    }
                    > h3 {
                        font-size: 26px;
                    }
                }
            }
            > aside {
                display: flex;
                flex-direction: column;
                height: 80%;
            }
        }
    }
    > footer {
        height: 16%;
        display: flex;
        justify-content: flex-end;
        padding-right: 56px;
        > img {
            object-fit: contain;
            width: 106px;
            height: 106px;
        }
    }
`;

export const HomeWorkListWrapper = styled('div')`
    margin-top: 48px;
    height: 272px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const HomeWorkItemWrapper = styled('div')`
    width: 350px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    > main {
        display: flex;
        justify-content: space-between;
        height: 100%;
        > h1 {
            font-family: 'Roboto';
            font-size: 25px;
            color: #ffffff;
            margin: 0;
        }
        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            > p {
                font-family: 'Roboto';
                font-size: 10px;
                color: #ffffff;
                margin: 0;
            }
            > span {
                font-family: 'Roboto';
                font-size: 15px;
                color: ${ props => props.submit ? '#1D73FF' : '#FF5700' };
            }
        }
    }
    & ~ & {
        margin-top: 24px;
    }
    > footer {
        display: flex;
        justify-content: space-between;
        > span {
            color: #ffffff;
        }
        > button {
            border: none;
            width: 100px;
            height: 25px;
            border-radius: 25px;
            background-color: ${ props => props.submit ? '#1D73FF' : '#FF5700' };
            color: ${ props => props.submit ? '#ffffff' : '#000000' };
        }
    }
`;

export const HomeWorkStateBlock = styled.div`
    display: flex;
    align-items: flex-start;
    opacity: ${({ page }) => page === 1 ? '1' : '0'};
    transition: linear 300ms;
    > div:nth-child(2) {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
        right: 48px;
        > h4 {
            font-family: 'Roboto';
            color: #ffffff;
            margin: 0 16px 0 0;
        }
        > img {
            object-fit: contain;    
        }
    }
`;

export const ScrollStateBlock = styled.div`
    width: auto;
    height: 33%;
    display: flex;
    justify-content: flex-end;
    > div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        right: 27px;
        bottom: 20px;
        > img {
            object-fit: contain;
        }
        > div {
            width: 26px;
            height: 15.99px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            > div:nth-child(1) {
                width: ${({ page }) => page === 1 ? '26px' : '21px'};
                height: ${({ page }) => page === 1 ? '3.24px' : '2.5px'};
                background-color: ${({ page }) => page === 1 ? '#FF5700' : '#2E2E2E'};
                transition: width, height, background-color, linear 300ms;
            }
            > div:nth-child(2) {
                width: ${({ page }) => page === 2 ? '26px' : '21px'};
                height: ${({ page }) => page === 2 ? '3.24px' : '2.5px'};
                background-color: ${({ page }) => page === 1 ? '#B7B7B7' : '#FF5700'};
                transition: width, height, background-color, linear 300ms;
            }
        }
    }
`;

export const MyProfileBlock = styled.div`
    width: 250px;
    height: 106px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding: 8px 16px 12px 16px;
    box-sizing: border-box;
    color: #ffffff;
    margin-right: 30px;
    > h3 {
        font-family: 'Roboto';
        font-size: 20px;
        margin: 0;
    }
    > section {
        display: flex;
        justify-content: space-between;
        width: 100%;
        > article {
            display: flex;
            flex-direction: column;
            > span:nth-child(2) {
                color: #FF5700;
            }
        }
    }
`;

export const ScrollButton = styled.button`
    width: 42px;
    height: 39px;
    border: none;
    padding: 0;
    background-image: url(${scrollDown});
    background-color: transparent;
    position: absolute;
    bottom: 5%;
    left: 50%;
    object-fit: contain;
    cursor: pointer;
    outline: none;
`;

export const HomeWorkBoardWrapper = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 1274px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h1 {
        font-family: 'Roboto';
        font-size: 45px;
        margin: 0;
    }
    > hr {
        width: 85px;
        height: 5px;
        background-color: #FF5700;
        border: none;
        margin: 0;
    }
`;

export const HomeWorkTable = styled.table`
    width: 100%;
    background-color: #ffffff;
    > thead {
        > tr {
            border-top: 3px solid #858585;
        }
    }
    > tbody {
        > tr {
            border: 1px solid #858585;
        }
    }
`;

export const HomeWorkBoardItemBlock = styled.tr`

`;