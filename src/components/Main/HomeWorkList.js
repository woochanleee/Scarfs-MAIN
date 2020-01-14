import React from 'react';
import { HomeWorkListWrapper } from './styles';
import HomeWorkItem from './HomeWorkItem';

const HomeWorkList = () => {
    const homeWorkList = [
        {
            id: 1,
            title: '인포그래픽 제작',
            date: new Date(),
            'd-day': 11,
            type: '개인',
            submit: true
        },
        {
            id: 2,
            title: '정우영의 전구공장',
            date: new Date(),
            'd-day': 9,
            type: '실험',
            submit: false
        },
        {
            id: 3,
            title: '인포그래픽 제작',
            date: new Date(),
            'd-day': 11,
            type: '개인',
            submit: true
        },
        {
            id: 4,
            title: '정우영의 전구공장',
            date: new Date(),
            'd-day': 9,
            type: '실험',
            submit: false
        }
    ];
    return (
        <HomeWorkListWrapper>
            {
                homeWorkList.map(data => <HomeWorkItem key={data.id} data={data} />)
            }
        </HomeWorkListWrapper>
    );
};

export default HomeWorkList;