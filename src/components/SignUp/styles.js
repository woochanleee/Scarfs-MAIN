import styled from 'styled-components';
import signupBackground from './img/signupBackground.png';
import loginBackground from '../Login/img/loginBackground.png';

export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(26, 26, 26, 0.6);
    overflow: hidden;
`;

export const LOGINSIGNUPWrapper = styled.div`
    width: 1166px;
    height: 533px;
    position: relative;
    top: ${props => props.sliding === true ? '50%' : '100%'};
    left: ${props => props.sliding === true ? '50%' : '100%'};
    transform: translate(-50%, -50%);
    display: flex;
    transition: all 0.5s linear;
    `;
    
    export const SignUpLeftBlock = styled.div`
    width: 583px;
    height: 533px;
    background-image: url(${signupBackground});
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: #ffffff;
    border-radius: 10px 0 0 10px;
    > h1 {
        position: relative;
        bottom: 38%;
        margin: 0;
        font-family: 'Roboto';
        font-size: 55px;
    }
    > h4 {
        margin: 0;
        margin-bottom: 8px;
        font-family: 'Eras-ITC';
    }
`;

export const SignUpRightBlock = styled.div`
    width: 583px;
    height: 533px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #F8F8F8;
    border-radius: 0 10px 10px 0;
    > img {
        width: 15px;
        height: 15px;
        position: relative;
        right: -46.5%;
        margin-top: 12px;
    }
    > h4 {
        margin: 0;
        margin-bottom: 8px;
    }
`;

export const MainWrapper = styled.main`
    width: 400px;
    height: auto;
    margin-bottom: 25px;
    > h1 {
        margin-bottom: 32px;
    }
    > section {
        width: 100%;
        > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 8px;
            > div, > form {
                display: flex;
                flex-direction: column;
                width: 400px;
                > span {
                    font-family: 'Roboto';
                    font-size: 14px;
                    font-weight: bold;
                    color: #1A1A1A;
                    margin-bottom: 4px;
                    margin-top: 8px;
                }
                > div {
                    display: flex;
                    width: 100%;
                }
            }
        }
    }
`;

export const LOGINSIGNUPInput = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #858585;
    box-sizing: border-box;
    padding-left: 8px;
    border-radius: 2px;
`; 

export const InputWrapperWithAuthorization = styled.div`
    width: 400px;
        > div {
            > input {
            border-right: none;
            border-radius: 2px 0px 0px 2px;
        }
        > button {
            width: 78px;
            height: 40px;
            background-color: #1A1A1A;
            border: none;
            color: #1A1A1A;
            border-radius: 0px 2px 2px 0px;
            font-family: 'Roboto';
            color: #F8F8F8;
            box-sizing: border-box;
            transition: all 0.3s linear;
        }
    }
`;

export const ShortInputWrapper = styled.div`
    > div:nth-child(1) {
        width: 200px;
    }
    > div:nth-child(2) {
        width: 180px;
    }
`;

export const LoginLeftBlock = styled.div`
    width: 583px;
    height: 533px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: #F8F8F8;
    border-radius: 10px 0 0 10px;
    > img {
        width: 15px;
        height: 15px;
        position: relative;
        right: -46.5%;
        margin-top: 12px;
    }
    > h4 {
        margin: 0;
        margin-bottom: 8px;
    }
    > main {
        margin-bottom: 100px;
    }
`;

export const LoginRightBlock = styled.div`
    width: 583px;
    height: 533px;
    background-image: url(${loginBackground});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    border-radius: 0 10px 10px 0;
    > img {
        width: 15px;
        height: 15px;
        position: relative;
        right: -46.5%;
        margin-top: 12px;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        > h1 {
            font-family: 'Roboto';
            font-size: 35px;
            margin-bottom: 32px;
            text-align: center;
        }
        > div {
            text-align: center;
            border-radius: 40px;
            border: 3px solid #FFFFFF;
            background-color: transparent;
            width: 267px;
            height: 54px;
            > a, > span {
                margin: 0 auto;
                line-height: 54px;
                text-decoration: none;
                color: #FFFFFF;
                font-family: 'Roboto';
                font-size: 25px;
                font-weight: bold;
            }
        }
    } 
    > h4 {
        margin: 0;
        margin-bottom: 8px;
        font-family: 'Eras-ITC';
    }
`;

export const NextButtonBlock = styled.footer`
    background-color: ${props => props.isPaint !== undefined ? (props.isPaint === false ? '#858585' : '#1D73FF') : '#1A1A1A'};
    transition: all 0.5s linear;
    margin-top: 32px;
    width: 400px;
    height: 40px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        height: 17px;
        width: 194px;
        display: flex;
        justify-content: space-between;
        > img {
            width: 17px;
            height: 17px;                
        }
        > p {
            margin: 0;
            font-family: 'Roboto';
            font-size: 15px;
            color: #F8F8F8;
            line-height: 21px;
        }
    }
    > h1 {
        font-family: 'Roboto';
        font-size: 19px;
        color: #FFFFFF;
        margin: 0;
    }
`;