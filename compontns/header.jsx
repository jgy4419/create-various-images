import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// https://www.canva.com/ko_kr/create/memes/
const Header = () => {
    let [menu_li, setMenu_li] = useState(['홈', '디자인', 'about']);
    let [menu_design, setMenu_design] = useState(['재밌는 사진', '현수막 제작', '명함', '다른 사람이 만든 사진', '다른 기능']);
    let [urlList, setUrlList] = useState(['/', '', '/about']);
    let [url_designList, set_Url_designList] = useState(['/makeImage', '/banner', '/businessCard', '/others', '/test']);
    let [menuState, setMenuState] = useState(0);
    useEffect(() => {
        const li = document.querySelectorAll('.nav_li');
        const close = document.querySelector('.close');
        (menuState === 1) ? close.style.display = 'block' : close.style.display = 'none';
        for (let i = 0; i < li.length; i++){
            li[1].addEventListener('click', () => {
                setMenu_li(() => menu_design);  
                setMenuState(1);
            })
        }
    }, []);

    // url 적용
    function UrlList() {
        let array = []; 
        let urlLeng = menuState === 0 ? 3 : 5;
        for (let i = 0; i < urlLeng; i++){
            array.push(
                <Link href={menuState === 0 ? urlList[i] : url_designList[i]}>
                    <li className="cursor-pointer ml-10 px-2 py-2 text-center nav_li hover:bg-gray-100 rounded-md text-lg">
                        {menu_li[i]}
                    </li>
                </Link>
            )
        }
        return array;
    }
    return (
        <>
            <div className="h-4/5 w-screen">
                <div className="inner m-left">
                    <ul className="nav_ul flex items-center mx-10">
                        <li className="logo">LOGO</li>
                        <UrlList />
                        <li onClick={() => {
                            setMenuState(0);
                            setMenu_li(() => ['홈', '디자인', 'about']); 
                        }}
                            className="close ml-20 font-semibold text-2xl cursor-pointer">X</li>
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