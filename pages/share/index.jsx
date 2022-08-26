import React, {useEffect, useState} from 'react';
import ShareImages from '../../compontns/share/shareImages';
import axios from 'axios';
import { getShareImgData } from '../../lib/shareData';

const SharePage = () => {
    let [shareData, setShareData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/shareImg').then(res => {
            // for (let i = 0; i < res.data.length; i++){
            setShareData(res.data);
            // }
            console.log(shareData);
        })
    }, []);
    return (
        <div>
            <h1>다른 사람들이 만들어 놓은 이미지들을 모아놓은 곳이에요!</h1>
            <ShareImages shareData={ shareData } />
        </div>
    );
};

export default SharePage;