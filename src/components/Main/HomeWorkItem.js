import React from 'react';
import { HomeWorkItemWrapper } from './styles';

const HomeWorkItem = ({ data }) => {
    // homeworkType: 개인0 팀1 실험2
    return (
        <HomeWorkItemWrapper submit={data.submissionStatus}>
            <main>
                <h1>{data.homeworkTitle}</h1>
                <div>
                    <p>{new Date(data['created_at']).yyyymmddWithDot()} - {new Date(data['homework_deadline']).yyyymmddWithDot()}</p>
                    <span>{Date.prototype.getDifferenceDate(data['homework_deadline'], data['created_at'])}일</span>
                </div>
            </main>
            <footer>
                <span>[{data.homeworkType === 0 ? '개인' : data.homeworkType === 1 ? '팀' : '실험'}]</span>
                <div><span>{data.submissionStatus ? '제출함' : '제출하지 않음'}</span></div>
            </footer>
        </HomeWorkItemWrapper>           
    );
};

export default HomeWorkItem;