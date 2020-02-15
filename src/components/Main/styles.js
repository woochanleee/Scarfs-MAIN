import styled from 'styled-components';
import Background from './img/background.png';
import Background2 from './img/background2.png';
import scrollDown from './img/scrollButton.png';
import scrollUp from './img/scrollUpButton.png';
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
                        margin-bottom: 8px;
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
            display: inline-block;
            font-family: 'Roboto';
            font-size: 20px;
            color: #ffffff;
            margin: 0;
            margin-top: 2px;
            width: 216px;
            overflow: hidden;
            height: 48px;
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
                margin-top: 8px;
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
        > div {
            border: none;
            width: 100px;
            height: 25px;
            border-radius: 25px;
            text-align: center;
            line-height: 25px;
            background-color: ${ props => props.submit ? '#1D73FF' : '#FF5700' };
            color: ${ props => props.submit ? '#1D73FF' : '#FF5700' };
            > span {
                font-family: 'Roboto';
                font-size: 12px;
                font-weight: bold;
                color: ${ props => props.submit ? '#ffffff' : '#000000' };
            }
        }
    }
`;

export const HomeWorkStateBlock = styled.div`
    display: flex;
    align-items: flex-start;
    opacity: ${({ page }) => page === 1 ? '1' : '0'};
    transition: linear 300ms;
    height: 272px;
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
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    padding: 8px 16px 12px 16px;
    box-sizing: border-box;
    color: #ffffff;
    margin-right: 30px;
    > h3, > h3 > pre {
        font-family: 'Roboto';
        font-size: 20px;
        margin: 0;
    }
    > section {
        display: flex;
        justify-content: space-between;
        width: 100%;
        > article:nth-child(1) {
            display: flex;
            flex-direction: column;
            width: 128px;
            overflow: hidden;
            > span:nth-child(2) {
                color: #FF5700;
            }
        }
        > article:nth-child(2) {
            display: flex;
            flex-direction: column;
            > span:nth-child(2) {
                color: #1D73FF;
            }
        }
        > article > span:nth-child(2) {
            font-family: 'Roboto';
            font-size: 15px;
            font-weight: bold;
        }
    }
`;

export const ScrollButton = styled.button`
    width: 42px;
    height: 39px;
    border: none;
    padding: 0;
    background-image: url(${({ page }) => page === 1 ? scrollDown : scrollUp});
    background-color: transparent;
    position: absolute;
    bottom: 5%;
    left: 50%;
    object-fit: contain;
    cursor: pointer;
    outline: none;
    transform: translateX(-50%);
`;

export const HomeWorkBoardWrapper = styled.div`
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    width: 1200px;
    height: auto;
    margin-bottom: 13vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h1 {
        font-family: 'Roboto';
        font-size: 30px;
        margin: 0;
        margin-bottom: 10px;
    }
    > hr {
        display: table;
        width: 55px;
        height: 5px;
        background-color: #FF5700;
        border: none;
        margin: 0;
        margin-bottom: 36px;
    }
    > div {
        width: 100%;
        height: 540px;
        text-align: center;
        border-top: 2px solid #858585;
        background-color: #ffffff;
        box-shadow: 0px 8px 16px 0px grey;
        > header > div > span {
            font-weight: bold;
        }
        div {
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #858585;
            display: flex;
            box-sizing: border-box;
            > img {
                position: absolute;
                left: -32.7px;
            }
        }
        > main > div:nth-child(8) {
            border: none;
        }
        span {
            font-family: 'Roboto';
            width: 110px;
            height: 67px;
            line-height: 67px;
            &:nth-child(2) {                
                flex: 1;
            }
            overflow: hidden;
        }
    }
`;

export const HomeWorkBoardItemWrapper = styled.div`
    > span:nth-child(4) {
        color: ${props => props.isImportant ? '#FF5700' :'#1D73FF'};
    }
`;

export const PaginationWrapper = styled.footer`
    width: 230px;
    height: 30px;
    display: flex;
    justify-content: center;
    margin-top: 19px;
    div {
        width: 30px;
        height: 30px;
        border: 1px solid #2E2E2E;
        background-color: #ffffff;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        > img {
            // width: 10px;
            height: 10px;
            
        }
    }
    > ul {
        width: auto;
        margin: 0 10px;
        padding: 0;
        display: flex;
        justify-content: space-between;
        > li {
            margin: 0;
            list-style: none;
            text-align: center;
            line-height: 30px;
            width: 30px;
            height: 30px;
            cursor: pointer;
            > a {
                text-decoration: none;
                color: #858585;
            }
        }
    }
`;

export const PaginationItemBlock = styled.li`
    ${({ activeStyle }) => activeStyle ? {
        display: 'block',
        width: '30px',
        height: '30px',
        border: '1px solid #2E2E2E',
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
        color: '#1A1A1A',
        fontFamily: 'Roboto'
    } : ''}
`;