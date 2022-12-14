import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import funImg1 from '../../public/image/funImg1.png';
import funImg2 from '../../public/image/funImg2.png';
import funImg3 from '../../public/image/funImg3.png';
import funImg4 from '../../public/image/funImg4.png';

const MainSection2 = () => {
    let [introductionItem, setIntroductionItem] = useState(['영화의 한 장면', '재밌게 대사', '사람들과 공유', '다양한 짤 구경']);
    let sectionImage = [funImg1, funImg2, funImg3, funImg4];
    let img = ['http://topclass.chosun.com/news/photo/202208/30526_40709_2247.jpg', ]
    return (
        <>
            <div className="section2-contain h-screen">
                <div className="inner relative">
                    <p className="text-center text-2xl font-semibold my-5">몇 분 만에 빠르게 만들어보아요!</p>
                    <ul className="abolute section2-ul md:block lg:flex flex-wrap justify-around w-full columns-3xs">
                    {
                        [...introductionItem].map((item, index) => {
                            return (
                                <div className="sectionImages">
                                    <Image
                                        src={sectionImage[index]}
                                        width={400}
                                        height={ 250}/>
                                </div>
                            )
                        })
                    }                           
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .section2-contain{
                    width: 100vw;
                    height: 700px;
                }
                .section2-ul{
                    height: 300px;
                }
                .sectionImages{
                    margin-top: 20px;
                }
                @media screen and (max-width: 1023px) {
                    .section2-contain{
                        width: 100vw;
                        height: 160vh;
                    }
                }
            `}
            </style>
        </>
    );
};

export default MainSection2;