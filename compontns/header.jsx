import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// https://www.canva.com/ko_kr/create/memes/
const Header = () => {
    let router = useRouter();

    let [menu_li, setMenu_li] = useState(['홈', '이미지 만들기', '공유방', 'about']);
    let [urlList, setUrlList] = useState(['/', '/makeImage', '/share', '/about']);
    let [menuState, setMenuState] = useState(0);

    // url 적용
    function UrlList() {
        let array = []; 
        for (let i = 0; i < 4; i++){
            array.push(
                <Link href={urlList[i]}>
                    <li className="menu_li cursor-pointer ml-10 px-2 py-2 text-center hover:bg-gray-100 rounded-md text-lg">
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
                        <Link href="/">
                            <a className="logo cursor-pointer">LOGO</a>
                        </Link>
                        <UrlList/>
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