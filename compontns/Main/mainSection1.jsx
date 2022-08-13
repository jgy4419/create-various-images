import React, {useEffect} from 'react';
import Image from 'next/image';
import macImg from '../../public/image/macbookImg.png';
const MainSection1 = () => {
    return (
        <>
            <div className="section1-contain">
                <div className="inner">
                    <div className="relative introduction-box">
                        <div className="textBox relative z-10 text-center top-10 text-white">
                            <p className="text-4xl font-bold">
                                개성 넘치는 사진 만들기
                            </p>
                            <p className="mt-5 text-2xl font-semibold">무료로 다양한 이미지를 만들어봐요!</p>
                        </div>
                        <div className="titleImg absolute top-0 w-full h-80 rounded-lg" />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .section1-contain{
                    position: relative;
                    top: 50px;
                    width: 100vw;
                    height: 400px;
                }
                .titleImg{
                    position: absolute;
                    filter: brightness(.5);
                    background-image: url('http://topclass.chosun.com/news/photo/202208/30526_40709_2247.jpg');
                }
            `}</style>
        </>
    );
};

export default MainSection1;