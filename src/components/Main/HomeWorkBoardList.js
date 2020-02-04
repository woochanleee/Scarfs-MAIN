import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeWorkBoardWrapper, PaginationWrapper } from './styles';
import importantIcon from '../../Imgs/Main/importantIcon.png';
import oIcon from '../../Imgs/Main/oIcon.png';
import xIcon from '../../Imgs/Main/xIcon.png';
import prevButton from '../../Imgs/Main/prevButton.png';
import nextButton from '../../Imgs/Main/nextButton.png';

const HomeWorkBoardList = () => {
    const activeStyle = {
        display: 'block',
        width: '30px',
        height: '30px',
        border: '1px solid #2E2E2E',
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
        color: '#1A1A1A',
        fontFamily: 'Roboto'
    };         
    const boadrList = [
        {
            id: 1,
            type: '실험',
            title: '제목',
            date: '2020.10.23',
            endDate: '2020.10.23',
            views: 53,
            team: false,
            submit: true,
            important: true
        },
        {
            id: 2,
            type: '실험',
            title: '제목',
            date: '2020.10.23',
            endDate: '2020.10.23',
            views: 53,
            team: false,
            submit: true,
        },
        {
            id: 3,
            type: '실험',
            title: '제목',
            date: '2020.10.23',
            endDate: '2020.10.23',
            views: 53,
            team: false,
            submit: true,
        },
        {
            id: 4,
            type: '실험',
            title: '제목',
            date: '2020.10.23',
            endDate: '2020.10.23',
            views: 53,
            team: false,
            submit: true,
        },
        {
            id: 5,
            type: '실험',
            title: '제목',
            date: '2020.10.23',
            endDate: '2020.10.23',
            views: 53,
            team: false,
            submit: true,
        },
        {
            id: 6,
            type: '실험',
            title: '제목',
            date: '2020.10.23',
            endDate: '2020.10.23',
            views: 53,
            team: false,
            submit: true,
        },
        {
            id: 7,
            type: '실험',
            title: '제목',
            date: '2020.10.23',
            endDate: '2020.10.23',
            views: 53,
            team: false,
            submit: true,
        },
        {
            id: 8,
            type: '실험',
            title: '제목',
            date: '2020.10.23',
            endDate: '2020.10.23',
            views: 53,
            team: false,
            submit: true,
        },
    ];
    return (
        <HomeWorkBoardWrapper>
            <h1>과제안내</h1>
            <hr />
            <div>
                <header>
                    <div>
                        <th>유형</th>
                        <th>제목</th>
                        <th>작성일</th>
                        <th>기한</th>
                        <th>조회수</th>
                        <th>팀원</th>
                        <th>제출여부</th>
                    </div>
                </header>
                <main>
                    {
                        boadrList.map(data => <div>
                            <td>{data.type}</td>
                            <td>{data.title}</td>
                            <td>{data.date}</td>
                            <td>{data.endDate}</td>
                            <td>{data.views}</td>
                            <td><img src={data.team ? oIcon : xIcon} /></td>
                            <td><img src={data.submit ? oIcon : xIcon} /></td>
                            {data.important ? <img src={importantIcon} /> : ''}
                        </div>)
                    }
                </main>
            </div>
            <PaginationWrapper>
                <div>
                    <img src={prevButton} />
                </div>
                <ul>
                    <li><NavLink exact to="/1" activeStyle={activeStyle}>1</NavLink></li>
                    <li><NavLink exact to="/2" activeStyle={activeStyle}>2</NavLink></li>
                    <li><NavLink exact to="/3" activeStyle={activeStyle}>3</NavLink></li>
                    <li><NavLink exact to="/4" activeStyle={activeStyle}>4</NavLink></li>
                    <li><NavLink exact to="/5" activeStyle={activeStyle}>5</NavLink></li>
                </ul>
                <div>
                    <img src={nextButton} />
                </div>
            </PaginationWrapper>
        </HomeWorkBoardWrapper>
    );
};

export default HomeWorkBoardList;