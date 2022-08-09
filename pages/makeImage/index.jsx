import React, {useState, useEffect} from 'react';

const MakeImage = () => {
    const [data, setData] = useState('!');
    useEffect(() => {
        fetch('../api/data')
            .then(res => res.json())
            .then(data => {
                setData(data.name);
            })
    }, []);
    return (
        <div>
            <p>이미지 만들어 주는 사이트</p>
            <p>가져온 데이터 : { data }</p>
        </div>
    );
};

export default MakeImage;