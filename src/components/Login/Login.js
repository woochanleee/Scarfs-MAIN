import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '../SignUp/styles';
import blackXButton from '../../imgs/SignUp/blackXButton.png';

const Login = () => {
    return (
        <S.ModalBackground>
            <S.LOGINSIGNUPWrapper>                
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
                    <img src={blackXButton} />
                    <div>
                        <h1>아직 회원이 아니신가요?<br/>
                        지금 바로 가입하세요! </h1>
                        <div>
                            <Link to="/signup/" >회원가입</Link>
                        </div>
                    </div>
                    <h4>SCARFS</h4>
                </S.LoginRightBlock>
            </S.LOGINSIGNUPWrapper>
        </S.ModalBackground>
    );
};

export default Login;