import React from 'react';

const data = {
    sbshin: {
        name: '신솔비',
        description: '프론트엔드 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const Profile = data[username];
    if (!Profile) {
        return <div>존재하지 않는 사용자입니다.</div>
    }
    return (
        <div>
            <h3>
                {username}({Profile.name})
            </h3>
            <p>{Profile.description}</p>
        </div>
    )
};

export default Profile;