import React, { useState, useEffect } from 'react';
import { MyProfileBlock } from './styles';
import ApiDefault, { IssuingToken } from '../utils';
const MyProfile = () => {
    const [myInfo, setMyInfo] = useState({});
    const myProfile = {
        studentNumber: 1201,
        name: '강신희',
        submit: '4',
        noSubmit: '2'
    };
    useEffect(() => {
        ApiDefault.get('user', {
            headers: {
                Authorization: localStorage.getItem('access_token')
            }
        }).then(res => {
            console.log(res);
            setMyInfo(res.data);
        }).catch(e => {
            console.log(e.response);
            // if (e.response.status === 410)
                // IssuingToken();
        })
    }, []);
    return (
        <MyProfileBlock>
            <h3>{myInfo.userNumber}{myInfo.userName}</h3>
            <section>
                <article>
                    <span>남은과제</span>
                    <span>{myInfo.userEmail}</span>
                </article>
                <article>
                    <span>제출한 과제</span>
                    <span>{myInfo.userType}</span>
                </article>
            </section>
        </MyProfileBlock>
    );
};

export default MyProfile;