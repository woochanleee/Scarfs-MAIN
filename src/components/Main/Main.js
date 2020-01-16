import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import HomeWorkList from './HomeWorkList';
import HomeWorkBoardList from './HomeWorkBoardList';
import list from '../../imgs/Main/list.png';
import stair from '../../imgs/Main/stair.png';
import scrollDown from '../../imgs/Main/scrollDown.png';
import scrollDown2 from '../../imgs/Main/scrollDown2.png';
import MyProfile from './MyProfile';
import logoutButton from '../../imgs/Main/logoutButton.png';
import loginButton from '../../imgs/Main/loginButton.png';
import signUpButton from '../../imgs/Main/signUpButton.png';
import Background from '../../imgs/Main/background.png';
import Background2 from '../../imgs/Main/background2.png';

const Main = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [page, setPage] = useState(1);
    const pageBackground = useRef();
    const homeWorkStateBlock = useRef();
    useEffect(() => {
        pageBackground.current.style.backgroundPosition = `${page === 2 ? 'center -108vh' : 'center 100vh'}`;
        pageBackground.current.style.transition = '300ms linear';
        setTimeout(() => {
            pageBackground.current.removeAttribute('style');
            pageBackground.current.style.backgroundImage = page === 1 ? `url(${Background})` : `url(${Background2})`;
        }, 300);
        pageBackground.current.addEventListener('mousewheel', e => {
            e.stopPropagation();
            if (e.deltaY > 0 && page === 1)
                setPage(page + 1);
            else if (e.deltaY < 0 && page === 2)
                setPage(page - 1);
        });
        homeWorkStateBlock.current.addEventListener('mousewheel', e => {
            if (page === 1)
                e.stopPropagation();
            else if (e.deltaY < 0 && page === 2)
                setPage(page - 1);
        });
    }, [page]);
    useEffect(() => {
        pageBackground.current.style.backgroundPosition = '0% 0%';
        pageBackground.current.style.backgroundImage = `url(${Background})`;
    }, []);
    return (
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
                        page === 2 ?
                            <HomeWorkBoardList/> :
                        ''
                    }
                    <aside>
                        <S.HomeWorkStateBlock page={page} ref={homeWorkStateBlock}>
                            <HomeWorkList />
                            <div>
                                <h4>현재 과제</h4>
                                <img src={list} />
                            </div>
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
                    isLogin ? 
                    <>
                        <MyProfile />
                        <img src={logoutButton} />
                    </> :
                    <>
                        <img src={loginButton} />
                        <img src={signUpButton}/>
                    </>
                }
            </footer>
            <S.ScrollButton onClick={() => setPage(state => state === 1 ? 2 : 1)} />
        </S.MainBackground>
    );
};

export default Main;