import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../SignUp/styles';
import blackXButton from '../../Imgs/SignUp/blackXButton.png';

const Login = ({ modalOn, setModalOn }) => {
    const [authorization, setAutorization] = useState(false);
    const [sliding, setSliding] = useState(false);
    const [isPaint, setIsPaint] = useState(false);
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
                                    <S.LOGINSIGNUPInput placeholder="sample@dsm.hs.kr" />
                                </div>
                                <div>
                                    <span>Password</span>
                                    <S.LOGINSIGNUPInput placeholder="●●●●●●" />
                                </div>
                            </div>
                        </section>
                        <footer>
                            <h1>로그인</h1>
                        </footer>
                    </S.MainWrapper>
                    <h4>2020 SCIENCE CLASS</h4>
                </S.LoginLeftBlock>
                <S.LoginRightBlock>
                    <img src={blackXButton} onClick={() => setModalOn({ ...modalOn, login: false })} />
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