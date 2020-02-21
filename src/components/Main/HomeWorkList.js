import React, { useEffect } from 'react';
import { HomeWorkListWrapper } from './styles';
import HomeWorkItem from './HomeWorkItem';
import ApiDefault from '../utils';

const HomeWorkList = ({ state, actions, homework, setHomework }) => {
    useEffect(() => {
        Date.prototype.yyyymmddWithDot = function() {
            var mm = this.getMonth() + 1; // getMonth() is zero-based
            var dd = this.getDate();
          
            return [
                this.getFullYear(),
                (mm > 9 ? '' : '0') + mm,
                (dd > 9 ? '' : '0') + dd
            ].join('.');
        };          
        Date.prototype.getDifferenceDate = (end, start) => {
            const date1 = new Date(start);
            const date2 = new Date(end);
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            
            return diffDays;
        }
        const getHomework = () => {
            ApiDefault.get('homework', {
                headers: {
                    Authorization: state.accessToken
                }
            }).then(res => {
                // setHomework(res.data);
            }).catch(e => {
                // actions.IssuingToken().then(() => getHomework()).catch(() => actions.setLogged(false));
            })
        };
        getHomework();
    }, []);
    return (
        <HomeWorkListWrapper>
            {
                homework.map(data => <HomeWorkItem key={data.id} data={data} />)
            }
        </HomeWorkListWrapper>
    );
};

export default HomeWorkList;