import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import blackXButton from './img/blackXButton.png';
import checkIcon from './img/checkIcon.png';
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
            ApiDefault.post('user/validemail', form).then(res => {
                console.log(res);
                setIsPaint(true);
                setTimeout(() => {
                    setIsPaint(false);
                    setPage(2);
                }, 1000);
                
            }).catch(err => {
                console.log(err);
            })
        } else if (page === 2) {
            ApiDefault.post('user', {
                "userEmail": signupInfo.email,
                "userPw": signupInfo.password,
                "userName": signupInfo.name,
                "userNumber": signupInfo.studentNumber,
                "authCode": signupInfo.authCode
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    }, [signupInfo, page]);
    const onCheckEmail = useCallback(() => {
        let form = new FormData();
        form.append('email', signupInfo.email);
        ApiDefault.post('user/authemail', form).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err.response.status);
            switch (err.response.status) {
                case 410: {
                    alert('이미 가입된 이메일 입니다.');
                    break;
                }
            }
        })
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
                                        <S.InputWrapperWithAuthorization>
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
                            : ''
                        }
                        {
                            page === 2 ?
                            <>
                                <section>
                                    <div>
                                        <div>
                                            <span>개인 인증코드</span>
                                            <S.LOGINSIGNUPInput placeholder="각자 본인에게 부여된 인증번호를 입력하세요." name="personalCode" onChange={onChange}  />
                                        </div>
                                        <div>
                                            <span>비밀번호</span>
                                            <S.LOGINSIGNUPInput type="password" placeholder="6자 이상 12자 이하, 영문과 숫자 조합으로 만드세요." name="password" onChange={onChange} />
                                        </div>
                                        <div>
                                            <span>비밀번호 확인</span>
                                            <S.LOGINSIGNUPInput type="password" placeholder="비밀번호를 재입력해 주세요." name="chkPassword" onChange={onChange} />
                                        </div>
                                    </div>
                                </section>
                                <S.NextButtonBlock onClick={onSubmit}>
                                    <h1>회원가입</h1>
                                </S.NextButtonBlock> 
                            </>
                            : ''
                        }
                    </S.MainWrapper>
                    <h4>2020 SCIENCE CLASS</h4>
                </S.SignUpRightBlock>
            </S.LOGINSIGNUPWrapper>
        </S.ModalBackground>
    );
};

export default SignUp;