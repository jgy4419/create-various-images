import React, {useState, useEffect} from 'react';

const MainSection2 = () => {
    let [introductionItem, setIntroductionItem] = useState(['재밌는 사진', '현수막 제작', '명함', '다른 사람이 만든 것들']);
    return (
        <>
            <div className="section2-contain">
                <div className="inner relative">
                    <p className="text-center text-2xl font-semibold">몇 분 만에 빠르게 만들어보아요!</p>
                    <ul className="abolute section2-ul flex flex-wrap justify-around w-full">
                    {
                        [...introductionItem].map((item, index) => {
                            return (
                                <li className="section2-li w-2/5 h-4/5 ml-1 bg-gray-100 border-2 mt-10 rounded-lg text-center"
                                    key={index}>
                                    { item }
                                </li>
                            )
                        })
                    }                           
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .section2-contain{
                    width: 100vw;
                    height: 90vh;
                }
                .section2-ul{
                    height: 300px;
                }
                .section2-li{
                    // width: 300px;
                    // height: 400px;
                }
            `}
            </style>
        </>
    );
};

export default MainSection2;