import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import HomeWorkList from './HomeWorkList';
import list from '../../imgs/Main/list.png';
import stair from '../../imgs/Main/stair.png';
import scrollDown from '../../imgs/Main/scrollDown.png';
import MyProfile from './MyProfile';
import logOutButton from '../../imgs/Main/logOutButton.png';

const Main = () => {
    return (
        <S.MainBackground>
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
                        <article>
                            <p>DAEDEOK SOFTWARE MEISTER HIGH SCHOOL</p>
                            <h1>2020 SCIENCE CLASS</h1>
                            <hr />
                            <p>대덕소프트웨어마이스터고등학교</p>
                            <h3>2020 과학수업</h3>
                        </article>
                    </section>
                    <aside>
                        <S.HomeWorkStateBlock>
                            <HomeWorkList />
                            <div>
                                <h4>현재 과제</h4>
                                <img src={list} />
                            </div>
                        </S.HomeWorkStateBlock>
                        <S.ScrollStateBlock>
                            <div>
                                <img src={stair} />
                                <img src={scrollDown} />
                            </div>
                        </S.ScrollStateBlock>
                    </aside>
                </div>
            </main>
            <footer>
                <MyProfile />
                <img src={logOutButton} />
            </footer>
            <S.ScrollButton />
        </S.MainBackground>
    );
};

export default Main;