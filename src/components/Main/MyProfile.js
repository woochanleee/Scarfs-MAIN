import React from 'react';
import { MyProfileBlock } from './styles';
const MyProfile = () => {
    const myProfile = {
        studentNumber: 1201,
        name: '강신희',
        submit: '4',
        noSubmit: '2'
    };
    return (
        <MyProfileBlock>
            <h3>{myProfile.studentNumber}{myProfile.name}</h3>
            <section>
                <article>
                    <span>남은과제</span>
                    <span>{myProfile.noSubmit}</span>
                </article>
                <article>
                    <span>제출한 과제</span>
                    <span>{myProfile.submit}</span>
                </article>
            </section>
        </MyProfileBlock>
    );
};

export default MyProfile;