import React, { useState, useEffect, useCallback } from 'react';
import * as S from '../SignUp/styles';
import blackXButton from '../SignUp/img/blackXButton.png';
import ApiDefault from '../utils';

const Login = ({ state, actions, modalOn, setModalOn }) => {
    const [sliding, setSliding] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email: null,
        password: null
    });
    useEffect(() => {
        setTimeout(() => {
            setSliding(true);
        }, 1)
    }, []);
    const onChange = useCallback(e => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        });
    }, [loginInfo]);
    const submitLogin = useCallback(async (e) => {
        e.preventDefault();
        try {
            const auth = await ApiDefault.post('auth', {
                userEmail: loginInfo.email,
                userPw: loginInfo.password
            });
            localStorage.setItem('access_token', auth.data.accessToken);
            localStorage.setItem('refresh_token', auth.data.refreshToken);
            actions.setAccessToken(auth.data.accessToken);
            actions.setRefreshToken(auth.data.refreshToken);
            actions.setLogged(true);
            setModalOn({ ...modalOn, login: false });
        } catch (error) {
            alert('아이디와 비밀번호를 확인해주세요.');
        }
    }, [loginInfo]);
    return (
        <S.ModalBackground>
            <S.LOGINSIGNUPWrapper sliding={sliding}>             
                <S.LoginLeftBlock>
                    <S.MainWrapper>
                        <h1>LOGIN</h1>
                        <section>
                            <div>
                                <div>
                                    <span>Email address</span>
                                    <S.LOGINSIGNUPInput name="email" placeholder="sample@dsm.hs.kr" onChange={onChange} />
                                </div>
                                <form onSubmit={submitLogin}>
                                    <span>Password</span>
                                    <S.LOGINSIGNUPInput type="password" name="password" placeholder="●●●●●●" onChange={onChange} />
                                </form>
                            </div>
                        </section>
                        <S.NextButtonBlock onClick={submitLogin}>
                            <h1>로그인</h1>
                        </S.NextButtonBlock>
                    </S.MainWrapper>
                    <h4>2020 SCIENCE CLASS</h4>
                </S.LoginLeftBlock>
                <S.LoginRightBlock>
                    <img alt="종료버튼" src={blackXButton} onClick={() => setModalOn({ ...modalOn, login: false })} />
                    <div>
                        <h1>아직 회원이 아니신가요?<br/>
                        지금 바로 가입하세요! </h1>
                        <div onClick={() => setModalOn({ ...modalOn, login: false, signup: true })}>
                            {/* <Link to="/signup/" >회원가입</Link> */}
                            <span>회원가입</span>
                        </div>
                    </div>
                    <h4>SCARFS</h4>
                </S.LoginRightBlock>
            </S.LOGINSIGNUPWrapper>
        </S.ModalBackground>
    );
};

export default Login;