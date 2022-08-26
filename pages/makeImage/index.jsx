import React, { useState, useEffect } from 'react';
import WritingInput from '../../compontns/MakeImage/writingInput';
import FileUpload from '../../compontns/MakeImage/fileUpload';

const MakeImage = () => {
    const [imgData, setImgData] = useState('');
    useEffect(() => {
        alert('이미지를 먼저 넣어주세요!');
    }, []);
    return (
        <>
            <div className="makeImageContain w-screen">
                <div className="inner">
                    <WritingInput imgData={imgData} />
                    {/* 자식한테 데이터를 받을 땐 useState의 setter 부분을 전송. */}
                    <FileUpload setImgData={ setImgData } />
                </div>
            </div>
        </>
    );
};

export default MakeImage;