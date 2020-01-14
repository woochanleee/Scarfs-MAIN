import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Main = () => {
    return (
        <S.MainBackground>
            <header>
                <div>
                    <h1>SCARFS</h1>
                    <ul>
                        <li>
                            <Link>과제</Link>
                        </li>
                        <li>
                            <Link>QnA</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </S.MainBackground>
    );
};

export default Main;