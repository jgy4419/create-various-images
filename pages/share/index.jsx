import React, {useEffect, useState} from 'react';
import ShareImages from '../../compontns/share/shareImages';
import axios from 'axios';
import { getShareImgData } from '../../lib/shareData';

const SharePage = () => {
    let [shareData, setShareData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/shareImg').then(res => {
            setShareData(res.data);
            console.log(shareData);
        })
    }, []);
    return (
        <div className='w-screen'>
            <div className="inner m-auto w-9/12">
                <h1 className="w-full mt-10 text-center text-lg font-medium">다른 사람들이 만들어 놓은 이미지들을 모아놓은 곳이에요!</h1>
                <ShareImages
                 shareData={ shareData } />
            </div>
        </div>
    );
};

export default SharePage;