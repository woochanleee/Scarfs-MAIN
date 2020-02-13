import React, { useState, useEffect } from 'react';
import ApiDefault from '../utils';
import { HomeWorkBoardWrapper, PaginationWrapper, PaginationItemBlock } from './styles';
import importantIcon from './img/importantIcon.png';
import oIcon from './img/oIcon.png';
import xIcon from './img/xIcon.png';
import prevButton from './img/prevButton.png';
import nextButton from './img/nextButton.png';

const HomeWorkBoardList = ({ state, actions, homework }) => {
    const [nowPage, setNowPage] = useState(!homework.length ? undefined : 1);
    const [startPage, setStartPage] = useState(Math.floor((nowPage - 1) / 5) * 5 + 1);
    const [endPage] = useState(!homework.length ? undefined : homework.length % 8 !== 0 ? Math.floor(homework.length / 8) + 1: Math.floor(homework.length) / 8);
    const [paginationNumber, setPaginationNumber] = useState([]);
    useEffect(() => {
        const a = [];
        for (var i = 1; i <= endPage; i++) a.push(i);
        setPaginationNumber(a);
    }, [endPage]);
    return (
        <HomeWorkBoardWrapper>
            <h1>과제안내</h1>
            <hr />
            <div>
                <header>
                    <div>
                        <span>유형</span>
                        <span>제목</span>
                        <span>작성일</span>
                        <span>기한</span>
                        <span>팀원</span>
                        <span>제출여부</span>
                    </div>
                </header>
                <main>
                    {
                        homework.map((data, index) => {
                            if (index >= (nowPage * 8) || index < (nowPage - 1) * 8) return false;
                            let isTeam = null;
                            const getTeam = () => {
                                ApiDefault.get('team', {
                                    params: {
                                        homeworkId: data.id
                                    },
                                    headers: {
                                        Authorization: state.accessToken
                                    }
                                }).then(res => {
                                    isTeam = true;
                                }).catch(e => {
                                    isTeam = false;
                                })
                            };
                            getTeam();
                            return (<div key={data.id}>
                                <span>{data.homeworkType === 0 ? '개인' : data.homeworkType === 1 ? '팀' : '실험'}</span>
                                <span>{data.homeworkTitle}</span>
                                <span>{new Date(data['created_at']).yyyymmddWithDot()}</span>
                                <span>{new Date(data['homework_deadline']).yyyymmddWithDot()}</span>
                                <span><img alt="팀아이콘" src={isTeam === undefined ? '' : isTeam ? oIcon : xIcon} /></span>
                                <span><img alt="제출현황아이콘" src={data.submissionStatus ? oIcon : xIcon} /></span>
                                <img alt="중요아이콘" src={importantIcon} />
                            </div>);
                        })
                    }
                </main>
            </div>
            <PaginationWrapper>
                {
                    !homework.length ? '' : startPage === 1 ? '' :
                        <div onClick={() => {
                            setStartPage(startPage - 5);
                            setNowPage(startPage - 5);
                        }}>
                            <img alt="이전버튼" src={prevButton} />
                        </div>
                }
                <ul>
                    {
                        paginationNumber.map(n => {
                            console.log(n === 1 ? '/' : n);
                            if (n < startPage || n > startPage + 4) return false;
                            return <PaginationItemBlock key={n} activeStyle={n === nowPage} onClick={() => setNowPage(n)}><span>{n}</span></PaginationItemBlock>;
                        })
                    }
                </ul>
                {
                    !homework.length ? '' : (startPage - 1) / 5 === Math.floor((endPage - 1) / 5) ? '' :
                        <div onClick={() => { 
                            setStartPage(startPage + 5);
                            setNowPage(startPage + 5);
                        }}>
                            <img alt="다음버튼" src={nextButton} />
                        </div>
                }
            </PaginationWrapper>
        </HomeWorkBoardWrapper>
    );
};

export default HomeWorkBoardList;