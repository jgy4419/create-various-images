import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import macImg from '../../public/image/macbookImg.png';

const MainSection3 = () => {
    // const macbookImg = '../../public/image/macbookImg.png';
    const [useList, setUseState] = useState([
        '1. 원하는 사진 파일을 넣어줍니다.',
        '2. 사진에 넣고 싶은 글을 넣어줍니다.',
        '3. 위치를 정해주고, 저장 버튼을 눌러줍니다.',
        '4. 받은 파일을 친구들한테 공유하면서 사용한다.'
    ]);
    return (
        <>
            <div className="section3-contain rounded-lg">
                <div className="inner h-96 bg-gray-100 flex justify-around items-center">
                    <Image
                        priority
                        src={ macImg }
                        height={300}
                        width={350}
                        alt='맥북 이미지'
                    />
                    <ul className="leading-10 text-2xl font-semibold">쉽고 빠른 사진 만드는 방법
                        {
                            useList.map((list, index) => {
                                return (
                                    <li className="leading-10 text-xl font-medium" key={index}>{ list }</li>           
                                )
                            })
                        }
                    </ul>
                </div>
            </div>   
            <style jsx>{`
                .section3-contain{
                    position: relative;
                    width: 100vw;
                    margin: auto;
                }
            `}</style>
        </>
    );
};

export default MainSection3;