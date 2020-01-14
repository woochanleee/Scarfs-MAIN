import React from 'react';
import { HomeWorkItemWrapper } from './styles';

const HomeWorkItem = ({ data }) => {
    return (
        <HomeWorkItemWrapper submit={data.submit}>
            <main>
                <h1>{data.title}</h1>
                <div>
                    <p>{data.date.getTime()}</p>
                    <span>{data['d-day']}일</span>
                </div>
            </main>
            <footer>
                <span>[{data.type}]</span>
                <button>{data.submit ? '제출함' : '제출하지 않음'}</button>
            </footer>
        </HomeWorkItemWrapper>           
    );
};

export default HomeWorkItem;