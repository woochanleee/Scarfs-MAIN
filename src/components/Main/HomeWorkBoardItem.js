import React from 'react';
import oIcon from '../../imgs/Main/oIcon.png';
import xIcon from '../../imgs/Main/xIcon.png';
import { HomeWorkBoardItemBlock } from './styles';

const HomeWorkBoardItem = ({ data }) => {
    return (
        <HomeWorkBoardItemBlock>
            <th>{data.type}</th>
            <th>{data.title}</th>
            <th>{data.date}</th>
            <th>{data.endDate}</th>
            <th>{data.views}</th>
            <th><img src={data.team ? oIcon : xIcon} /></th>
            <th><img src={data.submit ? oIcon : xIcon} /></th>
        </HomeWorkBoardItemBlock>
    );
};

export default HomeWorkBoardItem;