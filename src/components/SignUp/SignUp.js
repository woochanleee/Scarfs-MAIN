import React from 'react';
import * as S from './styles';
import blackXButton from '../../imgs/SignUp/blackXButton.png';
import checkIcon from '../../imgs/SignUp/checkIcon.png';

const SignUp = () => {
    return (
        <S.ModalBackground>
            <S.LOGINSIGNUPWrapper>
                <S.SignUpLeftBlock>
                    <h1>WELCOME</h1>
                    <h4>SCARFS</h4>
                </S.SignUpLeftBlock>
                <S.SignUpRightBlock>
                    <img src={blackXButton} />
                    <S.MainWrapper>
                        <h1>SIGNUP</h1>
                        {/* <section>
                            <div>
                                <div>
                                    <span>이름</span>
                                    <S.LOGINSIGNUPInput placeholder="이지은"  />
                                </div>
                                <div>
                                    <span>학번</span>
                                    <S.LOGINSIGNUPInput placeholder="1101" />
                                </div>
                            </div>
                            <div>
                                <S.InputWrapperWithAuthorization>
                                    <span>개인 인증코드</span>
                                    <div>
                                        <S.LOGINSIGNUPInput placeholder="각자 본인에게 부여된 인증번호를 입력하세요."  />
                                        <button>인증</button>
                                    </div>
                                </S.InputWrapperWithAuthorization>
                            </div>
                        </section>
                        <footer>
                            <div>
                                <img src={checkIcon} />
                                <p>학생 정보가 인증되었습니다.</p>
                            </div>
                        </footer> */}
                        <section>
                            <div>
                                <S.InputWrapperWithAuthorization>
                                    <span>이메일 주소</span>
                                    <div>
                                        <S.LOGINSIGNUPInput placeholder="sample@dsm.hs.kr" />
                                        <button>인증</button>
                                    </div>
                                </S.InputWrapperWithAuthorization>
                                <div>
                                    <span>이메일 인증</span>
                                    <S.LOGINSIGNUPInput placeholder="이메일로 전송된 인증코드를 입력하세요." />
                                </div>
                                <div>
                                    <span>비밀번호</span>
                                    <S.LOGINSIGNUPInput placeholder="6자 이상 12자 이하, 영문과 숫자 조합으로 만드세요." />
                                </div>
                                <div>
                                    <span>비밀번호 확인</span>
                                    <S.LOGINSIGNUPInput placeholder="비밀번호를 재입력해 주세요." />
                                </div>
                            </div>
                        </section>
                        <footer>
                            <h1>회원가입</h1>
                        </footer> 
                    </S.MainWrapper>
                    <h4>2020 SCIENCE CLASS</h4>
                </S.SignUpRightBlock>
            </S.LOGINSIGNUPWrapper>
        </S.ModalBackground>
    );
};

export default SignUp;