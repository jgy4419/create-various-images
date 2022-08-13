import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// https://www.canva.com/ko_kr/create/memes/
const Header = () => {
    let router = useRouter();

    let [menu_li, setMenu_li] = useState(['홈', '디자인', 'about']);
    let [menu_design, setMenu_design] = useState(['재밌는 사진', '현수막 제작', '명함', '다른 사람이 만든 사진', '다른 기능']);
    let [urlList, setUrlList] = useState(['/', '', '/about']);
    let [url_designList, set_Url_designList] = useState(['/makeImage', '/banner', '/businessCard', '/others', '/test']);
    let [menuState, setMenuState] = useState(0);

    useEffect(() => {
        const design_li = document.querySelectorAll('.design_menu_li');
        const menu_li = document.querySelectorAll('.menu_li')
        menu_li[1].addEventListener('mouseover', () => {
            design_li.forEach(item => {
                item.style.display = 'block'
            })
            setMenuState(1);
            document.querySelector('.close').style.display = 'block';
        })
        document.querySelector('.close').addEventListener('click', () => {
            design_li.forEach(item => {
                item.style.display = 'none'
            })
            setMenuState(0);
            document.querySelector('.close').style.display = 'none';
        });
    }, [menuState]);

    useEffect(() => {
        const design_li = document.querySelectorAll('.design_menu_li');
        // url이 변경되면 실행되는 코드
        router.events.on('routeChangeComplete', () => {
            setMenuState(0);
            design_li.forEach(item => {
                item.style.display = 'none'
            })
            document.querySelector('.close').style.display = 'none';
        })
    }, []);


    // url 적용
    function UrlList() {
        let array = []; 
        for (let i = 0; i < 3; i++){
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
                    <ul className="nav_ul flex items-center mx-10">
                        {
                            menu_design.map((item, index) => {
                                return (
                                    <Link key={index} href={ url_designList[index] }>
                                        <li className="hidden design_menu_li cursor-pointer ml-10 px-2 py-2 text-center nav_li hover:bg-gray-100 rounded-md text-lg"
                                        >{item}</li>
                                    </Link>
                                )
                            })
                        }
                        <li className="close cursor-pointer hidden text-xl font-semibold ml-10">X</li>
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