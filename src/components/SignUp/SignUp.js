import React, { useState, useEffect, useCallback } from 'react';
import * as S from './styles';
import blackXButton from './img/blackXButton.png';
import checkIcon from './img/checkIcon.png';
import ApiDefault from '../utils';

const SignUp = ({modalOn, setModalOn}) => {
    const [page, setPage] = useState(1);
    const [sliding, setSliding] = useState(false);
    const [isPaint, setIsPaint] = useState(false);
    const [signupInfo, setSignupInfo] = useState({
        name: "",
        studentNumber: "",
        personalCode: "",
        email: "",
        emailCode: "",
        password: "",
        chkPassword: "",
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
        e.preventDefault();
        if (page === 1) {
             if (!signupInfo.name || !signupInfo.studentNumber || !signupInfo.email || !signupInfo.emailCode) return alert('모든 입력칸은 빈칸일 수 없습니다.');
            let form = new FormData();
            form.append('email', signupInfo.email);
            form.append('code', signupInfo.emailCode);
            ApiDefault.post('user/validemail', form).then(res => {
                setIsPaint(true);
                setTimeout(() => {
                    setIsPaint(false);
                    setPage(2);
                }, 1000);
            }).catch(err => {
                switch (err.response.status) {
                    case 400: 
                        alert('입력칸은 비워둘 수 없습니다.');
                        break;
                    case 401:
                        alert('인증코드가 일치하지 않습니다.');
                        break;
                    case 409:
                        alert('이미 가입된 사용자 입니다.');
                        break;
                    default:
                        alert('인증에 실패하였습니다.');
                }
            })
        } else if (page === 2) {
            if (!signupInfo.personalCode || ! signupInfo.password || !signupInfo.chkPassword) return alert('모든 입력칸은 빈칸일 수 없습니다.');
            if (signupInfo.password !== signupInfo.chkPassword) return alert('비밀번호가 일치하지 않습니다.');
            ApiDefault.post('user', {
                "userEmail": signupInfo.email,
                "userPw": signupInfo.password,
                "userName": signupInfo.name,
                "userNumber": signupInfo.studentNumber,
                "authCode": signupInfo.personalCode
            }).then(res => {
                setModalOn({ ...modalOn, signup: false });
            }).catch(err => {
                alert('회원가입에 실패하였습니다.');
            })
        }
    }, [signupInfo, page]);
    const onCheckEmail = useCallback(() => {
        let form = new FormData();
        form.append('email', signupInfo.email);
        ApiDefault.post('user/authemail', form).then(res => {
            alert('인증코드가 이메일로 발송되었습니다.');
        }).catch(err => {
            switch (err.response.status) {
                case 410: {
                    alert('이미 가입된 이메일 입니다.');
                    break;
                }
                default : {
                    
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
                    <img alt="종료버튼" src={blackXButton}  onClick={() => setModalOn({ ...modalOn, signup: false })}/>
                    <S.MainWrapper>
                        <h1>SIGNUP</h1>
                        { 
                            page === 1 ?
                            <>
                                <section>
                                    <div>
                                        <div>
                                            <span>이름</span>
                                            <S.LOGINSIGNUPInput placeholder="이지은" name="name" onChange={onChange} value={signupInfo.name} />
                                        </div>
                                        <div>
                                            <span>학번</span>
                                            <S.LOGINSIGNUPInput placeholder="1101" name="studentNumber" onChange={onChange} value={signupInfo.studentNumber} />
                                        </div>
                                    </div>
                                    <div>
                                        <S.InputWrapperWithAuthorization>
                                            <span>이메일 주소</span>
                                            <div>
                                                <S.LOGINSIGNUPInput placeholder="sample@dsm.hs.kr" name="email" onChange={onChange} value={signupInfo.email} />
                                                <button onClick={onCheckEmail}>인증</button>
                                            </div>
                                        </S.InputWrapperWithAuthorization>
                                        <form onSubmit={onSubmit}>
                                            <span>이메일 인증</span>
                                            <S.LOGINSIGNUPInput placeholder="이메일로 전송된 인증코드를 입력하세요." name="emailCode" onChange={onChange} value={signupInfo.emailCode} />
                                        </form>
                                    </div>
                                </section>
                                <S.NextButtonBlock isPaint={isPaint} onClick={onSubmit} >
                                    {
                                        isPaint === true ?
                                            <div>
                                                <img alt="확인이미지" src={checkIcon} />
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
                                            <S.LOGINSIGNUPInput placeholder="각자 본인에게 부여된 인증번호를 입력하세요." name="personalCode" onChange={onChange} value={signupInfo.personalCode}  />
                                        </div>
                                        <div>
                                            <span>비밀번호</span>
                                            <S.LOGINSIGNUPInput type="password" placeholder="6자 이상 12자 이하, 영문과 숫자 조합으로 만드세요." name="password" onChange={onChange} value={signupInfo.password} />
                                        </div>
                                        <form onSubmit={onSubmit}>
                                            <span>비밀번호 확인</span>
                                            <S.LOGINSIGNUPInput type="password" placeholder="비밀번호를 재입력해 주세요." name="chkPassword" onChange={onChange} value={signupInfo.chkPassword} />
                                        </form>
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