import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import blackXButton from '../../Imgs/SignUp/blackXButton.png';
import checkIcon from '../../Imgs/SignUp/checkIcon.png';
import ApiDefault from '../utils';
import axios from 'axios';

const SignUp = ({modalOn, setModalOn}) => {
    const [page, setPage] = useState(1);
    const [authorization, setAutorization] = useState(false);
    const [sliding, setSliding] = useState(false);
    const [isPaint, setIsPaint] = useState(false);
    const [signupInfo, setSignupInfo] = useState({
        name: null,
        studentNumber: null,
        personalCode: null,
        email: null,
        emailCode: null,
        password: null,
        chkPassword: null,
    });
    const [isClicked, setIsClicked] = useState(false);
    const paintNextButton = () => {
        setIsPaint(true);
        setTimeout(() => {
            setIsPaint(false);
        }, 1000);
    };
    useEffect(() => {
        setTimeout(() => {
            setSliding(true);
        }, 1)
    }, []);
    const onChange = useCallback((e) => {
        setSignupInfo({
            ...signupInfo,
        [e.target.name]: e.target.value
        });
    }, [signupInfo]);
    const onSubmit = useCallback(e => {
        if (page === 1) {
            let form = new FormData();
            form.append('email', signupInfo.email);
            form.append('code', signupInfo.emailCode);
            // ApiDefault.post('user/validemail', form).then(res => {
            //     console.log(res);
            //     setPage(2);
            ApiDefault.post('auth', {
                userEmail: '030219woo@naver.com',
                userPw: "qwer1234"
            }).catch(err => {
                console.log(err);
            })
        } else if (page === 2) {

        }
    }, [signupInfo, page]);
    const onCheckEmail = useCallback(() => {
        let form = new FormData();
        form.append('email', signupInfo.email);
        axios({
            url: 'http://15.164.184.104:8888/user/authemail',
            method: 'post',
            data: form,
            headers: {
                "Allow-Control-Allow-Origin": "*",
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        // ApiDefault.post('​user​/authemail', form).then(res => {
        //     console.log(res);
        //     setIsClicked(true);
        // }).catch(err => {
        //     console.log(err);
        // })
    }, [signupInfo.email]);
    return (
        <S.ModalBackground>
            <S.LOGINSIGNUPWrapper sliding={sliding}>
                <S.SignUpLeftBlock>
                    <h1>WELCOME</h1>
                    <h4>SCARFS</h4>
                </S.SignUpLeftBlock>
                <S.SignUpRightBlock>
                    <img src={blackXButton}  onClick={() => setModalOn({ ...modalOn, signup: false })}/>
                    <S.MainWrapper>
                        <h1>SIGNUP</h1>
                        { 
                            page === 1 ?
                            <>
                                <section>
                                    <div>
                                        <div>
                                            <span>이름</span>
                                            <S.LOGINSIGNUPInput placeholder="이지은" name="name" onChange={onChange} />
                                        </div>
                                        <div>
                                            <span>학번</span>
                                            <S.LOGINSIGNUPInput placeholder="1101" name="studentNumber" onChange={onChange} />
                                        </div>
                                    </div>
                                    <div>
                                        <S.InputWrapperWithAuthorization isClicked={isClicked}>
                                            <span>이메일 주소</span>
                                            <div>
                                                <S.LOGINSIGNUPInput placeholder="sample@dsm.hs.kr" name="email" onChange={onChange} />
                                                <button onClick={onCheckEmail}>인증</button>
                                            </div>
                                        </S.InputWrapperWithAuthorization>
                                        <div>
                                            <span>이메일 인증</span>
                                            <S.LOGINSIGNUPInput placeholder="이메일로 전송된 인증코드를 입력하세요." name="emailCode" onChange={onChange} />
                                        </div>
                                    </div>
                                </section>
                                <S.NextButtonBlock isPaint={isPaint} onClick={onSubmit} >
                                    {
                                        isPaint === true ?
                                            <div>
                                                <img src={checkIcon} />
                                                <p>학생 정보가 인증되었습니다.</p>
                                            </div>
                                        : <h1>Next</h1>
                                    }
                                </S.NextButtonBlock>
                            </>
                            :
                            <>
                                <section>
                                    <div>
                                        <S.InputWrapperWithAuthorization>
                                            <span>개인 인증코드</span>
                                            <div>
                                                <S.LOGINSIGNUPInput placeholder="각자 본인에게 부여된 인증번호를 입력하세요." name="personalCode" onChange={onChange}  />
                                                <button onClick={paintNextButton}>인증</button>
                                            </div>
                                        </S.InputWrapperWithAuthorization>
                                        <div>
                                            <span>비밀번호</span>
                                            <S.LOGINSIGNUPInput placeholder="6자 이상 12자 이하, 영문과 숫자 조합으로 만드세요." name="password" onChange={onChange} />
                                        </div>
                                        <div>
                                            <span>비밀번호 확인</span>
                                            <S.LOGINSIGNUPInput placeholder="비밀번호를 재입력해 주세요." name="chkPassword" onChange={onChange} />
                                        </div>
                                    </div>
                                </section>
                                <S.NextButtonBlock>
                                    <h1>회원가입</h1>
                                </S.NextButtonBlock> 
                            </>
                        }
                    </S.MainWrapper>
                    <h4>2020 SCIENCE CLASS</h4>
                </S.SignUpRightBlock>
            </S.LOGINSIGNUPWrapper>
        </S.ModalBackground>
    );
};

export default SignUp;