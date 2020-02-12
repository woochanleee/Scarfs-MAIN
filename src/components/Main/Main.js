import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import HomeWorkList from './HomeWorkList';
import HomeWorkBoardList from './HomeWorkBoardList';
import list from './img/list.png';
import stair from './img/stair.png';
import scrollDown from './img/scrollDown.png';
import scrollDown2 from './img/scrollDown2.png';
import MyProfile from './MyProfile';
import logoutButton from './img/logOutButton.png';
import loginButton from './img/loginButton.png';
import signUpButton from './img/signUpButton.png';
import Background from './img/background.png';
import Background2 from './img/background2.png';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login'

const Main = ({ state, actions }) => {
    const [page, setPage] = useState(1);
    const pageBackground = useRef();
    const homeWorkStateBlock = useRef();
    const scrollButon = useRef();
    const [modalOn, setModalOn] = useState({
        login: false,
        signup: false
    });
    const [homework, setHomework] = useState([]);
    const changePage = useCallback(() => {
        if (state.logged) {
            scrollButon.current.style.bottom = page === 2 ? '5%' : 'unset';
            scrollButon.current.style.top = page === 1 ? '5%' : 'unset';
            setPage(page === 1 ? 2 : 1);
        }
    }, [state.logged, page]);
    useEffect(() => {
        if (state.logged) {
            pageBackground.current.style.backgroundPosition = `${page === 2 ? 'center -108vh' : 'center 100vh'}`;
            pageBackground.current.style.transition = '300ms linear';
            setTimeout(() => {
                pageBackground.current.removeAttribute('style');
                pageBackground.current.style.backgroundImage = page === 1 ? `url(${Background})` : `url(${Background2})`;
            }, 300);
            pageBackground.current.addEventListener('mousewheel', function(e) {
                e.stopPropagation();
                if (e.deltaY > 0 && page === 1 || e.deltaY < 0 && page === 2)
                    changePage();
            });
            if (homeWorkStateBlock.current !== undefined) 
                homeWorkStateBlock.current.addEventListener('mousewheel', e => {
                    if (page === 1)
                        e.stopPropagation();
                    else if (e.deltaY < 0 && page === 2)
                        setPage(page - 1);
                });

        }
    }, [state.logged, page]);
    useEffect(() => {
        pageBackground.current.style.backgroundPosition = '0% 0%';
        pageBackground.current.style.backgroundImage = `url(${Background})`;
    }, []);
    return (
        <>
            <S.MainBackground page={page} ref={pageBackground}>
                <header>
                    <div>
                        <h2>SCARFS</h2>
                        <ul>
                            <li>
                                <Link>과제</Link>
                            </li>
                            <li>
                                <Link>QnA</Link>
                            </li>
                        </ul>
                    </div>
                </header>
                <main>
                    <div>
                        <section>
                            {
                                page === 1 ? 
                                    <article>
                                        <p>DAEDEOK SOFTWARE MEISTER HIGH SCHOOL</p>
                                        <h1>2020 SCIENCE CLASS</h1>
                                        <hr />
                                        <p>대덕소프트웨어마이스터고등학교</p>
                                        <h3>2020 과학수업</h3>
                                    </article> :
                                    ''
                            }
                        </section>
                        {
                            page === 2 && state.logged?
                                <HomeWorkBoardList homework={homework} setHomework={setHomework} /> :
                            ''
                        }
                        <aside>
                                <S.HomeWorkStateBlock page={page} ref={homeWorkStateBlock}>
                                {
                                    state.logged === true ?
                                        <>
                                            <HomeWorkList homework={homework} setHomework={setHomework}  />
                                            <div>
                                                <h4>현재 과제</h4>
                                                <img src={list} />
                                            </div>
                                        </> :                                    ''
                                }
                                    </S.HomeWorkStateBlock>
                            <S.ScrollStateBlock page={page}>
                                <div>
                                    <div>
                                        <div />
                                        <div />
                                    </div>
                                    <img src={page === 1 ? scrollDown : scrollDown2} />
                                </div>
                            </S.ScrollStateBlock>
                        </aside>
                    </div>
                </main>
                <footer>
                    {
                        state.logged ? 
                        <>
                            <MyProfile />
                            <img src={logoutButton} onClick={() => {
                                if (window.confirm("정말 로그아웃 하시겠습니까?")) {
                                    localStorage.clear();
                                    actions.setAccessToken(null);
                                    actions.setRefreshToken(null);
                                    actions.setLogged(false);
                                }
                            }} />
                        </> :
                        <>
                            <img src={loginButton} onClick={() => setModalOn({ ...modalOn, login: true })} />
                            <img src={signUpButton} onClick={() => setModalOn({ ...modalOn, signup: true })}/>
                        </>
                    }
                </footer>
                <S.ScrollButton ref={scrollButon} page={page} onClick={changePage} />
            </S.MainBackground>
            {
                modalOn.signup === true ? 
                    <SignUp modalOn={modalOn} setModalOn={setModalOn} /> :
                    ''               
            }
            {
                modalOn.login === true ? 
                    <Login state={state} actions={actions} modalOn={modalOn} setModalOn={setModalOn} /> :
                    ''
            }
        </>
    );
};

export default Main;