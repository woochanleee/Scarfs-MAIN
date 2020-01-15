import React from 'react';
import { HomeWorkBoardWrapper, HomeWorkTable } from './styles';
import HomeWOrkBoardItem from './HomeWorkBoardItem';
import importantIcon from '../../imgs/Main/importantIcon.png';


const HomeWorkBoardList = () => {
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
            <HomeWorkTable>
                <thead>
                    <tr>
                        <th>유형</th>
                        <th>제목</th>
                        <th>작성일</th>
                        <th>기한</th>
                        <th>조회수</th>
                        <th>팀원</th>
                        <th>제출여부</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        boadrList.map(data => <HomeWOrkBoardItem data={data} />)
                    }
                </tbody>
            </HomeWorkTable>
        </HomeWorkBoardWrapper>
    );
};

export default HomeWorkBoardList;