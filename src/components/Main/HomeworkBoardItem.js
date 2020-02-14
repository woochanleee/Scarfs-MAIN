import React from 'react';
import { HomeWorkBoardItemWrapper } from './styles';
import importantIcon from './img/importantIcon.png';
import oIcon from './img/oIcon.png';
import xIcon from './img/xIcon.png';

const HomeworkBoardItem = ({ data, isTeam, isImportant }) => {
    return (
        <HomeWorkBoardItemWrapper isImportant={isImportant}>
            <span>{data.homeworkType === 0 ? '개인' : data.homeworkType === 1 ? '팀' : '실험'}</span>
            <span>{data.homeworkTitle}</span>
            <span>{new Date(data['created_at']).yyyymmddWithDot()}</span>
            <span>{new Date(data['homework_deadline']).yyyymmddWithDot()}</span>
            <span><img alt="팀아이콘" src={isTeam === undefined ? '' : isTeam ? oIcon : xIcon} /></span>
            <span><img alt="제출현황아이콘" src={data.submissionStatus ? oIcon : xIcon} /></span>
            {isImportant ? <img alt="중요아이콘" src={importantIcon} /> : ''}
        </HomeWorkBoardItemWrapper>
    );
};

export default HomeworkBoardItem;