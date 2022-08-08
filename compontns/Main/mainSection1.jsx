import React, {useEffect} from 'react';
import DeskTopImg from '../../public/image/Desktop.jpeg';
import Image from 'next/image';
const MainSection1 = () => {
    return (
        <>
            <div className="section1-contain">
                <div className="inner">
                    <div className="introduction-box bg-gray-100 w-full h-80 rounded-lg"/>
                </div>
            </div>
            <style jsx>{`
                .section1-contain{
                    position: relative;
                    top: 50px;
                    width: 100vw;
                    height: 400px;
                }
            `}</style>
        </>
    );
};

export default MainSection1;