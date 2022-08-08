import React, { useEffect, useState } from 'react';
// import scss from 'styled-jsx-plugin-sass';
// https://www.canva.com/ko_kr/create/memes/
const Header = () => {
    let [menu_li, setMenu_li] = useState(['홈', '디자인', 'about']);
    let [menu_design, setMenu_design] = useState(['X', '재밌는 사진', '현수막 제작', '명함', '다른 사람이 만든 사진', '다른 기능']);
    useEffect(() => {
        const li = document.querySelectorAll('.nav_li');
        for (let i = 0; i < li.length; i++){
            li[1].addEventListener('click', () => {
                setMenu_li(() => menu_design);   
            })
            li[0].addEventListener('click', () => {
                setMenu_li(() => ['홈', '디자인', 'about']);   
            })
        }
    }, []);
    return (
        <>
            <div className="h-4/5 w-screen">
                <div className="inner m-left">
                    <ul className="nav_ul flex items-center mx-10">
                        <li className="logo">LOGO</li>
                        {
                            menu_li.map((li, index) => {
                                return (
                                    <li key={index} className="ml-10 px-2 py-2 text-center nav_li hover:bg-gray-100 rounded-md text-lg">{ li }</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .nav_ul{
                    margin-top: 20px;
                }
                .nav_li{
                    font-weight: 500;
                    height: 40px;
                    cursor: pointer;
                }
            `}
            </style>
        </>
    );
};

export default Header;